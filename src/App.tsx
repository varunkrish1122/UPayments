import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import store from '@/Store';
import Header from '@/Components/Header/Header';
import Content from '@/Components/Content/Content'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="ml-16 mr-16 mt-8">
        <Router>
          <Header />
          <Content />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
