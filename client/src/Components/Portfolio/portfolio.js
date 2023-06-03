import React, { useState, useEffect } from "react";
import "./portfolio.css";
import axios from "axios";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    fetchExistingImages();
  }, []);

  const fetchExistingImages = async () => {
    try {
      const response = await axios.get("https://formulaulybki.ru/api/work/get");
      setData(response.data);
      setFlag(true);
    } catch (error) {
      console.log(error);
    }
  };

  const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const showPrevSlide = () => {
      setCurrentSlide((currentSlide - 1 + data.length) % data.length);
    };

    const showNextSlide = () => {
      setCurrentSlide((currentSlide + 1) % data.length);
    };

    return (
      <div className="carousel">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {data?.map((slide) => (
            <div className="slide" key={slide.id}>
              <img src={slide.fileBefore} className="Before" alt="До" />
              <img src={slide.fileAfter} className="After" alt="После" />
              <h3>{slide.title}</h3>
              <p style={{ wordBreak: "break-all" }}>{slide.content}</p>
            </div>
          ))}
        </div>
        <div className="btnPlaceholder">
          <button className="prev" onClick={showPrevSlide}>
            «
          </button>
          <button className="next" onClick={showNextSlide}>
            »
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="backgrPort">
      <div className="portfolio">
        <div className="titlePort">
          <h1>Портфолио</h1>
        </div>
        <div>
          <ul className="breadcrumbPort">
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/doctors">Команда</a>
            </li>
            <li>Портфолио</li>
          </ul>
        </div>
        {!flag ? (
          <h3>Загрузка...</h3>
        ) : (
          null
        )}
        {window.innerWidth > 900 ? (
          data.map((image) => (
            <div className="clinicalCase" key={image.id}>
              <div className="caseContainer">
                <div className="case">
                  <img src={image.fileBefore} alt={image.title} />
                </div>
                <div className="case">
                  <img src={image.fileAfter} alt={image.title} />
                </div>
              </div>
              <div className="case">
                <h3>{image.title}</h3>
                <p>{image.content}</p>
              </div>
            </div>
          ))
        ) : (
          <Carousel />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
