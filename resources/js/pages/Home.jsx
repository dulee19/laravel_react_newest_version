import React, { useState, useEffect } from 'react'
import Articles from '../components/Articles'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import Spinner from '../components/Spinner';

const Home = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSliders = async () => {
      const response = await fetch('http://127.0.0.1:8000/slajderi')
      const data = await response.json();
      setSliders(data)
      setLoading(false)
  }

  useEffect(() => {
    fetchSliders()
  }, [])

  if (loading) return <Spinner />

  return (
    <div className='container py-5 my-2'>
      {/* Slider */}
      <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          navigation={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        >
          
        {sliders.map((slider, index) => (
          <SwiperSlide key={index}>
            <img src={slider.image_path} className='img-fluid' style={imgSlider} alt="slider" loading='lazy'  />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Articles */}
      <Articles grupa_pr_id={1} tip_artikla_id={-1} />

    </div>
  )
}

const imgSlider = {
  'width': '100%',
  'height': '450px',
  'objectFit': 'cover'
}

export default Home