import React from 'react';
import cx from 'clsx';
import {Container} from "../Container";
import {MainNav} from "./MainNav";
import logo from './logo.svg'
import './Header.scss';

export function Header({className, ...props}) {
   return (
     <header className={cx(className, 'page-header')} {...props}>
        <Container className="page-header__wrapper">
           <div className="page-header__logo-block">
              <a className="page-header__logo" href="/" aria-label="На главную">
                 <img src={logo} alt="Компания"/>
              </a>
           </div>
           <MainNav className="page-header__main-nav"/>
           <div className="page-header__contacts">
              <a className="page-header__phone-number" href="tel:+7(812)555-66-66">+544 3490 00000</a>
              <span className="page-header__phone-text">Звони скорее!</span>
           </div>
           <span className="page-header__search-result">
              Найдено 349 котов
           </span>
        </Container>
     </header>
   )
}
