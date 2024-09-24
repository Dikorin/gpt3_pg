import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div className="gpt3_possibility section_padding" id="possibility">
      <div className="gpt3_possibility-heading">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3_possibility-container">
        <p className="header">Poproś o Wczesny Dostęp aby rozpocząć</p>
        <h1 className="gradient_text">Możliwości są poza twoja Wyobraźnia</h1>
        <p className="container">
          Jeszcze żadne łóżko do pomocy w podróży nie uznano nieprzyjmenym.Nie
          wszystkie myśli zapewniają błogosławieństwo.Odpust to sposób gdzie
          wszystko zmienia radość i zaburza przywiązanie.Impreza, o którą
          prosiliśmy od lat na zamówienie
        </p>
        <p className="footer">Poproś o Wczesny Dostęp aby rozpocząć</p>
      </div>
    </div>
  );
};

export default Possibility;
