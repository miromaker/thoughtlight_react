import React from 'react';
import Header from './Header';
import Wordbulbs from './Wordbulbs';
import Requests from './Requests';
import Footer from './Footer';



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

