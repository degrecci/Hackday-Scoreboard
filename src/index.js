import React from 'react';
import { render } from 'react-dom';

import Home from './containers/Home/Home';
import './style.css';

const App = () => <Home />;

render(
  <App />,
  document.getElementById('root'),
);
