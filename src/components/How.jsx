import React from 'react'
// import how_1 from "../img/how_1.png"

function How() {
  return (
    <section className="how">
        <div className="how__wrapper">
          <div className="how__title">
            <h3>
              Как работает <span className="gooron-span">Gooron</span>
            </h3>
          </div>
          <div className="how__list">
            <div className="how__list-item">
              <div className="how__item-img">
                <img src="../img/how_1.png" alt="" />
              </div>
              <div className="how__item-descr">Заполните свой профиль и выберите рейт оплаты</div>
            </div>
            <div className="how__list-item">
              <div className="how__item-img">
                <img src="img/how_2.png" alt="" />
              </div>
              <div className="how__item-descr">Пройдите верификацию</div>
            </div>
            <div className="line-break"></div>
            <div className="how__list-item">
              <div className="how__item-img">
                <img src="img/how_3.png" alt="" />
              </div>
              <div className="how__item-descr">Дождитесь запроса на консультацию</div>
            </div>
            <div className="how__list-item">
              <div className="how__item-img">
                <img src="img/how_4.png" alt="" />
              </div>
              <div className="how__item-descr">Приступайте к консультированию и зарабатывайте</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default How