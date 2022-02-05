import React from "react";
import InputDiv from "./InputDiv";
import "./FormStructure.css";
import { Button } from "react-bootstrap";

export function FormSectionHeader(props) {
  <div className="appointment__info__header">
    <p>{props.title}</p>
  </div>;
}

export default function FormStructure(props) {
  return (
    <div className="formdisplay">
      <div className="formdisplay-container">
        <div className="appointment__info">
          <div className="appointment__info__header">
            <p>Create Appoinment</p>
          </div>
          <div className="appointment__info__inputs"></div>
        </div>
        <div className="patient__info">
          <div className="patient__info__header">
            <p>Patient Information</p>
          </div>
          <div className="patient__info__inputs">
            <div className="patient__info__inputs_row"></div>
            <div className="patient__info__inputs_row"> </div>
            <div className="patient__info__inputs_row"></div>
          </div>
        </div>
        <div className="create__appointment">
          <div className="create__appointment__header">
            <p>Create Appointment</p>
          </div>
          <div className="create__apointment__container"></div>
        </div>
      </div>
    </div>
  );
}
