import React from 'react'
import { Link } from 'react-router-dom'

const ArticleDetails = ({ article }) => {
  return (
    <div className='article-details d-flex col-sm-3 col-lg-3 text-center'>
        <div className='d-flex align-items-center flex-column flex-no-wrap justify-content-center gap-2'>
            <Link to={`http://127.0.0.1:8000/artikal/${article?.naziv_slugged}`}>
                <img src={`http://127.0.0.1:8000/${article?.glavna_slika.putanja}`} className='img-fluid' alt={article?.naziv} loading="lazy" style={{ width: '350px' }} />
                <span className='small'>{article?.naziv}</span>
            </Link>
            <div>
                <span>{article?.mpcena}</span> <br />
                <span>{article?.web_cena}</span>
            </div>
        </div>
    </div>
  )
}

export default ArticleDetails