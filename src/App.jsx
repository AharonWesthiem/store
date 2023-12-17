import './App.css'
import Fortal from './Fortal'
import ItemNotFound from './ItemNotFound'
import Layout from './Layout'
import Login from './Login'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      {/* <Routes>
      <Route path='/abc' element={<Fortal />} />
      <Route path='/123' element={} />
      <Route path='*' element={<ItemNotFound />} />
      </Routes> */}
      
      <Layout />


      {/* <Login /> */}
    </div>
  )
}

export default App
