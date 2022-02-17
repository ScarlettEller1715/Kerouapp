import React from 'react'
import AttractionCard from './AttractionCard'

function CardContainer({attractions}) {
    const attractionCards = attractions.map((attraction, index) => (
      <AttractionCard
        key ={index + 1}
        attraction={attraction}
        />
    ))


  return (
    <div>
    <div className="card-container">{attractionCards}</div>
    <br />
    </div>
  )
}

export default CardContainer