import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import moduls
import Header from './components/Header';
import Footer from './components/Footer';
import Start from './components/Start';
import About from './components/About';
import Hiring from './components/Hiring';
import HiringDetails from './components/Hiring_details';
import Faq from './components/Faq';
import Slider from './components/Slider';

//import css
import './style/index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path={`/hiring/:job`} component={HiringDetails} />
        <Route path="/faq" component={Faq} />
        <Route path="/hiring" component={Hiring} />
        <Route path="/about" component={About} />
        <Route path="/" component={Start} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  , document.querySelector('.main'));
  // registerServiceWorker();
