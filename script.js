import items from './items.json'

console.log(items)

const bar = document.querySelector('.list-mobile')
const close = document.querySelector('.close-nav')
let i = 0

function declareItemID(storage){
    if(!storage){
        console.log("deu certo")
        let itemId = []
        return itemId
    }else{
        let itemId = localStorage.idStorage.split(",")
        return itemId
    }
}

let itemId = declareItemID(localStorage.idStorage)


// open navbar in mobile
document.addEventListener('click', e => {
    if(!e.target.matches(".list-mobile")) return
    
    const nav = document.querySelector('.navbar-list')
    nav.classList.add('active')
})

// close navbar in mobile
if(close){
    close.addEventListener('click', e => {
        nav.classList.remove('active')
    })
}

// add cart item id and number to cart
document.addEventListener('click', e => {
    if(!e.target.matches(".product-cart")) return
    
    const cartNumber = document.querySelector('.cart-number')
    cartNumber.classList.add('active-number')
    if(cartNumber.innerText >= '9'){
        cartNumber.innerText = '9+'
    }else{
        i++
        cartNumber.innerText = i
    }
    
    itemId.push(e.target.dataset.id)
    localStorage.idStorage = (itemId)
    
    
    // addToCart(itemId)
})

// function addToCart(id){
    //     const template = document.querySelector('.invisible')
    //     const clone = template.cloneNode(true);
    //     clone.style.display = "yes"
//     const parent = document.querySelector('.cart-items')
//     parent.appendChild(clone)
// }


