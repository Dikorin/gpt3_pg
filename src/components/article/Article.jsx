import React from 'react'
import './article.css'

const Article = ({imgUrl,text,date}) => {
  return (
    <div className='gpt3_article'>
    
      <div className='gpt3_article-img'>
      <img src={imgUrl} alt='blocks-image'/>
      </div>
      <div className='gpt3_article-text'>
        <div>
        <p>{date}</p>
        <h3>{text}</h3>
        </div>
        <p>Przeczytaj cały Artykuł</p>
      </div>
    </div>
  )
}

export default Article
