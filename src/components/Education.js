import React from 'react';
import './styles/Education.css'

export default class Education extends React.Component {
  render() {
    return (
      <div>
        <h3 className="heading">Education</h3>
        <form className="form">
          <label>
            School name:
            <input type="text" placeholder="Name..." name="schoolName" />
          </label>

          <label>
            Title of study:
            <input type="text" placeholder="Title..." name="studyTitle" />
          </label>

          <label>
            Start date:
            <input type="date" name="startDate" />
          </label>

          <label>
            End date:
            <input type="date" name="endDate" />
          </label>
        </form>
      </div>
    );
  }
}
