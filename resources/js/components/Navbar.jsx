import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ pages }) => {

  return (
    <div className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link to="/" className="navbar-brand">React Laravel</Link>

                <button 
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* From Admin */}
                        {pages.map(page => (
                            <li className="nav-item" key={page.web_b2c_seo_id}>
                                <Link className="nav-link" to="#!">{page.naziv_stranice}</Link>
                            </li>
                        ))}

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/brands">Brands</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar