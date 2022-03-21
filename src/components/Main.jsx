import React from 'react';
import Button from './Button';
import { useSelector } from 'react-redux';

function Main() {
  const user = useSelector((state) => state.user);

  const userName = (name) => (
    <>
      <span class="main-title-span">{name}</span>, д
    </>
  );

  return (
    <main className="main">
      <div className="main__wrapper">
        <div className="main__content">
          <div className="main__descr">
            <div className="main__descr-title">
              <h1 className="main-title">{user.isAuth ? userName(user.currentUser.name) : 'Д'}елитесь своими экспертными знаниями и зарабатывайте</h1>
              {/* <h1 className="main-title">
                {user.isAuth
                  ? `${(<span class="main-title-span">{user.currentUser.name}</span>)}, д`
                  : 'Д'}
                елитесь своими экспертными знаниями и зарабатывайте
              </h1> */}
            </div>
            <div className="main__descr-subtitle">
              <h3 className="main-subtitle">
                Платформа Gooron - это инновационный сервис онлайн консультаций с поминутной
                оплатой, который ценит и экономит ваше время
              </h3>
            </div>
            <div className="main__descr-btns">
              <Button buttonClassNames="main__descr-btn begin-btn">Начать</Button>
              <Button buttonClassNames="main__descr-btn more-btn">Подробнее</Button>
            </div>
          </div>
          <div className="main__preview">
            <img src="img/main_preview.png" alt="preview" className="main__preview-img" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
