import React from "react";
import cx from "clsx";
import './TextField.scss'

export function TextField({className, ...props}) {
   return (
     <li className={cx(className, "text-field")} {...props}>
        <label className="visually-hidden" htmlFor="email">Введите адрес электронной почты</label>
        <input className="text-field__input" type="email" name="email" id="email" placeholder="Email"/>
     </li>
   )
}