// Get general fields
const $itemTitle = document.querySelector('.item-title span');
const $itemDesc = document.querySelector('.item-desc span');
const $itemPrice = document.querySelector('.item-cost span');
const $itemImg = document.querySelector('.item-image img');

// Set general fields value
$itemTitle.innerHTML = sessionStorage.getItem('title');
$itemDesc.innerHTML = sessionStorage.getItem('desc');
$itemPrice.innerHTML = sessionStorage.getItem('price');
$itemImg.src = sessionStorage.getItem('imgUrl');

let itemId = sessionStorage.getItem('id');
const itemInfo = {"Id": itemId,
                  "Title": $itemTitle.innerHTML,
                  "Description": $itemDesc.innerHTML,
                  "Price": $itemPrice.innerHTML,
                  "Image": $itemImg.src};

// Changing page title to item title/name
document.title = sessionStorage.getItem('title'); 

const $addToCartButton = document.querySelector('.item-add-to-cart');
$addToCartButton.addEventListener('click', () => {
    const isItemAlreadyInCart = itemsInCart.some(cartItem => cartItem.Id === itemInfo.Id);
    if (isItemAlreadyInCart) {
        const existingItem = itemsInCart.find(cartItem => cartItem.Id === itemInfo.Id);
        existingItem.amount = (existingItem.amount || 0) + 1;
    } else {
        itemInfo.amount = 1;
        itemsInCart.push(itemInfo);
    }
    console.log(itemsInCart);
});

// Window event listeners for clear sessionStorage
window.addEventListener('close', () => sessionStorage.clear()); // Clearing sessionStorage on page close event