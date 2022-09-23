import React from 'react';
import './styles/Experience.css';

export default function Experience(props) {
  return (
    <div>
      <h3 className="heading">Experience</h3>
      <form className="form">
        <label>
          Company name:
          <input
            type="text"
            placeholder="Name..."
            name="companyName"
            onChange={props.handleChange}
            value={props.data.companyName}
          />
        </label>

        <label>
          Position title:
          <input
            type="text"
            placeholder="Title..."
            name="positionTitle"
            onChange={props.handleChange}
            value={props.data.positionTitle}
          />
        </label>

        <label>
          Main tasks:
          <textarea
            name="mainTasks"
            placeholder="Main tasks..."
            cols="20"
            rows="5"
            onChange={props.handleChange}
            value={props.data.mainTasks}
          />
        </label>

        <label>
          Start date:
          <input
            type="date"
            name="workStartDate"
            onChange={props.handleChange}
            value={props.data.workStartDate}
          />
        </label>

        <label>
          End date:
          <input
            type="date"
            name="workEndDate"
            onChange={props.handleChange}
            value={props.data.workEndDate}
          />
        </label>
      </form>
      <button className="experience--button" onClick={props.addExperience}>
        Confirm
      </button>
    </div>
  );
}
