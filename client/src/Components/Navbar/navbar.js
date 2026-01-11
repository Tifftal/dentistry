import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

import Offcanvas from "react-bootstrap/Offcanvas";
import Okno from '../Okno/Okno';
import { useState } from "react";

const Navbar = ({ isOpen, onOpen, onClose }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  return (
    <>
      <div className="navigationBar">
        {isOpen && <Okno onClose={onClose} setIsOpen={onClose} />}

        {/* Бургер слева */}
        <button
          className="burgerBtn"
          onClick={openMenu}
          aria-label="Открыть меню"
        >
          <span />
          <span />
          <span />
        </button>

        <div className="NavBarLinks">
          <div><a href="/services">Услуги и цены</a></div>
          <div><a href="/about">О нас</a></div>
        </div>

        <div className="brandNameNavbar">
          <a href='/'><img src="../IMG/logo.png" alt="логотип" /></a>

          <div className="brandText">
            <span className="brandSubtitle">Стоматология</span>
            <a href="/" className="brandTitle">Формула Улыбки</a>
          </div>
        </div>

        <div className="contactInfoNavbar">
          <div className="contactBar1">
            <p>+7 (967) 317-00-00</p>
            <button onClick={onOpen}>Заказать обратный звонок</button>
          </div>
          <div className="contactBar2">
            <a
              href="/#map"
              style={{
                whiteSpace: "pre-wrap",
                textDecoration: "none",
                cursor: "pointer",
                color: "black"
              }}
            >
              г. Краснодар, {`\n`}ул. Ставропольская, д. 83
            </a>
          </div>
        </div>
      </div>

      {/* Offcanvas меню */}
      <Offcanvas
        show={menuOpen}
        onHide={closeMenu}
        placement="start"
        className="navOffcanvas"
      >
        <Offcanvas.Header closeButton closeVariant="white" className="navOffcanvasHeader">
          <Offcanvas.Title className="navOffcanvasTitle">Меню</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="navOffcanvasBody">
          <a className="offLink" href="/doctors" onClick={closeMenu}>Команда</a>
          <a className="offLink" href="/services" onClick={closeMenu}>Услуги</a>
          <a className="offLink" href="/about" onClick={closeMenu}>О компании</a>
          <a className="offLink" href="/documents" onClick={closeMenu}>Документы</a>
          <a className="offLink" href="/portfolio" onClick={closeMenu}>Наши работы</a>

          <div className="offInfo">
            <div className="offInfoRow">
              <img src="../IMG/phone-call.png" alt="" />
              <p>+7 (967) 317-00-00</p>
            </div>
            <div className="offInfoRow">
              <img src="../IMG/placeholder.png" alt="" />
              <p>Краснодар, Ставропольская, 83</p>
            </div>
          </div>

          <div className="offBottom">
            <button className="offCta" onClick={() => { closeMenu(); onOpen(); }}>
              Записаться на прием
            </button>

            <div className="offSocial">
              <a href="https://wa.me/79673170000">
                <img src="../IMG/free-icon-whatsapp-3670302.png" alt="WhatsApp" />
              </a>
              <a href="https://vk.com/club211575532">
                <img src="../IMG/free-icon-vkontakte-4494490.png" alt="VK" />
              </a>
              <a href="https://t.me/formulaulybki32">
                <img src="../IMG/free-icon-telegram-2111710.png" alt="Telegram" />
              </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {!isOpen && (
        <button className="floating-appointment-btn" onClick={onOpen} aria-label="Записаться на приём">
          <span className="fab__icon" aria-hidden="true">🦷</span>
          <span className="fab__text">Записаться</span>
        </button>
      )}
    </>
  );
};

export default Navbar;
