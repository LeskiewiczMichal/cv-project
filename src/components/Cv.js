import React from "react";
import './styles/Cv.css'

export default class Cv extends React.Component {
    render() {
        return (
            <div className="cv--container">
                <section className="cv--left">
                    <span className="cv--name">{this.props.data.name} {this.props.data.surname}</span>
                    <span className="cv--contact">Contact:</span>
                    <span className="cv--email-heading">Email:</span>
                    <span className="cv--email-text">{this.props.data.email}</span>
                    <span className="cv--phone-heading">Phone:</span>
                    <span className="cv--phone-text">{this.props.data.phone}</span>
                </section>
                <section className="cv--right">
                <div className='cv--section'>
                    <h3 className="cv--section-heading">Education</h3>
                    <span><b>School name:</b> {this.props.data.schoolName}</span>
                    <span><b>Study title:</b> {this.props.data.studyTitle}</span>
                    <span><b>From:</b> {this.props.data.studyStartDate}</span>
                    <span><b>To:</b> {this.props.data.studyEndDate}</span>
                </div>
                <div className='cv--section'>
                    <h3 className="cv--section-heading">Experience</h3>
                    <span><b>Company name:</b> {this.props.data.companyName}</span>
                    <span><b>Position title:</b> {this.props.data.positionTitle}</span>
                    <span><b>Main tasks:</b> {this.props.data.mainTasks}</span>
                    <span><b>From:</b> {this.props.data.workStartDate}</span>
                    <span><b>To:</b> {this.props.data.workEndDate}</span>
                </div>
                </section>
                
            </div>
        )
    }
}