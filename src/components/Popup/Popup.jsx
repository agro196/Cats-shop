import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'clsx';
import './Popup.scss'

export function Popup({className, message, onClose, ...props}) {
   return ReactDOM.createPortal(
     <div className={cx(className, "popup")} {...props}>
        <p className="popup__text">
           {message}
        </p>
        <button
          onClick={onClose}
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть окно"
        />
     </div>,
     document.getElementById('modal')
   )
}

