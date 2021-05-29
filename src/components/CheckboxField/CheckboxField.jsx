import React from "react";
import cx from "clsx";
import './CheckboxField.scss';

export function CheckboxField({className, checked, ...props}) {
   return (
     <li className={cx(className, "checkbox-field")}>
        <label
          className={cx("checkbox-field__label", checked && 'checkbox-field__label--checked')}
        >
           <input
             className="checkbox-field__input visually-hidden"
             type="checkbox"
             checked={checked}
             {...props}
           />
           Подписаться на новости
        </label>
     </li>
   )
}