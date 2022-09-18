import React from 'react';
import './App.css';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Cv from './components/Cv';

class App extends React.Component {
  
  render() {
    return(
      <div className='app--container'>
        <Header />
        <div className='page'>
          <GeneralInfo />
          <Education />
          <Experience />
          <button className='create-button'>Create</button>
        </div>
      <Cv />
      </div>
    )
  }
}

export default App;
