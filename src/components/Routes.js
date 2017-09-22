import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import StartPage from './Start';
import FAQPage from './FAQ';

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Start</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/hiring">Hiring</Link></li>
      </ul>

      <Route exact path="/" component={Start}/>
      <Route path="/faq" component={FAQ}/>
      <Route path="/hiring" component={Hiring}/>
    </div>
  </Router>
);

const Start = () => (
  <div>
    <StartPage />
  </div>
);

const FAQ = () => (
  <div>
    <FAQPage />
  </div>
);

const Hiring = ({ match }) => (
  <div>
    <h2>We are growing!</h2>

    <h2>Available Positions:</h2>
    <ul>
      <li>
        <Link to={`${match.url}/react-native`}>
          React Native
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/pattern-recognition`}>
          Pattern Recognition/DevOps
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:hiringId`} component={HiringDetail}/>
  </div>
)

const HiringDetail = ({ match }) => (
  <div>
    <h3>{match.params.hiringId}</h3>
  </div>
)

export default Routes;
