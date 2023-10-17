import React from 'react'
import logo from '../../../public/images/admin/react-laravel-logo.png'

const Footer = ({ pages, address }) => {   
  const currentYear = new Date().getFullYear();
    
  return (
    <footer className='bg-dark text-white py-4'>
       <div className='d-flex text-center justify-content-around'>
        <div>
            <img src={logo} alt="footerLogo" className='img-fluid' style={{ height: '80px', objectFit: 'cover' }} />
        </div>

        <div>
            <h5>Brzi linkovi</h5>
            <ul style={{ listStyle: 'none' }}>
                {pages.map(page => (
                    <li className="nav-item" key={page.web_b2c_seo_id}>
                        <a href="#!" className="nav-link">{page.naziv_stranice}</a>
                    </li>
                ))}
            </ul>
        </div>

        <div>{address}</div>
        <div>Info</div>
       </div>

       <p className='text-center py-2 border-top'>Selltico | Copyright &copy; {currentYear}</p>
    </footer>
  )
}

export default Footer