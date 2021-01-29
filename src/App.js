import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <SimpleReactLightbox>
        <Route path='/' component={Home} exact />
      </SimpleReactLightbox>
    </Router>
  );
}

export default App;
