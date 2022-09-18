import React from 'react';
import './App.css';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Cv from './components/Cv';

class App extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: '',
      surname: '',
      email: '',
      phone: '',
      schoolName: '',
      studyTitle: '',
      studyStartDate: '',
      studyEndDate: '',
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      workStartDate: '',
      workEndDate: '',
      education: [],
      experience: []
    }
    
  }

  handleChange(event) {
    this.setState(prevState => {
      console.log(prevState)
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }
  
  render() {
    return(
      <div className='app--container'>
        <Header/>
        <div className='page'>
          <GeneralInfo data={this.state} handleChange={this.handleChange}/>
          <Education data={this.state} handleChange={this.handleChange}/>
          <Experience data={this.state}  handleChange={this.handleChange}/>
          <button className='create-button'>Create</button>
        </div>
      <Cv data={this.state}/>
      </div>
    )
  }
}

export default App;
