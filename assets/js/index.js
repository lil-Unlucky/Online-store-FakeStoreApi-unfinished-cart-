const productList = document.querySelector('.product-list');

var cards = [],
    currentUrl = window.location.href;

async function getProducts() {
    await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> {
            json.forEach(product => {
                const newProduct = document.createElement('div');
                newProduct.className = 'product-card';
                newProduct.dataset.category = product.category;

                const fullTitle = product.title;
                const fullDescription = product.description;

                if (product.title.length > 50) product.title = product.title.substring(0, 50) + '...';
                if (product.description.length > 75) product.description = product.description.substring(0, 75) + "...";

                newProduct.innerHTML = 
                `
                    <div class="product-top">
                        <div class="product-image"><img src="${product.image}"></div>
                    </div>

                    <div class="product-bottom">
                        <div class="product-name">
                            <p class="product-name-title">${product.title}</p>
                        </div>
                        <div class="product-price">
                            <p>Price <p class="product-price-value">${product.price}$</p></p>
                        </div>
                        <div class="product-description">
                            <p class="product-description-desc">${product.description}</p>
                        </div>
                    </div>
                `;

                const card = { // Making card object with HTML element, HTML element data attr and other arg's
                    element: newProduct,
                    category: newProduct.dataset.category,
                    price: product.price + '$',
                    secondaryInfo: {
                        title: fullTitle,
                        description: fullDescription,
                    },
                    itemImg: product.image,
                    id: product.id,
                };

                card.element.addEventListener('click', () => { // Adding event listener for every card
                    sessionStorage.setItem('title', card.secondaryInfo.title);
                    sessionStorage.setItem('desc', card.secondaryInfo.description);
                    sessionStorage.setItem('price', card.price);
                    sessionStorage.setItem('imgUrl', card.itemImg);
                    sessionStorage.setItem('id', card.id);

                    window.location.href = 'item.html';
                });

                cards.push(card); // Add card to cards array
                productList.appendChild(newProduct); // Appending element/card to HTML product-list
            });
        });
}

if (productList) getProducts();

const catalogItems = document.querySelectorAll('.catalog-panel div a'); // Get every catalog links
if (catalogItems.length) {
    catalogItems.forEach(item => {
        let itemType = item.dataset.type; // Get data attr from anchor link
        item.addEventListener('click', event => {
            event.preventDefault(); // Remove default action from anchor link
            for (let i = 0; i < cards.length; i++) {
                const currentCard = cards[i].element; // Get card from html
                const currentCategory = cards[i].category; // Get card category
                // if currentCategory = itemType --> display=block else display=none
                (currentCategory === itemType) ? currentCard.style.display = 'block' : currentCard.style.display = 'none';
            }
        });
    });
}