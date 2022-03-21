import React from 'react';
import Button from './Button';

function Count() {
  return (
    <section className="count">
      <div className="count__wrapper">
        <div className="count__content">
          <div className="count__descr">
            <div className="count__descr-title">
              <h2>Рассчитайте свой заработок за неделю работы на Gooron</h2>
            </div>
            <form className="count__descr-form">
              <div className="count__form-text">Введите количество часов и свой стаж:</div>
              <div className="count__form-inputs">
                <input type="text" className="count__form-hours form-input" placeholder="Часы" />
                <input type="text" className="count__form-exp form-input" placeholder="Ваш стаж" />
                <Button buttonClassNames="count__form-btn">Рассчитать</Button>
              </div>
            </form>
          </div>
          <div className="count__img">
            <img src="img/count-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Count;
