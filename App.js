import React from "react";
import ReactDOM from "react-dom/client"

/**
 * Heading
 *  - logo 
 *  - Nav Items
 * Body
 *  - Search
 *  - Resturant Containter
 *    - Resturant Card
 * Footer
 *  - Copywright
 *  - Links
 *  - Address
 *  - Contact
 */

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

const ResturantCard = ({img, name, cuisines, time, rating}) => {
  return (
    <div className="resturant__card">
      <div className="card__img">
        <img src='https://placehold.co/600x400' alt='restuarnt__card' />
      </div>
      <div className="card__content">
        <h3 className="card__name">{name}</h3>
        <div className="card__subContent">
          <div className="cuisines">{cuisines}</div>
          <div className="average__time">{time}</div>
          <div className="rating">{rating}</div>
        </div>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search"> search bar </div>
      <div className="resturant__containter">
        <ResturantCard name={'Korean Resturant'} cuisines={'Korean, Chicken, BBQ'} time={'20 minutes'} rating={'5 Stars'} />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
      </div>
    </div>
  )
}


const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)