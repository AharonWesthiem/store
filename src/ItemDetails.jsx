import React from 'react'

export default function ItemDetails({ item }) {
    let { name, price, emoji, id } = item
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{emoji}</div>
            <div>{price}</div>
            <div>
                <button onClick={() => addToCart(id)}>+</button>
                <span>{0}</span>
                <button onClick={() => removeItem(id)} >-</button>
            </div>
        </div>
    )
}
