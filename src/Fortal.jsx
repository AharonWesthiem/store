import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Fortal() {
  const [categories, setcategories] = useState({})

  useEffect(() => {
    fetch('https://jbh-mockserver.onrender.com/categories')
      .then(r => r.json())
      .then(data => {
        setcategories(data)
        console.log(data)
      })
  }, [])


  return (
    <div >
      {Object.keys(categories).map(item =>
        <div>
        <Link to={"/categories/" + item }>
          <h2>{item}</h2>
          <img style={{width: "100px"}} 
          src={categories[item]} />
          </Link>
          <div />




          {/* 
    //  <div className='fortalContainer'>
    //  <div className='fortalItem'><h3> </h3></div>
    //  <div className='fortalItem'><h3>fruits</h3></div>
    //  <div className='fortalItem' > <h3>groceryies</h3></div>
    //  <div className='fortalItem'> <h3>meat</h3></div> */}
        </div>)
      }
    </div>
  )
}
