import React from 'react';
import './styles/Cv.css';

export default function Cv(props) {
  return (
    <div className="cv--container">
      <section className="cv--left">
        <span className="cv--name">
          {props.data.name} {props.data.surname}
        </span>
        <span className="cv--contact">Contact:</span>
        <span className="cv--email-heading">Email:</span>
        <span className="cv--email-text">{props.data.email}</span>
        <span className="cv--phone-heading">Phone:</span>
        <span className="cv--phone-text">{props.data.phone}</span>
      </section>
      <section className="cv--right">
        <h3 className="cv--section-heading">Education</h3>
        {props.data.education.map((element) => {
          return (
            <div className="cv--section" key={element.id}>
              <span>
                <b>School name:</b> {element.schoolName}
              </span>
              <span>
                <b>Study title:</b> {element.studyTitle}
              </span>
              <span>
                <b>From:</b> {element.studyStartDate}
              </span>
              <span>
                <b>To:</b> {element.studyEndDate}
              </span>
            </div>
          );
        })}
        <h3 className="cv--section-heading">Experience</h3>
        {props.data.experience.map((element) => {
          return (
            <div className="cv--section" key={element.id}>
              <span>
                <b>Company name:</b> {element.companyName}
              </span>
              <span>
                <b>Position title:</b> {element.positionTitle}
              </span>
              <span>
                <b>Main tasks:</b> {element.mainTasks}
              </span>
              <span>
                <b>From:</b> {element.workStartDate}
              </span>
              <span>
                <b>To:</b> {element.workEndDate}
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
}
