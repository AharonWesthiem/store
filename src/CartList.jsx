import React, { useContext } from 'react'
import CartContext from './CartContext'
import Item from './Item'

export default function CartList() {
    const { cartList, setCartList } = useContext(CartContext)
    return (

        <div><h2>CartList</h2>
            <button onClick={() =>  setCartList({})}>🗑️</button> 
            <div></div>
            {Object.values(cartList).map(item => <Item item={item} key={item.id} isInCart={true}/>)}
        </div>
    )
}
