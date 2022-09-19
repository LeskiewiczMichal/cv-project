import React from 'react';
import './styles/Education.css';

export default class Education extends React.Component {
  render() {
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
              onChange={this.props.handleChange}
              value={this.props.data.schoolName}
            />
          </label>

          <label>
            Title of study:
            <input
              type="text"
              placeholder="Title..."
              name="studyTitle"
              onChange={this.props.handleChange}
              value={this.props.data.studyTitle}
            />
          </label>

          <label>
            Start date:
            <input
              type="date"
              name="studyStartDate"
              onChange={this.props.handleChange}
              value={this.props.data.studyStartDate}
            />
          </label>

          <label>
            End date:
            <input
              type="date"
              name="studyEndDate"
              onChange={this.props.handleChange}
              value={this.props.data.studyEndDate}
            />
          </label>
        </form>
        <button className='education--button' onClick={this.props.addEducation}>Confirm</button>
      </div>
    );
  }
}
