import React from "react";

const ResturantCard = ({resData}) => {
  const { name, cuisine, rating, price_level, photo } = resData
  console.log('aaaa',resData)
  return (
    <div className="resturant__card">
      <div className="card__img">
        <img src={photo.images.original.url} alt='restuarnt__card' />
      </div>
      <div className="card__content">
        <h3 className="card__name">{name}</h3>
        <div className="card__subContent">
          <div className="cuisines">{cuisine.slice(0,3).map(el => {
            return el.name
          }).join(",")}</div>
          <div className="average__time">{price_level}</div>
          <div className="rating">{rating}*</div>
        </div>
      </div>
    </div>
  )
}

export default ResturantCard