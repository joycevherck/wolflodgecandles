import React from 'react'
import './styles.scss'
import Logo from '../../images/logo-black.svg'

const Nav = () => (
  <header className="navWrapper">
    <div className="logo">
      <img src={Logo} alt="Wolf Lodge Candles logo" />
    </div>

    <nav>
      <a href="https://www.etsy.com/uk/shop/WolfLodgeCandles">Buy on Etsy</a>
    </nav>
  </header>
)

export default Nav
