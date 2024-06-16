const $cartWrapper = document.querySelector('.cart-wrapper');
var itemsInCart = [
    {
        "Id": "5",
        "Image": "https://images.unsplash.com/photo-1718042416613-43cc2d64f518?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Title": 'BIMBIM BAMBAM',
        "Description": 'JS CART DESC',
        "Price": '300',
        "amount": '5',
    },
];

window.onload = () => setInterval(cartRender($cartWrapper), 1500);

function cartRender(cartWindow) {
    if (cartWindow) {
        for (let key in itemsInCart) {
            let item = itemsInCart[key];
            cartWindow.innerHTML +=
            `
                <div class="cart-item">
                    <div class="cart-item__left">
                        <div class="cart-item__image-wrapper">
                            <img class="cart-item__image" src="${item["Image"]}">
                        </div>
                    </div>
        
                    <div class="cart-item__right">
                        <div class="cart-item__title-wrapper">
                            <p class="item-title">${item["Title"]}</p>
                        </div>
                        <div class="cart-item__description-wrapper">
                            <p class="item-description">${item["Description"]}</p>
                        </div>
                        <div class="cart-item__price-wrapper">
                            <p class="item-price">${item["Price"]}$</p>
                        </div>
                    </div>
                </div>
            `;
        };
    }
}