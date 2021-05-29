import React from 'react';
import cx from 'clsx';
import {Button} from "../Button";
import {Popup} from "../Popup";
import './Product.scss';

export function Product({className, id, title, labels, price, image, sale, ...props}) {
   const [isPopupOpen, setIsPopupOpen] = React.useState(false)
   const [isSold, setIsSold] = React.useState(false);
   const [isLike, setIsLike] = React.useState(false);

   const onClosePopup = () => {
      setIsPopupOpen(false);
   }

   React.useEffect(() => {
      if (isLike) {
         setIsPopupOpen(true);
         const timeout = window.setTimeout(() => {
            onClosePopup();
         }, 2000);

         return () => {
            window.clearTimeout(timeout);
         }
      }
   }, [isLike])

   return (
     <div className={cx(className, 'product')} {...props}>
        {sale && (
          <div className='product__sale'>{sale + '%'}</div>
        )}
        <button
          className={cx('product__like', isLike && 'product__like--liked')}
          aria-label='Лайк'
          type='button'
          onClick={() => setIsLike((val) => !val)}
        >
           <svg width="46" height="42" fill="none">
              <path
                d="M33.781.695c-2.496 0-4.784.791-6.802 2.351-1.933 1.496-3.221 3.4-3.979 4.786-.758-1.385-2.046-3.29-3.98-4.786-2.017-1.56-4.305-2.35-6.801-2.35C5.253.695 0 6.392 0 13.947c0 8.163 6.553 13.748 16.475 22.203a571.533 571.533 0 015.579 4.798 1.435 1.435 0 001.892 0c1.985-1.735 3.895-3.363 5.58-4.8C39.447 27.697 46 22.112 46 13.95 46 6.392 40.747.694 33.781.694z"
                fill="currentColor"/>
           </svg>
        </button>
        <img className='product__image' src={image} alt={title}/>
        <div className='product__info'>
           <h2 className='product__title'>{title}</h2>
           <ul className='product__info-list'>
              <li className='product__info-item'>
              <span className={cx('product__info-mark', 'visually-hidden')}>
                Окрас шерсти
              </span>
                 <span className={cx('product__info-value', 'product__info-value--fur-color')}>{labels.color}</span>
              </li>
              <li className='product__info-item'>
                 <span className='product__info-value'>{labels.age} мес</span>
                 <span className='product__info-mark'>
                Возраст
              </span>
              </li>
              <li className='product__info-item'>
                 <span className='product__info-value'>{labels.paw}</span>
                 <span className='product__info-mark'>
                Кол-во лап
              </span>
              </li>
           </ul>
           <span className='product__price'>{price}руб</span>
        </div>
        <Button
          className='product__button'
          sold={isSold}
          onClick={() => setIsSold(true)}
        >
           {isSold ? 'Продан' : 'Купить'}
        </Button>
        {isPopupOpen && (
          <Popup
            onClose={onClosePopup}
            message={(
              <>
                 Товар
                 <b>{' '}"{title}"{' '}</b>
                 добавлен в избранное
              </>
            )}
          />
        )}
     </div>
   )
}
