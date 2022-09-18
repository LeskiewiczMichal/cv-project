import React from 'react';
import './styles/GeneralInfo.css';

export default class GeneralInfo extends React.Component {
  render() {
    return (
      <div>
        <h3 className="heading">Personal Information</h3>
        <form className="form">
          <label>
            Name:
            <input
              type="text"
              placeholder="Name..."
              name="name"
              value={this.props.data.name}
              onChange={this.props.handleChange}
            />
          </label>

          <label>
            Surname:
            <input
              type="text"
              placeholder="Surname..."
              name="surname"
              value={this.props.data.surname}
              onChange={this.props.handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              placeholder="Email..."
              name="email"
              value={this.props.data.email}
              onChange={this.props.handleChange}
            />
          </label>

          <label>
            Phone:
            <input
              type="phone"
              placeholder="Phone..."
              name="phone"
              value={this.props.data.phone}
              onChange={this.props.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
