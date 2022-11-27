import React from "react";
import { Link, NavLink } from "react-router-dom";
import './styles/shared.css'

const Header = () => {
  return (
    <header className="header">

      <div className="header__subContainer1">
        <ul className='socials__list'>
          <li>
            <a target={'_blank'} href="https://www.linkedin.com/in/fabian-cruz-7631a924b/">
              <img className='socials__img' src="img/linkedin.png" alt="" />
            </a>
          </li>
          <li>
            <a target={'_blank'} href="https://www.instagram.com/fabian_cruz21/?theme=dark">
              <img className='socials__img socials__img--reverse' src="img/instagram.png" alt="" />
            </a>
          </li>
          <li>
            <a target={'_blank'} href="https://github.com/Fabian-9001">
              <img className='socials__img' src="img/github.png" alt="" />
            </a>
          </li>
          <li>
            <a target={'_blank'} href="https://www.facebook.com/fabian.cruz.garcia.9001/">
              <img className='socials__img socials__img--reverse' src="img/facebook.png" alt="" />
            </a>
          </li>
        </ul>
      </div>

      <div className="header__subContainer2">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink className="header__link" to='/login'>
                <img className="header__link__img" src="img/ingresar.png" alt="" />
                <p>Ingresar</p>
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link" to='/purchases'>
                <img className="header__link__img" src="img/registrarse.png" alt="" />
                <p>Registrarse</p>
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link" to='/purchases'>
                <img className="header__link__img" src="img/telefono.png" alt="" />
                <p>Contacto</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__subContainer3">
        <img className="header__menu" src="img/menu.png" alt="" />
        <h1 className="header__title">
          <Link to='/'>
            <img className="header__logo" src="img/logo.gif" alt="" />
          </Link>
        </h1>
        <NavLink className="header__link" to='/cart'>
          <img className="header__cart" src="img/carrito.png" alt="" />
        </NavLink>
      </div>

    </header>
  );
};

export default Header;
