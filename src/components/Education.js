import React from 'react';
import './styles/Education.css';

export default function Education(props) {
  return (
    <div>
      <h3 className="heading">Education</h3>
      <form className="form">
        <label>
          School name:
          <input
            type="text"
            placeholder="Name..."
            name="schoolName"
            onChange={props.handleChange}
            value={props.data.schoolName}
          />
        </label>

        <label>
          Title of study:
          <input
            type="text"
            placeholder="Title..."
            name="studyTitle"
            onChange={props.handleChange}
            value={props.data.studyTitle}
          />
        </label>

        <label>
          Start date:
          <input
            type="date"
            name="studyStartDate"
            onChange={props.handleChange}
            value={props.data.studyStartDate}
          />
        </label>

        <label>
          End date:
          <input
            type="date"
            name="studyEndDate"
            onChange={props.handleChange}
            value={props.data.studyEndDate}
          />
        </label>
      </form>
      <button className="education--button" onClick={props.addEducation}>
        Confirm
      </button>
    </div>
  );
}
