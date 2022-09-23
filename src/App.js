import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Cv from './components/Cv';
import { nanoid } from 'nanoid';

function App() {
  const [state, setState] = useState({
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
  });

  function handleChange(event) {
    setState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  function addEducation() {
    setState((prevState) => {
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

  function addExperience() {
    setState((prevState) => {
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

  function createCv() {
    setState((prevState) => {
      return {
        ...prevState,
        createCv: true,
      };
    });
  }

  return (
    <div className="app--container">
      {!state.createCv ? (
        <div className="app--render-container">
          <Header />
          <div className="page">
            <GeneralInfo data={state} handleChange={handleChange} />
            <Education
              data={state}
              handleChange={handleChange}
              addEducation={addEducation}
            />
            <Experience
              data={state}
              handleChange={handleChange}
              addExperience={addExperience}
            />
            <button className="create-button" onClick={createCv}>
              Create
            </button>
          </div>
        </div>
      ) : (
        <Cv data={state} />
      )}
    </div>
  );
}

export default App;
