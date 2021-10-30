import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaintCalculator from './pages/PaintCalculator';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ PaintCalculator } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
