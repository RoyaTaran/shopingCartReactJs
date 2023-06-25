////////////function////////////
import React, { useState } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'



export default function Shop() {


    const products = [
        { id: 1, title: 'Album 1', price: 5, img: 'Images/Album 1.png' },
        { id: 2, title: 'Album 2', price: 15, img: 'Images/Album 2.png' },
        { id: 3, title: 'Album 3', price: 20, img: 'Images/Album 3.png' },
        { id: 4, title: 'Album 4', price: 100, img: 'Images/Album 4.png' },
        { id: 5, title: 'Coffee', price: 5, img: 'Images/Cofee.png' },
        { id: 6, title: 'Shirt', price: 50, img: 'Images/Shirt.png' },
    ]


    const socials=[
        { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
        { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
        { id: 3, href: 'https://www.facebook.com', img: 'Images/YouTube Logo.png' },
    ]


    const [shoppingCart,setShoppingCart]=useState([])


     const PropToAddCart = (productId) => {
     
      let newObject = products.find(product=>product.id==productId)
      setShoppingCart( [...shoppingCart,newObject])
     }


    const emptyCart = () => {
         setShoppingCart([])
     }

    const removeProductFromCart = (productId) => {
        let newShopingCart=[...shoppingCart]
       let indexRemove =newShopingCart.findIndex(product=>product.id===productId)
       newShopingCart.splice(indexRemove,1)
       setShoppingCart(newShopingCart)
     }



  return (
             <>
                 <header class="main-header">
                     <nav class="main-nav nav">
                         <ul>
                             <li><a href="#">HOME</a></li>
                             <li><a href="#">STORE</a></li>
                             <li><a href="#">ABOUT</a></li>
                         </ul>
                     </nav>
                     <h1 class="band-name band-name-large">roya Shop</h1>
                 </header>
                 <section class="container content-section">
                     <div class="shop-items">
                         {products.map(product=>(<Product key={product.id} {...product} onToCart={PropToAddCart} />))}
 {/* 
                         <Product {...this.state.products[0]} />
                         <Product {...this.state.products[1]} />
                         <Product {...this.state.products[2]} />
                         <Product {...this.state.products[3]} />
                         <Product {...this.state.products[4]} />
                         <Product {...this.state.products[5]} /> */}
                        
                   
                     </div>
                 </section>
                 <section class="container content-section">
                     <h2 class="section-header">CART</h2>
                     <div class="cart-row">
                         <span class="cart-item cart-header cart-column">ITEM</span>
                         <span class="cart-price cart-header cart-column">PRICE</span>
                         <span class="cart-quantity cart-header cart-column">Doing</span>
                     </div>
                     <div class="cart-items">
                     {shoppingCart.map(product=>(<CartProduct onRemove={removeProductFromCart} key={product.id}  {...product} />))}
                         {/* <CartProduct /> */}


                     </div>
                     <button onClick={emptyCart} class="btn btn-primary btn-purchase" type="button">
                         Empty Cart
                     </button>
                 </section>
                 <footer class="main-footer">
                     <div class="container main-footer-container">
                         <h3 class="band-name">The Generics</h3>
                         <ul class="nav footer-nav">
                         {socials.map(product=>(<Social key={product.id} {...product} />))}
                             {/* <Social /> */}
                         </ul>
                     </div>
                 </footer>


             </>
  )
}


///////////////class//////////////
// import React, { Component } from 'react'
// import Product from './Product'
// import CartProduct from './CartProduct'
// import Social from './Social'

// export default class Shop extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             products: [
//                 { id: 1, title: 'Album 1', price: 5, img: 'Images/Album 1.png' },
//                 { id: 2, title: 'Album 2', price: 15, img: 'Images/Album 2.png' },
//                 { id: 3, title: 'Album 3', price: 20, img: 'Images/Album 3.png' },
//                 { id: 4, title: 'Album 4', price: 100, img: 'Images/Album 4.png' },
//                 { id: 5, title: 'Coffee', price: 5, img: 'Images/Cofee.png' },
//                 { id: 6, title: 'Shirt', price: 50, img: 'Images/Shirt.png' },
//             ],

//             shoppingCart: [],
//             socials: [
//                 { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
//                 { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
//                 { id: 3, href: 'https://www.facebook.com', img: 'Images/YouTube Logo.png' },
//             ],
//         }

//       this.PropToAddCart=this.PropToAddCart.bind(this)
//       this.emptyCart=this.emptyCart.bind(this)
//       this.removeProductFromCart=this.removeProductFromCart.bind(this)
//     }



//     PropToAddCart(productId){
     
//      let newObject = this.state.products.find(product=>product.id==productId)
//      this.setState({
//         shoppingCart:[...this.state.shoppingCart,newObject]
//      })
//     }


//     emptyCart(){
//         this.setState({
//             shoppingCart:[]
//         })
//     }

//     removeProductFromCart(productId){
//        let newShopingCart=this.state.shoppingCart
//       let indexRemove =newShopingCart.findIndex(product=>product.id===productId)
//       newShopingCart.splice(indexRemove,1)
//       this.setState({
//         shoppingCart:newShopingCart
//       })
//     }

//     render() {
//         return (
//             <>
//                 <header class="main-header">
//                     <nav class="main-nav nav">
//                         <ul>
//                             <li><a href="#">HOME</a></li>
//                             <li><a href="#">STORE</a></li>
//                             <li><a href="#">ABOUT</a></li>
//                         </ul>
//                     </nav>
//                     <h1 class="band-name band-name-large">SabzLearn Shop</h1>
//                 </header>
//                 <section class="container content-section">
//                     <div class="shop-items">
//                         {this.state.products.map(product=>(<Product key={product.id} {...product} onToCart={this.PropToAddCart} />))}
// {/* 
//                         <Product {...this.state.products[0]} />
//                         <Product {...this.state.products[1]} />
//                         <Product {...this.state.products[2]} />
//                         <Product {...this.state.products[3]} />
//                         <Product {...this.state.products[4]} />
//                         <Product {...this.state.products[5]} /> */}
                        
                   
//                     </div>
//                 </section>
//                 <section class="container content-section">
//                     <h2 class="section-header">CART</h2>
//                     <div class="cart-row">
//                         <span class="cart-item cart-header cart-column">ITEM</span>
//                         <span class="cart-price cart-header cart-column">PRICE</span>
//                         <span class="cart-quantity cart-header cart-column">Doing</span>
//                     </div>
//                     <div class="cart-items">
//                     {this.state.shoppingCart.map(product=>(<CartProduct onRemove={this.removeProductFromCart} key={product.id}  {...product} />))}
//                         {/* <CartProduct /> */}


//                     </div>
//                     <button onClick={this.emptyCart} class="btn btn-primary btn-purchase" type="button">
//                         Empty Cart
//                     </button>
//                 </section>
//                 <footer class="main-footer">
//                     <div class="container main-footer-container">
//                         <h3 class="band-name">The Generics</h3>
//                         <ul class="nav footer-nav">
//                         {this.state.socials.map(product=>(<Social key={product.id} {...product} />))}
//                             {/* <Social /> */}
//                         </ul>
//                     </div>
//                 </footer>


//             </>
//         )
//     }
// }