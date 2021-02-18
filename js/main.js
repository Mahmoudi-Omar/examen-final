let divDom = document.querySelector('.product-shopping-cart')
let CartArr = [];
let qtn=0;
let products = [
    {
        id:1,
        image:"images/10-600x600.jpg",
        title:"Samsung S20",
        description:"Samsung S20 Portable Wireless Speaker",
        price:"2850.00 TND"

    },
    {
        id:2,
        image:"images/5-600x600.jpg",
        title:"Kodak PIXPRO",
        description:"Kodak PIXPRO Astro Zoom AZ421 16 MP",
        price:"69.00 TND"
    },
    {
        id:3,
        image:"images/4-800x800.jpg",
        title:"Sony KD55X72",
        description:"Sony KD55X72 55-Inch 4k Ultra HD",
        price:"450.00 TND"
    },
    {
        id:4,
        image:"images/29-600x600.jpg",
        title:"Kodak PIXPRO",
        description:"Kodak PIXPRO Astro Zoom AZ421 16 MP",
        price:"47.00 TND"
    }
]

function showProducts() {
    // let productList = products.map((product) => {
    //     return `
    //     <div class="col-3">
    //         <div class="card-our-product">
    //             <div class="img-card-our-product">
    //                 <img style="width:100%;" src="${product.image}"/>
    //             </div>
    //             <div class="title-card-our-product">
    //                 <p>${product.title}</p>
    //             </div>
    //             <div class="descriptio-card-our-product">
    //                 <p>${product.description}</p>
    //             </div>
    //             <div class="stars">
    //                 <i class="fas fa-star"></i>
    //                 <i class="fas fa-star"></i>
    //                 <i class="fas fa-star"></i>
    //                 <i class="fas fa-star"></i>
    //                 <i class="fas fa-star"></i>
    //             </div>
    //             <div class="price-card-our-product">
    //                 <h4>${product.price}</h4>
    //             </div>
    //             <div class="add-to-cart-btn">
    //                 <button type="button" onclick=addToLocalStorage(${product.id}) class="btn btncart">Add To Cart</button>
    //             </div>
    //         </div>
    //     </div>`;
    // });

    // console.log(productList)
    // divDom.innerHTML=productList

    products.forEach(product => {
        divDom.innerHTML+=`<div class="col-3">
            <div class="card-our-product">
                <div class="img-card-our-product">
                    <img style="width:100%;" src="${product.image}"/>
                </div>
                <div class="title-card-our-product">
                    <p>${product.title}</p>
                </div>
                <div class="descriptio-card-our-product">
                    <p>${product.description}</p>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="price-card-our-product">
                    <h4>${product.price}</h4>
                </div>
                <div class="add-to-cart-btn">
                    <button type="button" onclick=addToLocalStorage(${product.id}) class="btn btncart">Add To Cart</button>
                </div>
            </div>
        </div>`
    });
}

showProducts()

function addToLocalStorage(id) {
    let theChoosenCart = products.find((item)=>{
        return item.id===id
    })

    CartArr.push(theChoosenCart)

    if (localStorage.getItem('products')) {

        let localproudcts = JSON.parse(localStorage.getItem('products'))
   
        localproudcts.forEach(element => {
            if (element.id==id) {
                qtn++
            }
        });
    }

    console.log(qtn)



    localStorage.setItem('products',JSON.stringify(CartArr))


}