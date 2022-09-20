import React from 'react';
import './styles/Cv.css';

export default class Cv extends React.Component {
  render() {
    return (
      <div className="cv--container">
        <section className="cv--left">
          <span className="cv--name">
            {this.props.data.name} {this.props.data.surname}
          </span>
          <span className="cv--contact">Contact:</span>
          <span className="cv--email-heading">Email:</span>
          <span className="cv--email-text">{this.props.data.email}</span>
          <span className="cv--phone-heading">Phone:</span>
          <span className="cv--phone-text">{this.props.data.phone}</span>
        </section>
        <section className="cv--right">
        <h3 className="cv--section-heading">Education</h3>
          {this.props.data.education.map((element) => {
            return (
              <div className="cv--section" key={element.id}>
                {/* <h3 className="cv--section-heading">Education</h3> */}
                <span>
                  <b>School name: {element.schoolName}</b>{' '}
                </span>
                <span>
                  <b>Study title: {element.studyTitle}</b>{' '}
                </span>
                <span>
                  <b>From: {element.studyStartDate}</b>{' '}
                </span>
                <span>
                  <b>To: {element.studyEndDate}</b>{' '}
                </span>
              </div>
            );
          })}
            <h3 className="cv--section-heading">Experience</h3>
          {this.props.data.experience.map((element) => {
            return (
              <div className="cv--section" key={element.id}>
                {/* <h3 className="cv--section-heading">Experience</h3> */}
                <span>
                  <b>Company name: {element.companyName}</b>
                </span>
                <span>
                  <b>Position title: {element.positionTitle}</b> 
                </span>
                <span>
                  <b>Main tasks: {element.mainTasks}</b> 
                </span>
                <span>
                  <b>From: {element.workStartDate}</b> 
                </span>
                <span>
                  <b>To: {element.workEndDate}</b> 
                </span>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
