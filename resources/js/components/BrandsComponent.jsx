import React from 'react'

const BrandsComponent = ({ brand }) => {
  return (
    <div className='brands col'>
        <h5>{brand?.naziv}</h5>
        <img src={brand?.slika} alt={brand?.naziv} className='img-fluid' loading="lazy" />
    </div>
  )
}

export default BrandsComponent