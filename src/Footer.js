import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <Link to='./rules'>
         <div className="footer" >
           <button  className="btn" >RULeS</button>
      </div>
      </Link>
    )
}
