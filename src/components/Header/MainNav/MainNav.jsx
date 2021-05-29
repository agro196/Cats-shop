import React from 'react';
import cx from "clsx";
import {SiteList} from "../SiteList";
import './MainNav.scss';

export function MainNav({className, ...props}) {
   const [isNavVisible, setIsNavVisible] = React.useState(false);

   return (
     <nav className={cx(className,
       "main-nav",
       isNavVisible ? "main-nav--opened" : "main-nav--closed")}
          {...props}>
        <SiteList className="main-nav__list"/>
        <button
          onClick={() => setIsNavVisible(val => !val)}
          className="main-nav__toggle"
          aria-label="Открыть/Закрыть меню"
        />
     </nav>
   )
}
