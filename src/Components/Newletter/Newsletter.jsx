import React from 'react'
import "./Newsletter.css"

export default function Newsletter() {
  return (
    <div className='newsletter'>
      <h1>Get offers on your Email</h1>
      <h1>Subscribe and stay update</h1>
      <div>
        <input type="email" placeholder='Enter your E-mail' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
