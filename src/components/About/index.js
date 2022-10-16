// Write your code here
import React from 'react'
import './index.css'
import Header from '../Header'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-container-desktop">
      <img
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="about-img"
      />
    </div>
    <div className="about-container-mobile">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="about-img"
      />
    </div>
  </div>
)
export default About
