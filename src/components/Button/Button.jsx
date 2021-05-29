import React from 'react';
import cx from 'clsx';
import './Button.scss';

export function Button({className, round, show, icon, sold, ...props}) {
   return (
     <button
       className={cx(
         className,
         'btn',
         round && 'btn--round',
         sold && 'btn--sold',
         show && 'btn--show',
         icon && 'btn--icon',
       )}
       type='button'
       {...props}
     />
   )
}
