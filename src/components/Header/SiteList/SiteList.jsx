import React from 'react';
import cx from "clsx";
import "./SiteList.scss";

export function SiteList({className, ...props}) {
   return (
     <ul className={cx(className, "site-list")} {...props}>
        <li className="site-list__item">
           <a className="site-list__link" href="/">Main</a>
        </li>
        <li className="site-list__item">
           <a className="site-list__link" href="/">Gallery</a>
        </li>
        <li className="site-list__item">
           <a className="site-list__link" href="/">News</a>
        </li>
        <li className="site-list__item">
           <a className="site-list__link" href="/">Profile</a>
        </li>
     </ul>
   )
}