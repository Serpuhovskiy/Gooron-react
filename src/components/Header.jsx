import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../reducers/userReducer';

function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <a href="#">Gooron</a>
        </div>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <a href="" className="header__menu-link">
                Как это работает
              </a>
            </li>
            <li className="header__menu-item">
              <a href="" className="header__menu-link">
                Категории консультаций
              </a>
            </li>
            <li className="header__menu-item">
              <a href="" className="header__menu-link">
                Почему Gooron
              </a>
            </li>
            <li className="header__menu-item">
              {user.isAuth ? (
                <div className="header__menu-link" onClick={() => dispatch(logout())}>
                  Выход
                </div>
              ) : (
                <Link to="/login" className="header__menu-link">
                  Начать
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            <li>
              <a className="menu__item" href="#">
                Регистрация
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Вход
              </a>
            </li>
            <div className="decor-line"></div>
            <li>
              <a className="menu__item" href="#">
                О нас
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Помощь
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Блог
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Связаться с нами
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
