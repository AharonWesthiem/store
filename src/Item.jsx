import { useContext, useState } from 'react'
import CartContext from './CartContext'
import ButtonAddToCart from './ButtonAddToCart'

export default function Item({ item, isInCart }) {
  let { name, price, emoji, id } = item
  const { cartList, setCartList } = useContext(CartContext)

  const addToCart = (id) => {
    let copied = { ...cartList }
    if (cartList[id]) {
      copied[id].qty += 1
    } else {
      copied[id] = { ...item, qty: 1 }
    }
    setCartList(copied)
  }

  const removeItem = (id) => {
    // debugger
    if (!cartList[id]) return;
    let copied = { ...cartList }
    if (copied[id].qty > 1) {
      copied[id].qty -= 1
    } else {
      delete copied[id]
    }
    setCartList(copied)

  }

  const handelDelet = (id) => {
    let copied = { ...cartList }
    delete copied[id]
    setCartList(copied)
  }



  return (
    <div className='item'  >
      {isInCart && <div className='cartItemBin'
        onClick={() => handelDelet(id)}>❌
      </div>}
      <br></br>
      <div style={{ cursor: "pointer" }} onClick={() => location.href = 'http://localhost:5173/item/' + id}>
        <div>{name}</div>
        <div>{emoji}</div>
        <div>{price}</div>
      </div>

      {!cartList[id] ? <ButtonAddToCart addToCart={()=>addToCart(id)} /> :
        <>
          <button onClick={() => addToCart(id)}>+</button>
          <span>{cartList[id]?.qty || 0}</span>
          <button onClick={() => removeItem(id)} >-</button>
        </>
      }
      <div>


      </div>
    </div>
  )
}
