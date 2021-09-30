import React from 'react'
import './styles.scss'
import Logo from '../../images/logo-black.svg'

const Hero = () => (
  <div className="heroWrapper">
    <div className="shape" />
    <div className="logo">
      <img src={Logo} alt="Wolf Lodge Candles logo" />
    </div>
    <h1>Wolf Lodge Candles</h1>
    <h2>Vegan and cruelty free handmade soy candles and melts</h2>

    <nav className="buy">
      <a className="cta" href="https://www.etsy.com/uk/shop/WolfLodgeCandles">Shop on Etsy</a>
    </nav>
  </div>
)

export default Hero
