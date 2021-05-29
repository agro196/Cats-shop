import React from "react";
import cx from "clsx";
import {TextField} from "../TextField";
import {CheckboxField} from "../CheckboxField";
import {Button} from "../Button";
import './Form.scss';

export function Form({className, ...props}) {
   const [isChecked, setIsChecked] = React.useState(true);

   return (
     <form className={cx(className, "form")} {...props} action="#" method="POST">
        <div className="form__fieldset">
           <ul className="form__fieldset-list">
              <TextField className="form__fieldset-item"/>
              <CheckboxField
                checked={isChecked}
                onChange={() => setIsChecked(val => !val)}
                className="form__fieldset-item"
              />
           </ul>
        </div>
        <Button
          round
          className="form__submit-button btn btn--submit"
          type="submit"
          disabled={!isChecked}
        >
           Подписаться
        </Button>
     </form>
   )
}
