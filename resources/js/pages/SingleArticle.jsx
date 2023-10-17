import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';

// LightBox
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";

const SingleArticle = () => {
    const { naziv } = useParams();
    
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);
    const [open, setOpen] = useState(false);

    // Lightbox
    const fullscreenRef = useRef(null);
    const captionsRef = useRef(null);

    const handleImageClick = index => {
      setSelectedImage(index)
    }



    const fetchArticle = async () => {
      const response = await fetch(`http://127.0.0.1:8000/artikal/${naziv}`);
      const data = await response.json();
      setArticle(data);
      setLoading(false);
      console.log(data)
    }

    useEffect(() => {
      fetchArticle();
      setLoading(true)
    }, [naziv])

    if(loading) return <Spinner />

  return (
    <div className="article-wrapper">
      <div className='container py-5'>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className='row'>

              <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Counter, Fullscreen, Captions]}
                captions={{ ref: captionsRef }}
                fullscreen={{ ref: fullscreenRef }}
                on={{
                  click: () => fullscreenRef.current?.enter(),
                  click: () => {
                    (captionsRef.current?.visible
                      ? captionsRef.current?.hide
                      : captionsRef.current?.show)?.();
                  }
                }}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                slides={[
                  { 
                    src: `http://127.0.0.1:8000/${article[0]?.slike[selectedImage]?.putanja}`,
                    title: `${article[0]?.naziv}` 
                  }
                ]}
              />

              <div className="col-md-4 col-sm-4 col-xs-12 additional-images d-flex flex-column gap-2">
                {article[0]?.slike.map((slika, index) => (
                  <img
                    key={index}
                    src={`http://127.0.0.1:8000/${slika.putanja}`}
                    className={`img-fluid border w-75 ${index === selectedImage ? 'selected' : ''}`}
                    alt="additional pics"
                    onClick={() => handleImageClick(index)}
                  />
              ))}
              </div>

              <div className="col-md-8 col-sm-8 col-xs-12">
                <img
                  src={`http://127.0.0.1:8000/${article[0]?.slike[selectedImage]?.putanja}`}
                  className="img-fluid main-img cursor-pointer"
                  alt={article[0]?.naziv}
                  loading="lazy"
                  onClick={() => setOpen(true)}
                />

              </div>
            </div>
            
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
              <h1 className='fs-5'>Naziv: {article[0]?.naziv}</h1>
              <p>Web cena: {article[0]?.web_cena}</p>
              <p>Maloprodajna cena: {article[0]?.mpcena}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleArticle