// Write your code here
import React from 'react'
import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div className="container">
    <Header />
    <img
      className="not-found"
      alt="not found"
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
    />
    <h1>Lost Your Way?</h1>
    <p>
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)
export default NotFound
