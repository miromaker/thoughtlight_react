import React from 'react';
import Header from '../Header/Header';
import Wordbulbs from '../Wordbulbs/Wordbulbs';
import Requests from '../Requests/Requests';
import Footer from '../Footer/Footer';

import './App.css';


class App extends React.Component {
  
  render () {
  return (
    <div className="App">
      < Header />
      < Wordbulbs />
      < Requests />
      < Footer />
    </div>
    )
  }
};

export default App;

