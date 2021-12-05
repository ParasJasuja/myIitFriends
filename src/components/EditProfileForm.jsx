import { Input } from "@material-ui/icons";
import React from "react";
import "../Styles/EditProfileForm.css";
import Background from "../UI/Background";

function EditProfileForm(props) {
  return (
    <div className="EditProfileForm">
      <h1 className="heading" style={{ fontSize: "2rem" }}>
        Personal Infromation
      </h1>
      <div className="">
        <label htmlFor="img-input" className="profile-imge-change form-labels">
          Change Profile Image
          <img
            className="circle-profile-image"
            src="https://picsum.photos/480/360"
            alt=""
          />
          <input id="img-input" className="change-image" type="file" />
        </label>
      </div>
      <div className="person-name">
        <label className="form-labels" htmlFor="firstname">
          First Name
          <input
            className="input-style"
            type="text"
            id="firstname"
            placeholder="First Name"
            required
          />
        </label>
        <label className="form-labels" htmlFor="lastname">
          Last Name
          <input
            className="input-style"
            type="text"
            id="lastname"
            placeholder="Last Name"
            required
          />
        </label>
      </div>
      <label className="form-labels" htmlFor="person-email">
        Email
        <input
          className="input-style"
          id="person-email"
          type="email"
          placeholder="example@mail.com"
          required
        />
      </label>
      <div className="person-more-details">
        <label className="form-labels" htmlFor="person-no">
          Mobile No.
          <input
            className="input-style"
            type="phone"
            id="person-no"
            placeholder="+91-"
          />
        </label>
        <label className="form-labels" htmlFor="person-dob">
          Birth Date
          <input
            className="input-style"
            type="date"
            id="person-dob"
            placeholder="xx,xx,xxxx"
          />
        </label>
      </div>

      <div className="person-more-details">
        <label className="form-labels" htmlFor="person-institute">
          Institute Name
          <input className="input-style" type="text" id="person-institute" />
        </label>
        <label className="form-labels" htmlFor="person-gender">
          Gender
          <input
            className="input-style"
            type="phone"
            id="person-gender"
            placeholder="Male/Female"
          />
        </label>
      </div>

      <label className="form-labels" htmlFor="">
        Discription
        <textarea
          className="input-style"
          id=""
          placeholder="Describe Yourself"
        />
      </label>
      <div className="form-action-buttons">
        <button className="connect-btn bgColor ">Save</button>
        <button
          className="connect-btn bgColor "
          onClick={props.closeEditProfile}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditProfileForm;
