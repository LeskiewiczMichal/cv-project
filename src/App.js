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

  const [formData, setFormData] = useState({
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
  });
  const [createCvState, setCreateCvState] = useState(false);
  const [confirmedInfo, setConfirmedInfo] = useState({
    education: [],
    experience: [],
  });

  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function addEducation() {
    setConfirmedInfo((prevConfirmedInfo) => {
      return {
        ...prevConfirmedInfo,
        education: [
          ...prevConfirmedInfo.education,
          {
            id: nanoid(),
            schoolName: formData.schoolName,
            studyTitle: formData.studyTitle,
            studyStartDate: formData.studyStartDate,
            studyEndDate: formData.studyEndDate,
          },
        ],
      };
    });

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        schoolName: '',
        studyTitle: '',
        studyStartDate: '',
        studyEndDate: '',
      };
    });
  }

  function addExperience() {
    setConfirmedInfo((prevConfirmedInfo) => {
      return {
        ...prevConfirmedInfo,
        experience: [
          ...prevConfirmedInfo.experience,
          {
            id: nanoid(),
            companyName: formData.companyName,
            positionTitle: formData.positionTitle,
            mainTasks: formData.mainTasks,
            workStartDate: formData.workStartDate,
            workEndDate: formData.workEndDate,
          },
        ],
      };
    });
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        workStartDate: '',
        workEndDate: '',
      };
    });
  }

  function createCv() {
    setCreateCvState((prevState) => !prevState)
  }

  return (
    <div className="app--container">
      {!createCvState ? (
        <div className="app--render-container">
          <Header />
          <div className="page">
            <GeneralInfo data={formData} handleChange={handleChange} />
            <Education
              data={formData}
              handleChange={handleChange}
              addEducation={addEducation}
            />
            <Experience
              data={formData}
              handleChange={handleChange}
              addExperience={addExperience}
            />
            <button className="create-button" onClick={createCv}>
              Create
            </button>
          </div>
        </div>
      ) : (
        <Cv data={formData} confirmedInfo={confirmedInfo} />
      )}
    </div>
  );
}

export default App;
