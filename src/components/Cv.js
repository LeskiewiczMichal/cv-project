import React from "react";
import './styles/Cv.css'

export default class Cv extends React.Component {
    render() {
        return (
            <div className="cv--container">
                <section className="cv--left">
                    <span className="cv--name">Michał Leśkiewicz</span>
                    <span className="cv--contact">Contact:</span>
                    <span className="cv--email-heading">Email:</span>
                    <span className="cv--email-text">wefqqewff@.pl</span>
                    <span className="cv--phone-heading">Phone:</span>
                    <span className="cv--phone-text">2341234125132</span>
                </section>
                <section className="cv--right">
                <div className='cv--section'>
                    <h3 className="cv--section-heading">Personal Information</h3>
                    <span><b>Name:</b> qwefqwefeqfg</span>
                    <span><b>Surname:</b> eognog</span>
                    <span><b>Email:</b> qwfqwefqf@eff.pl</span>
                    <span><b>Phone:</b> 2342134134</span>
                </div>
                <div className='cv--section'>
                    <h3 className="cv--section-heading">Education</h3>
                    <span><b>Name:</b> qwefqwefeqfg</span>
                    <span><b>Surname:</b> eognog</span>
                    <span><b>Email:</b> qwfqwefqf@eff.pl</span>
                    <span><b>Phone:</b> 2342134134</span>
                </div>
                <div className='cv--section'>
                    <h3 className="cv--section-heading">Experience</h3>
                    <span><b>Name:</b> qwefqwefeqfg</span>
                    <span><b>Surname:</b> eognog</span>
                    <span><b>Email:</b> qwfqwefqf@eff.pl</span>
                    <span><b>Phone:</b> 2342134134</span>
                </div>
                </section>
                
            </div>
        )
    }
}