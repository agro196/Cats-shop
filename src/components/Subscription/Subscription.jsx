import React from 'react';
import {Container} from "../Container";
import {Form} from "../Form";
import './Subscription.scss';

export function Subscription({...props}) {
   return (
     <section className="subscription" {...props}>
        <Container className="subscription__wrapper">
           <div className="subscription__text-block">
              <h2 className="subscription__title">Успей купить!</h2>
              <p className="subscription__text">Подпишись и успей словить все акции</p>
           </div>
           <Form className="subscription__form"/>
        </Container>
     </section>
   )
}