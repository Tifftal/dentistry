import React from "react";
import "./FifthContainer.css"
const FifthContainer = () => {
  return (
    <div className="fifthContainer">
      <div className="triangle"></div>
      <h1>Наши преимущества</h1>
      <div className="advCards">
        <div className="picContainer">
          <img src="../../IMG/DSC02613-2.jpg" />
        </div>
        <div className="picContainer">
          <img src="../../IMG/DSC02660-2.jpg" />
        </div>
        <div className="picContainer">
          <img src="../../IMG/DSC02655-2.jpg" />
        </div>
        <div className="titleContainer">
          <p>Комплексные методы</p>
          <p>лечения</p>
        </div>
        <div className="titleContainer">
          <p>Только</p>
          <p>высококвалифицированные</p>
          <p>врачи</p>
        </div>
        <div className="titleContainer">
          <p>Контроль за качеством</p>
          <p>лекарств</p>
        </div>
        <div className="contectContainer">
          Наши менеджеры - профессионалы своего дела. Они организованы на отлично и знают свое дело.
        </div>
        <div className="contectContainer">
          Мы неоднократно занимали престижные призовые места на медицинских конкурсах, и гордимся этим.
        </div>
        <div className="contectContainer">
          Мы знаем все тайные тропки тех далеких мест, где вы живете, и первыми доставим вам товар.
        </div>
      </div>
    </div>
  );
}

export default FifthContainer;