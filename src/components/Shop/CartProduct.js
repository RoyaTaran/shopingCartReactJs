///////////////function/////////////////////
import React from 'react'

export default function CartProduct(props) {

    const removeProduct = (id) => {
        props.onRemove(id)

     }


  return (
            <div class="cart-row">
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src={props.img} width="100" height="100" />
                    <span class="cart-item-title">{props.title}</span>
                </div>
                <span class="cart-price cart-column">${props.price}</span>
                <div class="cart-quantity cart-column">

                    <button onClick={()=>removeProduct(props.id)} class="btn btn-danger" type="button">REMOVE</button>
                </div>
            </div>
  )
}


//////////////////////////class//////////////////

// import React, { Component } from 'react'

// export default class CartProduct extends Component {

//     removeProduct(id){
//         this.props.onRemove(id)

//     }

//     render() {

//         return (
//             <div class="cart-row">
//                 <div class="cart-item cart-column">
//                     <img class="cart-item-image" src={this.props.img} width="100" height="100" />
//                     <span class="cart-item-title">{this.props.title}</span>
//                 </div>
//                 <span class="cart-price cart-column">${this.props.price}</span>
//                 <div class="cart-quantity cart-column">

//                     <button onClick={this.removeProduct.bind(this,this.props.id)} class="btn btn-danger" type="button">REMOVE</button>
//                 </div>
//             </div>
//         )
//     }
// }
