import React, { useState, useEffect } from 'react'
import ArticleDetails from './ArticleDetails';

const Articles = ({ grupa_pr_id, tip_artikla_id }) => {
    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
        const response = await fetch(`http://127.0.0.1:8000/artikli/${grupa_pr_id}/${tip_artikla_id}`);
        const data = await response.json();
        setArticles(data);
    }

    useEffect(() => {
        fetchArticles()
    }, [])

    return (
    <div className='my-3'>
        <h3>Articles</h3>
        <div className='articles-wrapper row gap-5 justify-content-lg-between'>
            {articles.map((article, index) => (
                <ArticleDetails key={index} article={article} />
            ))}
        </div>
    </div>
  )
}

export default Articles