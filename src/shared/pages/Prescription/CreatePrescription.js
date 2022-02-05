import React from "react";

import "./CreatePrescription.css";
import InputDiv from "../../components/Form/InputDiv";
import { Button } from "react-bootstrap";
export default function CreatePrescription() {
  return (
    <div className="create__prescription">
      <div className="formdisplay" style={{ overflowY: "scroll" }}>
        <div className="formdisplay-container">
          <form>
            <div className="create_Prescription__form">
              <div className="create_Prescription__form__header">
                <p>Create Prescreption</p>
              </div>
              <div
                className="create_Prescription__form__inputs"
                style={{ justifyContent: "space-between" }}
              >
                <InputDiv
                  label="Appointment Date"
                  required={true}
                  type="date"
                  className="create_Prescription__form__inputs__input"
                />
                <InputDiv
                  label="Consultancy Type"
                  required={true}
                  className="create_Prescription__form__inputs__input"
                />
                <InputDiv
                  label="Center"
                  required={true}
                  className="create_Prescription__form__inputs__input"
                />
                <InputDiv
                  label="Doctors"
                  required={true}
                  className="create_Prescription__form__inputs__input"
                />
              </div>
            </div>
            <div className="patient__info">
              <div className="patient__info__header">
                <p>Patient Information</p>
              </div>
              <div className="patient__info__inputs">
                <div
                  className="patient__info__inputs_row"
                  style={{ justifyContent: "space-between" }}
                >
                  <InputDiv
                    label="Patient Name"
                    required={true}
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Mobile number"
                    required={true}
                    type="number"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Email"
                    required={true}
                    type="email"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Gender"
                    required={true}
                    className="create_Prescription__form__inputs__input"
                  />
                </div>
                <div
                  className="patient__info__inputs_row"
                  style={{ justifyContent: "space-between" }}
                >
                  {" "}
                  <InputDiv
                    label="Address"
                    required={true}
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Landmark"
                    required={true}
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Pincode"
                    required={true}
                    type="number"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="State"
                    required={true}
                    className="create_Prescription__form__inputs__input"
                  />
                </div>
                <div className="patient__info__inputs_row">
                  <InputDiv
                    label="Country"
                    required={true}
                    className="create_Prescription__form__inputs__input"
                  />
                </div>
              </div>
            </div>
            <div className="patient__info">
              <div className="patient__info__header">
                <p>Patient Checkup</p>
              </div>
              <div className="patient__info__inputs">
                <div
                  className="patient__info__inputs_row"
                  style={{ justifyContent: "space-between" }}
                >
                  <InputDiv
                    label="Treatment Need"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Description"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="HSN Code"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Rate "
                    className="create_Prescription__form__inputs__input"
                  />
                </div>
                <div
                  className="patient__info__inputs_row"
                  style={{ justifyContent: "space-between" }}
                >
                  <InputDiv
                    label="Treatment Need"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Description"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="HSN Code"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Rate "
                    className="create_Prescription__form__inputs__input"
                  />
                </div>
                <div
                  className="patient__info__inputs_row"
                  style={{ justifyContent: "space-between" }}
                >
                  <InputDiv
                    label="Treatment Need"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Description"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="HSN Code"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Rate "
                    className="create_Prescription__form__inputs__input"
                  />
                </div>
                <div
                  className="patient__info__inputs_row"
                  style={{ justifyContent: "space-between" }}
                >
                  <InputDiv
                    label="Discount"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="GST"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Product Suggest"
                    className="create_Prescription__form__inputs__input"
                  />
                  <InputDiv
                    label="Graph"
                    className="create_Prescription__form__inputs__input"
                  />
                </div>
              </div>
            </div>

            <div
              className="create__apointment__container"
              style={{
                justifyContent: "flex-end",

                width: "100%",
              }}
            >
              <Button
                style={{
                  width: "fit-content",
                  backgroundColor: "#57C262",
                  border: "none",
                  width: "150px",
                  marginRight: "50px",
                }}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
