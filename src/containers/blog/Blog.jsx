import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png"


const Blog = () => {
  return (
    <div className='gpt3_blog section_padding'>
      <div className='gpt3_blog-head'>
        <h1 className='gradient_text'>Wiele się dzieje,<br/>My o tym publikujemy</h1>
      </div>
      <div className='gpt3_blog-containers'>
      <div className='gpt3_blog-heading'>
      <Article imgUrl={blog01} date={'12 Gru 2023'} text={"Chat GPT-3 i Open Ai to przyszłość. Pozwól nam odkryć jak to jest"}/>
      </div>
      <div className='gpt3_blog-container'>
        <Article imgUrl={blog02} date={'12 Gru 2023'}text={"Chat GPT-3 i Open Ai to przyszłość. Pozwól nam odkryć jak to jest"}/>
        <Article imgUrl={blog03} date={'12 Gru 2023'}text={"Chat GPT-3 i Open Ai to przyszłość. Pozwól nam odkryć jak to jest"}/>
        <Article imgUrl={blog04} date={'12 Gru 2023'}text={"Chat GPT-3 i Open Ai to przyszłość. Pozwól nam odkryć jak to jest"}/>
        <Article imgUrl={blog05} date={'12 Gru 2023'}text={"Chat GPT-3 i Open Ai to przyszłość. Pozwól nam odkryć jak to jest"}/>
      </div>
      </div>
    </div>
  )
}

export default Blog
