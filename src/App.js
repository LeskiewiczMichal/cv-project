import React from 'react';
import './App.css';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Cv from './components/Cv';
import { nanoid } from 'nanoid';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.createCv = this.createCv.bind(this);
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
      experience: [],
      createCv: false,
    };
  }

  handleChange(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  addEducation() {
    this.setState((prevState) => {
      return {
        ...prevState,
        schoolName: '',
        studyTitle: '',
        studyStartDate: '',
        studyEndDate: '',
        education: [
          ...prevState.education,
          {
            id: nanoid(),
            schoolName: prevState.schoolName,
            studyTitle: prevState.studyTitle,
            studyStartDate: prevState.studyStartDate,
            studyEndDate: prevState.studyEndDate,
          },
        ],
      };
    });
  }

  addExperience() {
    this.setState((prevState) => {
      return {
        ...prevState,
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        workStartDate: '',
        workEndDate: '',
        experience: [
          ...prevState.experience,
          {
            id: nanoid(),
            companyName: prevState.companyName,
            positionTitle: prevState.positionTitle,
            mainTasks: prevState.mainTasks,
            workStartDate: prevState.workStartDate,
            workEndDate: prevState.workEndDate,
          },
        ],
      };
    });
  }

  createCv() {
    this.setState((prevState) => {
      return {
        ...prevState,
        createCv: true,
      };
    });
  }

  render() {
    return (
      <div className="app--container">
        {!this.state.createCv ? (
          <div className="app--render-container">
            <Header />
            <div className="page">
              <GeneralInfo data={this.state} handleChange={this.handleChange} />
              <Education
                data={this.state}
                handleChange={this.handleChange}
                addEducation={this.addEducation}
              />
              <Experience
                data={this.state}
                handleChange={this.handleChange}
                addExperience={this.addExperience}
              />
              <button className="create-button" onClick={this.createCv}>
                Create
              </button>
            </div>
          </div>
        ) : (
          <Cv data={this.state} />
        )}
      </div>
    );
  }
}

export default App;
