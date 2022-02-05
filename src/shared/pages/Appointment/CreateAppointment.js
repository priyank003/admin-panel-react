import React from "react";
import { useFormik } from "formik";
import InputDiv from "../../components/Form/InputDiv";
import "./CreateAppointment.css";

import { Button } from "react-bootstrap";

export default function CreateAppointment(props) {
  const formik = useFormik({
    initialValues: {
      appointment_date: "",
      consultancy_type: "",
      center: "",
      doctors: "",
      appointment_mode: "",
      patient_name: "",
      mobile_number: "",
      patient_email: "",
      patient_gender: "",
      patient_address: "",
      patient_landmark: "",
      patient_pincode: "",
      patient_state: "",
      patient_country: "",
      patient_package: "",
    },
    onSubmit: async (values) => {
      await fetch("https://api.drpaul-clinic.com/appointment", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();

      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="formdisplay">
      <div className="formdisplay-container">
        <form onSubmit={formik.handleSubmit}>
          <div className="appointment__info">
            <div className="appointment__info__header">
              <p>Create Appoinment</p>
            </div>
            <div className="appointment__info__inputs">
              <InputDiv
                label="Appointment Date"
                required={true}
                type="date"
                className={"appointment__info__inputs__input"}
                name="appointment_date"
                onChange={formik.handleChange}
                value={formik.values.appointment_date}
              />
              <InputDiv
                label="Consultancy Type"
                required={true}
                className={"appointment__info__inputs__input"}
                name={"consultancy_type"}
                onChange={formik.handleChange}
                value={formik.values.consultancy_type}
              />
              <InputDiv
                label="Center"
                required={true}
                className={"appointment__info__inputs__input"}
                name="center"
                onChange={formik.handleChange}
                value={formik.values.center}
              />
              <InputDiv
                label="Doctors"
                required={true}
                className={"appointment__info__inputs__input"}
                name="doctors"
                onChange={formik.handleChange}
                value={formik.values.doctors}
              />
              <InputDiv
                label="Appointment mode"
                className={"appointment__info__inputs__input"}
                name="appointment_mode"
                onChange={formik.handleChange}
                value={formik.values.appointment_mode}
              />
            </div>
          </div>
          <div className="patient__info">
            <div className="patient__info__header">
              <p>Patient Information</p>
            </div>
            <div className="patient__info__inputs">
              <div className="patient__info__inputs__row">
                <InputDiv
                  label="Patient Name"
                  required={true}
                  className={"appointment__info__inputs__input"}
                  name="patient_name"
                  onChange={formik.handleChange}
                  value={formik.values.patient_name}
                />
                <InputDiv
                  label="Mobile number"
                  required={true}
                  type="number"
                  className={"appointment__info__inputs__input"}
                  name="mobile_number"
                  onChange={formik.handleChange}
                  value={formik.values.mobile_number}
                />
                <InputDiv
                  label="Email"
                  required={true}
                  type="email"
                  className={"appointment__info__inputs__input"}
                  name="patient_email"
                  onChange={formik.handleChange}
                  value={formik.values.patient_email}
                />

                <InputDiv
                  label="Gender"
                  required={true}
                  className={"appointment__info__inputs__input"}
                  name="patient_gender"
                  onChange={formik.handleChange}
                  value={formik.values.patient_gender}
                />
              </div>
              <div className="patient__info__inputs__row">
                <InputDiv
                  label="Address"
                  required={true}
                  className={"appointment__info__inputs__input"}
                  name="patient_address"
                  onChange={formik.handleChange}
                  value={formik.values.patient_address}
                />
                <InputDiv
                  label="Landmark"
                  required={true}
                  className={"appointment__info__inputs__input"}
                  name="patient_landmark"
                  onChange={formik.handleChange}
                  value={formik.values.patient_landmark}
                />
                <InputDiv
                  label="Pincode"
                  required={true}
                  type="number"
                  className={"appointment__info__inputs__input"}
                  name="patient_pincode"
                  onChange={formik.handleChange}
                  value={formik.values.patient_pincode}
                />
                <InputDiv
                  label="State"
                  required={true}
                  className={"appointment__info__inputs__input"}
                  name="patient_state"
                  onChange={formik.handleChange}
                  value={formik.values.patient_state}
                />
              </div>
              <div className="patient__info__inputs__row">
                <InputDiv
                  label="Country"
                  required={true}
                  className={"appointment__info__inputs__input"}
                  name="patient_country"
                  onChange={formik.handleChange}
                  value={formik.values.patient_country}
                />
                <InputDiv
                  label="Type of Package"
                  required={true}
                  className={"appointment__info__inputs__input"}
                  name="patient_package"
                  onChange={formik.handleChange}
                  value={formik.values.patient_package}
                />
              </div>
            </div>
          </div>
          <div className="create__appointment">
            <div className="create__appointment__header">
              <p>Create Appointment</p>
            </div>
            <div className="create__apointment__container">
              <Button
                style={{
                  width: "fit-content",
                  backgroundColor: "#57C262",
                  border: "none",
                  width: "150px",
                }}
                type="submit"
              >
                Create
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
