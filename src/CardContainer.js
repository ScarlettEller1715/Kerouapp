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
    <div>{attractionCards}</div>
  )
}

export default CardContainer