import React from "react";
import FormStructure from "../../components/Form/FormStructure";
import InputDiv from "../../components/Form/InputDiv";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./AddDoctor.css";
export default function AddDoctor() {
  return (
    <div className="formdisplay">
      <div className="adddoctor__info">
        <div className="adddoctor__info__header">
          <p>Add Doctor</p>
        </div>
        <form>
          <div className="adddoctor__info__inputs">
            <Row className="adddoctor__info__input__row">
              <InputDiv
                label="First Name"
                className="adddoctor__info__input__field"
              />
              <InputDiv
                label="Last Name"
                className="adddoctor__info__input__field"
              />
              <InputDiv
                label="Email"
                type="email"
                className="adddoctor__info__input__field"
              />
              <InputDiv
                label="Phone Number"
                className="adddoctor__info__input__field"
              />
              <InputDiv
                label="Specialization"
                className="adddoctor__info__input__field"
              />
              <InputDiv
                label="Address"
                className="adddoctor__info__input__field"
              />
              <InputDiv
                label="Landmark"
                className="adddoctor__info__input__field"
              />
              <InputDiv
                label="City"
                className="adddoctor__info__input__field"
              />
            </Row>
            <Row className="adddoctor__info__input__row">
              <InputDiv
                label="Pincode"
                className="adddoctor__info__input__field"
              />
              <InputDiv
                label="Alternative Number"
                className="adddoctor__info__input__field"
              />
              <InputDiv
                label="Offline Date"
                className="adddoctor__info__input__field"
              />
              <InputDiv
                label="Offline Time"
                className="adddoctor__info__input__field"
              />
              <InputDiv
                label="Online Date"
                className="adddoctor__info__input__field"
              />
              <InputDiv
                label="Online Time"
                className="adddoctor__info__input__field"
              />
            </Row>
            <Button
              style={{
                width: "fit-content",
                backgroundColor: "#57C262",
                border: "none",
                width: "150px",
                alignSelf: "flex-end",
                marginRight: "5%",
                marginTop: "5rem",
              }}
            >
              Add doctor
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
