// Write your code here
import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import About from '../About'
import './index.css'

const Home = () => {
  const details = {
    name: 'kk',
  }
  return (
    <div className="home-container">
      <Header />
      <div className="home-container-desktop">
        <Link to="/">
          <img
            className="home-img"
            alt="home"
            src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          />
        </Link>
      </div>
      <div className="home-container-mobile">
        <img
          className="home-img"
          alt="home"
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        />
      </div>
    </div>
  )
}
export default Home
