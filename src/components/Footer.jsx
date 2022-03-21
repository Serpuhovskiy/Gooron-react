import React from 'react'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__nav">
            <div className="footer__nav-menu">
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <a href="#">О нас</a>
                </li>
                <li className="footer__menu-item">
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="footer__nav-logo">
              <a href="#">Gooron</a>
            </div>
            <div className="footer__nav-soc">
              <a href="#">
                <img src="img/facebook.svg" alt="" />
              </a>
              <a href="#">
                <img src="img/instagram.svg" alt="" />
              </a>
              <a href="#">
                <img src="img/twitter.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="footer__info">
            <div className="footer__info-links">
              <div className="footer__info-link rights-link">
                <a href="#">© 2020 All Right Reserved | Gooron</a>
              </div>
              <div className="footer__info-link">
                <a href="#">Privacy Policy</a>
              </div>
              <div className="footer__info-link">
                <a href="#">Terms of Service</a>
              </div>
            </div>
            <div className="footer__info-apps">
              <a href="#">
                {' '}
                <img src="img/app-store.png" alt="" />
              </a>
              <a href="#">
                <img src="img/google-play.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer