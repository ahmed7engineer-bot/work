const products = [

{
    name:"كرسي عصري",
    price:"25,000 د.ع",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
},

{
    name:"طاولة خشبية",
    price:"80,000 د.ع",
    image:"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600"
},

{
    name:"طقم مطبخ",
    price:"35,000 د.ع",
    image:"https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600"
},

{
    name:"مصباح ديكور",
    price:"18,000 د.ع",
    image:"https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600"
},

{
    name:"نبتة زينة",
    price:"12,000 د.ع",
    image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600"
},

{
    name:"كنبة فاخرة",
    price:"250,000 د.ع",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700"
}

];

const grid = document.querySelector(".product-grid");

products.forEach(product=>{

grid.innerHTML +=`

<div class="card">

<img src="${product.image}">

<div class="card-content">

<h3>${product.name}</h3>

<p class="price">${product.price}</p>

<button>أضف إلى السلة</button>

</div>

</div>

`;

});
