import items from './items.json'


let amount = 0

if(localStorage.idStorage){
    let itemId = localStorage.idStorage.split(",")
    let checker = []

    items.forEach(eParent => {
        itemId.forEach(e => {
            if(eParent.id == e){
                if(checker.includes(eParent.id)){
                    amount++
                    console.log((amount, "amount"))
                    console.log(eParent.id,"parent id")

                    // changes quantity
                    const item = document.getElementsByClassName(`${eParent.id}`)
                    const quantity = item[0].querySelector('#cart-amount')
                    console.log(quantity)
                    const quantityNum = parseInt(quantity.value) + 1
                    quantity.value = quantityNum

                    // changes subtotal
                    const price = item[0].querySelector('#cart-price')
                    const priceNum = parseInt(price.innerText.replace('$',''))
                    let total = item[0].querySelector('#cart-total')
                    total.innerText = `$${quantityNum * priceNum}`
                    
                    
                }else{
                    console.log(eParent)
                    addToCart(eParent)
                    checker.push(eParent.id)
                    console.log(checker)
           
                }
            }
        });      
    });

      
    
 
    //remove item
    const removeButton = Array.from(document.querySelectorAll('#remove-button'))
    console.log(removeButton, "remove")
    removeButton.forEach(e =>{
        e.addEventListener("click", e => {
            const parent = e.target.closest('tr')
            parent.remove()
            const parentNum = parent.classList[0]
            let storage = localStorage.idStorage.split(",")


            storage.forEach(e => {
                if (e == parentNum){
                    let newLocal = localStorage.idStorage.replace(e,'')
                    newLocal = localStorage.idStorage.replace(`,${e}`,'')
                    newLocal = localStorage.idStorage.replace(`${e},`,'')
                    localStorage.idStorage = newLocal
                }
            })

            // if theres only one element in the local storage remaining
            let newLocal = localStorage.idStorage.replace(parentNum,'')
            localStorage.idStorage = newLocal
        })
    })
}else{
    console.log("no item added to cart")
}

function addToCart(id, checker){
    const template = document.querySelector('.invisible')
    const clone = template.cloneNode(true);
    clone.classList.remove('invisible')
    
    clone.classList.add(`${id.id}`)
   

    let imgParent = clone.children[1]
    let img = imgParent.children[0]

    img.innerHTML = `<img src="/${id.image}" alt="">`

    let name = clone.children[2]
    name.innerText = id.name

    let price = clone.children[3]
    price.innerText = `$${id.priceCents / 100}`
    const priceNum = parseInt(price.innerText.replace('$',''))

    let amountParent = clone.children[4]
    let amount = amountParent.children[0]
    const amountNum = parseInt(amount.value)
    
    let total = clone.children[5]
    total.innerText = `$${amountNum * priceNum}`

    const parent = document.querySelector('.cart-items')
    parent.appendChild(clone)
    
    // event listener
    
}



