import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Brands from '../pages/Brands';
import SingleArticle from '../pages/SingleArticle';
import Spinner from './Spinner';

function Main() {
    // Header and footer pages
    const [pages, setPages] = useState([]);
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchPages = async () => {
        const response = await fetch('http://127.0.0.1:8000/stranice')
        const responseAddress = await fetch('http://127.0.0.1:8000/adresa')
        const data = await response.json();
        const addressData = await responseAddress.json();
        setLoading(false)
        setPages(data);
        setAddress(addressData)
    }

    useEffect(() => {
        fetchPages()
    }, [])

    if(loading) return <Spinner />

    return (
        <>
        <Navbar pages={pages} />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/artikal/:naziv" element={<SingleArticle />} />
        </Routes>

        <Footer pages={pages} address={address} />
        </>
    );
}

export default Main;