import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="gpt3_footer section_padding">
      <div className="gpt3_footer-heading">
        <h1 className="gradient_text">
          Chciałbyś wejść w przyszłość przed innymi
        </h1>
      </div>
      <div className="gpt3_footer-heading-btn">
        <button type="button">Poproś o wczesny dostęp</button>
      </div>
      <div className="gpt3_footer-container">
        <div className="gpt3_footer-container-mark">
          <h2>GPT-3</h2>
          <p>Łazienkowska 12 00-449 Warszawa. Wszelkie prawa zastrzeżone</p>
        </div>
        <div className="gpt3_footer-container-links">
          <div className="gpt3_footer-container-linksa">
            <h3>Linki</h3>
            <p>Przypomnienie</p>
            <p>Social Media</p>
            <p>Liczniki</p>
            <p>Kontakt</p>
          </div>
          <div className="gpt3_footer-container-linksb">
            <h3>Firma</h3>
            <p>Regulamin</p>
            <p>Polityka Prywatności</p>
            <p>Kontakt</p>
          </div>
          <div className="gpt3_footer-container-linksc">
            <h3>Kontakt</h3>
            <p>Łazienkowska 12 00-449 Warszawa</p>
            <p>456795323</p>
            <p>info@gpt3.net</p>
          </div>
        </div>
      </div>
      <div className="gpt3_footer-copyright">
        <p>Grzechnik Patryk © 2023 GPT-3. Wszelkie prawa zastrzeżone</p>
      </div>
    </div>
  );
};

export default Footer;
