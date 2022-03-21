import React from 'react'

function Adv() {
  return (
    <section className="adv">
        <div className="adv__wrapper">
          <div className="adv__title">
            <h3>
              Что делает <span className="gooron-span">Gooron</span>
              особенной платформой
            </h3>
          </div>
          <div className="adv__list">
            <div className="adv__list-item">
              <div className="adv__item-title">База клиентов в вашем кармане</div>
              <div className="adv__item-img">
                <img src="img/adv_1.png" alt="" />
              </div>
              <div className="adv__item-descr">
                <p>
                  Не надо больше тратить время и деньги на раскрутку соцсетей, все что вам остаётся
                  это сосредоточится на предоставлении экспертных знаний
                </p>
              </div>
            </div>
            <div className="adv__list-item">
              <div className="adv__item-title">Гибкая оплата</div>
              <div className="adv__item-img">
                <img src="img/adv_2.png" alt="" />
              </div>
              <div className="adv__item-descr">
                <p>
                  Мы ценим ваше время. Поминутная оплата позволит вам зарабатывать <br />
                  ровно столько, сколько времени вы затратили на консультацию
                </p>
              </div>
            </div>
            <div className="line-break"></div>
            <div className="adv__list-item">
              <div className="adv__item-title">Целостный опыт</div>
              <div className="adv__item-img">
                <img src="img/adv_3.png" alt="" />
              </div>
              <div className="adv__item-descr">
                <p>
                  Теперь вы можете находить клиентов, проводить консультации и принимать оплату в
                  одном месте
                </p>
              </div>
            </div>
            <div className="adv__list-item">
              <div className="adv__item-title">Доверие и безопасность </div>
              <div className="adv__item-img">
                <img src="img/adv_4.png" alt="" />
              </div>
              <div className="adv__item-descr">
                <p>Наша платформа выступает гарантом получения оплаты за оказанную консультацию</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Adv