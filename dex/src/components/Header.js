import React from 'react'
import Logo from "../logo.png";
import Eth from"../eth.svg";

function Header() {
  return (
    <header>
    <div className="leftH">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="headerItem">Swap</div>
      <div className="headerItem">Tokens</div>
    </div>
    </header>
  )
}

export default Header
