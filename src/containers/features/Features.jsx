import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const featuresData = [
  {
    title: 'Innowacja kończy się brakiem zaufania',
    text: 'Od dobrego Jana daje od bogatego. Starzeją się i rysują jak pani. Poprawa końcowej nieufności może natychmiast zostać oklaskiwana przez domowników.'
  },
  {
    title: 'Stań się aktywnie pielęgnowany',
    text: 'Uważa się, że współczuje dziesięciu rzadko okazjonalnych pomocy wystarczających. List z prośbą o aktywne umożliwienie.'},
  {
    title: 'Komunikuj . Jestem nikim ?',
    text: 'Led zapytał o możliwą elegancję relacji kochanki, jedząc podobnie debatując. Przez wiadomość lub nic, głównie adres.'},
  {
    title: 'Nisko postawiony dzieciak hrabstwa',
    text: 'Naprawdę chłopak z hrabstwa prawniczego, nie może swojej siostry. Wytrącę cię z równowagi, to jakieś szóste. Wśród seksu istnieje obecnie prawo urlopowe. W zabudowanym stole w szybkim rumieńcu.'}
]

const Features = () => {
  return (
    <div className="gpt3_features section_padding" id="features">
      <div className="gpt3_features-heading">
        <h1 className="gradient_text">
          Przyszłość jest teraz i jedynie musisz sobie to uświadomić.Wejdź w
          przyszłość już teraz i zamień to w rzeczywistość!
        </h1>
        <p>Poproś o Wczesny Dostęp aby rozpocząć</p>
      </div>
      <div className="gpt3_features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  );
};

export default Features;
