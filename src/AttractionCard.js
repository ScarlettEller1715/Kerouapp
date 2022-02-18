import React from 'react'

function AttractionCard({attraction}) {
  return (

    <div className="card">
        <h2>{attraction.name}</h2>
        <a href={attraction.Website}>Website</a>
        <p>{attraction.Address.formattedAddress}</p>
        <p>{attraction.PhoneNumber}</p>
    </div>

  )
}

export default AttractionCard