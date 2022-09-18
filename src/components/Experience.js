import React from 'react';
import './styles/Experience.css'

export default class Experience extends React.Component {
  render() {
    return (
      <div>
        <h3 className="heading">Experience</h3>
        <form className="form">
          <label>
            Company name:
            <input type="text" placeholder="Name..." name="companyName" />
          </label>

          <label>
            Position title:
            <input type="text" placeholder="Title..." name="studyTitle" />
          </label>

          <label>
            Main tasks:
            <textarea name="mainTasks" placeholder='Main tasks...' cols="20" rows="5" />
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
