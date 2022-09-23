import React from 'react';
import './styles/GeneralInfo.css';

export default function GeneralInfo(props) {
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
            value={props.data.name}
            onChange={props.handleChange}
          />
        </label>

        <label>
          Surname:
          <input
            type="text"
            placeholder="Surname..."
            name="surname"
            value={props.data.surname}
            onChange={props.handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            placeholder="Email..."
            name="email"
            value={props.data.email}
            onChange={props.handleChange}
          />
        </label>

        <label>
          Phone:
          <input
            type="phone"
            placeholder="Phone..."
            name="phone"
            value={props.data.phone}
            onChange={props.handleChange}
          />
        </label>
      </form>
    </div>
  );
}
