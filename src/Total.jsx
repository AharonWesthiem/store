import {useContext} from 'react'
import CartContext from './CartContext'

export default function Total() {

  const { cartList } = useContext(CartContext)

const sumTotal = () => {
  let p = 0
  Object.values(cartList).forEach(i => p += (i.price * i.qty))
  return p.toFixed(2)
}
    

  
  return (
    <div>
      
      <h2>Total:{sumTotal()}</h2>
    </div>
  )
}
