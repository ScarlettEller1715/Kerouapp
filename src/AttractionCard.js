import React from 'react'

function AttractionCard({attraction}) {



  return (
    <div>
        <h2>{attraction.name}</h2>
        <p>{attraction.Website}</p>
        <p>{attraction.Address.formattedAddress}</p>
        <p>{attraction.PhoneNumber}</p>
    </div>
  )
}

export default AttractionCard