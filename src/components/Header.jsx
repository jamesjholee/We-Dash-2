import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo__containter">
        <img className="logo" src="https://placehold.co/600x400" />
      </div>
      <div className="nav__items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  ) 
}

export default Header