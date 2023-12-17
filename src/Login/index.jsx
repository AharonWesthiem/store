import React from 'react'
import style from "./Style.module.css";

export default function Login() {
  return (
    <form>
        <input placeholder='user name'/>
        <input placeholder='password'/>
        <input type='checkbox'/>stay connected
        <button>login</button>
    </form>
  )
}
