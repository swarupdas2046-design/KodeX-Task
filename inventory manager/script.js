const products = [
  {
    product: "Red Apples",
    quantity: 40,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    price: 120,
    category: "fruit",
    expiryDate: "2026-03-18",
    description: "Sweet and crispy red apples directly sourced from Himachal farms."
  },
  {
    product: "Fresh Spinach",
    quantity: 18,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
    price: 30,
    category: "veg",
    expiryDate: "2026-03-05",
    description: "Green leafy spinach full of iron and essential nutrients."
  },
  {
    product: "Potato Chips",
    quantity: 60,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKuXKn9IFYIn-5LryUV5Q0-4t4DbN8OqqPw&s",
    price: 20,
    category: "snacks",
    expiryDate: "2026-08-12",
    description: "Crunchy salted potato chips perfect for evening snacks."
  },
 
];

let Showdata = document.querySelector(".Show-data")

let ShowScreen = ()=>{
    let cutller = ''
products.forEach((elem,idx)=>{
    cutller+= `     <div id=${idx} class="product-card">
    <div class="card-img">
        <img src="${elem.image}" alt="product">
    </div>

    <div class="card-content">
        <div class="top-row">
            <h3>${elem.product}</h3>
            <span class="price">$${elem.price}</span>
        </div>

        <span class="category">${elem.category}</span>

        <p class="description">
            ${elem.description}
        </p>

        <div class="info-row">
            <span>Qty: ${elem.quantity}</span>
            <span>Exp: ${elem.expiryDate}</span>
        </div>

        <div class="btn-row">
            <button id="${idx}" class="edit-btn">Edit</button>
            <button id="${idx}" class="delete-btn">Delete</button>
        </div>
    </div>
</div>`
})

Showdata.innerHTML = cutller
}

ShowScreen()

let form = document.querySelector("form")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(form.childNodes);
    let submted_product = {
        product: form.childNodes[1].value,
        quantity: form.childNodes[3].value,
        image: form.childNodes[5].value,
        price: form.childNodes[7].value,
        category: form.childNodes[9].value,
        expiryDate: form.childNodes[11].value,
        description: form.childNodes[13].value,
    }
    form.reset()
    products.unshift(submted_product)
    ShowScreen()
    console.log(submted_product);
    
    
        
    
})


Showdata.addEventListener('click',(e)=>{
  
    if(e.target.innerHTML == 'Delete' ){
            let idx = e.target.id
        products.splice(idx,1)
        ShowScreen() 
        
    }
    
})


Showdata.addEventListener('click',(e)=>{
    console.log(e.target.id);
         let idx = e.target.id
    if (e.target.innerHTML == 'Edit') {
        form.childNodes[1].value = products[idx].product
        form.childNodes[3].value = products[idx].quantity
        form.childNodes[5].value = products[idx].image
        form.childNodes[7].value = products[idx].price
        form.childNodes[9].value = products[idx].category
        form.childNodes[11].value = products[idx].expiryDate
        form.childNodes[13].value = products[idx].description
        
    }
    
})

