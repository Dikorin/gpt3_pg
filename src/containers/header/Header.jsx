import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className="gpt3_header section_padding">
      <div className="gpt3_header-content">
        <h1 className="gradient_text">
          Zbudujmy coś niesamowitego z GPT-3 OpenAI
        </h1>
        <p>
          Jeszcze żadne łóżko do pomocy w podróży nie uznano nieprzyjmenym.Nie
          wszystkie myśli zapewniają błogosławieństwo.Odpust to sposób gdzie
          wszystko zmienia radość i zaburza przywiązanie.Impreza, o którą
          prosiliśmy od lat na zamówienie
        </p>
        <div className="gpt3_header-content_input">
          <input type="email" placeholder="Twój adres email..." />
          <button type="button">Zacznij z Nami</button>
        </div>
        <div className="gpt3_header-content_people">
          <img src={people} alt="people"/>
          <p>1,600 ludzi wysłało maila w ostatnich 24h</p>
        </div>
      </div>
        <div className="gpt3_header-image">
          <img src={ai} alt="ai"/>
        </div>
    </div>
  );
};

export default Header;
