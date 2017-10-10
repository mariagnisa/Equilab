import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { spring, AnimatedSwitch, } from 'react-router-transition';

//import moduls
import Header from './components/Header';
import Footer from './components/Footer';
import Start from './components/Start';
import About from './components/About';
import Hiring from './components/Hiring';
import HiringDetails from './components/Hiring_details';
import Faq from './components/Faq';
// import Slider from './components/Slider';

//import css
import './style/index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path={`/hiring/:job`} component={HiringDetails} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/hiring" component={Hiring} />
          <AnimatedSwitch
            atEnter={{ opacity: 0, offset: 100 }}
            atLeave={{ opacity: spring(0), offset: spring(-100) }}
            atActive={{ opacity: spring(1), offset: spring(0) }}
            mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`,
              height: 0,
            })}
          >
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Start} />
          </AnimatedSwitch>

        </Switch>
        <Footer />
      </div>
    </Router>
  </div>
  , document.querySelector('.main'));
  // registerServiceWorker();
