import React from 'react';
import './styles/Experience.css';

export default class Experience extends React.Component {
  render() {
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
              onChange={this.props.handleChange}
              value={this.props.data.companyName}
            />
          </label>

          <label>
            Position title:
            <input
              type="text"
              placeholder="Title..."
              name="positionTitle"
              onChange={this.props.handleChange}
              value={this.props.data.positionTitle}
            />
          </label>

          <label>
            Main tasks:
            <textarea
              name="mainTasks"
              placeholder="Main tasks..."
              cols="20"
              rows="5"
              onChange={this.props.handleChange}
              value={this.props.data.mainTasks}
            />
          </label>

          <label>
            Start date:
            <input
              type="date"
              name="workStartDate"
              onChange={this.props.handleChange}
              value={this.props.data.workStartDate}
            />
          </label>

          <label>
            End date:
            <input
              type="date"
              name="workEndDate"
              onChange={this.props.handleChange}
              value={this.props.data.workEndDate}
            />
          </label>
        </form>
        <button
          className="experience--button"
          onClick={this.props.addExperience}
        >
          Confirm
        </button>
      </div>
    );
  }
}
