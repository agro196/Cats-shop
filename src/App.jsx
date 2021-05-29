import React from "react";
import {Header} from './components/Header';
import {Catalog} from './components/Catalog';
import {Subscription} from "./components/Subscription";
import {Button} from "./components/Button";
import './App.scss'

function App() {
   const [isTopVisible, setIsTopVisible] = React.useState(false);

   React.useEffect(() => {
      const listener = () => {
         if (window.scrollY > 150) {
            setIsTopVisible(true);
         } else {
            setIsTopVisible(false);
         }
      }
      window.addEventListener('scroll', listener);
      return () => window.removeEventListener('scroll', listener);
   }, []);

   return (
     <div className="app">
        <Header/>
        <Catalog/>
        <Subscription/>
        {isTopVisible && (
          <Button
            icon
            className='app__on-top'
            onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth'})}
            aria-label="Наверх"
          />
        )}
     </div>
   );
}

export default App;
