import React from "react";
import './styles/GeneralInfo.css'

export default class GeneralInfo extends React.Component {
    render() {
        return (
            <div>
                <h3 className="heading">Personal Information</h3>
                <form className="form">
                    <label>Name:
                    <input type="text" placeholder="Name..." name="name"/>
                    </label>

                    <label>Surname:
                    <input type="text" placeholder="Surname..." name="surname" />
                    </label>

                    <label>Email:
                    <input type="email" placeholder="Email..." name="email" />
                    </label>

                    <label>Phone:
                    <input type="phone" placeholder="Phone..." name="phone"/>
                    </label>
                </form>
            </div>
        )
    }
}