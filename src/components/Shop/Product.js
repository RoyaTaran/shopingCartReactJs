/////////////////function/////////
import React from 'react'

export default function Product(props) {

  const addTOCart = (id) =>{
      props.onToCart(id)
   }


  return (
             <div class="shop-item">
                 <span class="shop-item-title">{props.title}</span>
                 <img class="shop-item-image" src={props.img} />
                 <div class="shop-item-details">
                     <span class="shop-item-price">${props.price}</span>
                     <button
                         onClick={()=>addTOCart(props.id)}
                         class="btn btn-primary shop-item-button"
                         type="button">
                         ADD TO CART
                     </button>
                 </div>
             </div>
         )
}


/////////////class/////////

// import React, { Component } from 'react'

// export default class Product extends Component {


//     addTOCart(id){
//       this.props.onToCart(id)
//     }


//     render() {
//         return (
//             <div class="shop-item">
//                 <span class="shop-item-title">{this.props.title}</span>
//                 <img class="shop-item-image" src={this.props.img} />
//                 <div class="shop-item-details">
//                     <span class="shop-item-price">${this.props.price}</span>
//                     <button
//                         onClick={this.addTOCart.bind(this,this.props.id)}
//                         class="btn btn-primary shop-item-button"
//                         type="button">
//                         ADD TO CART
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }
