import React from 'react';
import Slider from 'react-slick';

function Consult() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };
  return (
    <section className="consult">
      <div className="consult__wrapper">
        <div className="consult__header">
          <h3 className="consult__header-title">Категории консультаций</h3>
          <div className="consult__header-all">
            <a href="#">Смотреть все категории</a>
          </div>
        </div>
        <Slider {...settings}>
          <div className="consult__list-item">
            <img src="img/cons_health.png" alt="" className="consult__item-img" />
            <a href="#" className="consult__iltm-link">
              Здоровье
            </a>
          </div>
          <div className="consult__list-item">
            <img src="img/cons_work.png" alt="" className="consult__item-img" />
            <a href="#" className="consult__iltm-link">
              Карьера
            </a>
          </div>
          <div className="consult__list-item">
            <img src="img/cons_edu.png" alt="" className="consult__item-img" />
            <a href="#" className="consult__iltm-link">
              Образование
            </a>
          </div>
          <div className="consult__list-item">
            <img src="img/cons_house.png" alt="" className="consult__item-img" />
            <a href="#" className="consult__iltm-link">
              Быт
            </a>
          </div>
          <div className="consult__list-item">
            <img src="img/cons_house.png" alt="" className="consult__item-img" />
            <a href="#" className="consult__iltm-link">
              Быт
            </a>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Consult;
