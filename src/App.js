import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Updated';

function App() {
  return (
    <div className='App'>
      <Router>
        <Main exact path='/product/' />
        <Detail path='/:id' />
        <Update path='/product/:id/edit' setLoaded={true} />
      </Router>
    </div>
  );
}

export default App;
