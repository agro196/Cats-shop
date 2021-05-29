import React from "react";
import cx from "clsx";
import './Container.scss';

export function Container({className, ...props}) {
   return (
     <div className={cx(className, "container")} {...props} />
   )
}
