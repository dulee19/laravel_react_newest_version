import React, {  useState, useEffect } from 'react'
import BrandsComponent from '../components/BrandsComponent'

const Brands = () => {
    const [brands, setBrands] = useState([]);
    
    const fetchBrands = async () => {
        const response = await fetch('http://127.0.0.1:8000/brendovi');
        const data = await response.json();
        setBrands(data);
    }
    
    useEffect(() => {
        fetchBrands();
    }, [])

    return (
    <div className='container'>
        <h2>Brendovi</h2>
        <div className='d-flex flex-wrap gap-4'>
            {brands?.map((brand, index) => (
                <BrandsComponent key={index} brand={brand} />
            ))}
        </div>
    </div>
  )
}

export default Brands;