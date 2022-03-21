import React, { useState } from 'react';
import { registration } from '../actions/user';
import { Link } from 'react-router-dom';

function RegPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  return (
    <div className="auth">
      <div className="auth__wrapper">
        <div className="auth__content">
          <div className="auth__title">
            <h4>
              Зарегистрироваться на <span className="auth-gooron-span">Gooron</span>
            </h4>
          </div>
          <div className="auth__subtitle">
            <h5>
              Делитесь своими экспертными знаниями <br />и зарабатывайте
            </h5>
          </div>
          <hr />
          <a className="auth__google" href="#">
            Войти через Google
          </a>
          <div className="auth__or">или</div>
          <form action="" className="auth__form">
            <div className="auth__form-inputs">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="auth__form-input form-input form-input_email"
                placeholder="Ваш Email или телефон"
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="auth__form-input form-input form-input_name"
                placeholder="Ваше имя"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="auth__form-input form-input form-input_pass"
                placeholder="Пароль"
              />
            </div>
            <button
              className="auth__form-btn click-btn"
              onClick={(e) => {
                e.preventDefault();
                registration(email, name, password);
              }}>
              Продолжить
            </button>
          </form>
          <div className="auth__question">
            <div className="auth__question-line line_left"></div>
            <div className="auth__question-text">Уже зарегистрированы?</div>
            <div className="auth__question-line line_right"></div>
          </div>
          <div className="auth__reg">
            <Link to="/login">
              <button className="auth__reg-btn click-btn click-btn_white-bg">
                Войти в аккаунт
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegPage;
