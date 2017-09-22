import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import moduls
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';
import Start from './components/Start';
import Hiring from './components/Hiring';
import Faq from './components/FAQ';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div style={Background}>
      <Header />
      <Switch>
        <Route path="/faq" component={Faq} />
        <Route path="/hiring" component={Hiring} />
        <Route path="/" component={Start} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  , document.querySelector('.main'));
  // registerServiceWorker();
