import { useEffect, useState } from 'react'
// import Cart from './Cart'
import Content from './Content'
import CartContext from './CartContext'
import Cart from './Cart'
import Fortal from './Fortal'

export default function Layout() {
  const [items, setItems] = useState([])
  const [cartList, setCartList] = useState( JSON.parse(localStorage.cart??'{}'))



  useEffect(() => {
    localStorage.cart = JSON.stringify(cartList)
  }, [cartList])


  useEffect(() => {
    fetch('https://jbh-mockserver.onrender.com/categories/alcohol')
      .then(r => r.json())
      .then(data => {
        setItems(data)
      })
  }, [])

 


  return (
    <div className='layout'>
      <CartContext.Provider value={{ cartList, setCartList }} >
        <Content items={items} />
        <Cart />
      </CartContext.Provider >
      
    </div>
  )
}
