import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";

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