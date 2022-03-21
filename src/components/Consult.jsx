import React from 'react';
import Slider from 'react-slick';

function Consult() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        // {
        //   breakpoint: 600,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 2,
        //     initialSlide: 2
        //   }
        // },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }
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
        {/* <div className="consult__list"> */}
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
            <div className="consult__list-item">
              <img src="img/cons_house.png" alt="" className="consult__item-img" />
              <a href="#" className="consult__iltm-link">
                Быт
              </a>
            </div>
          </Slider>
        </div>
      {/* </div> */}
    </section>
  );
}

export default Consult;
