import React from 'react'
import { render } from 'react-dom'

import Scoreboard from './Scoreboard';

const App = () => <Scoreboard />

render(
  <App/>,
  document.getElementById('root')
)