import React from "react";
import InputDiv from "./../components/Form/InputDiv";
import { Row, Button } from "react-bootstrap";
import "./AddSpecialOffer.css";
export default function AddSpecialOffer() {
  return (
    <div className="formdisplay">
      <div className="addspecialoffer__info">
        <div className="addspecialoffer__info__header">
          <p>Add Special Offer</p>
        </div>
        <form>
          <div className="addspecialoffer__info__inputs">
            <Row className="addspecialoffer__info__input__row">
              <InputDiv
                label="Offer Name "
                className="addspecialoffer__info__input__field"
              />
              <InputDiv
                label="Product Type"
                className="addspecialoffer__info__input__field"
              />
              <InputDiv
                label="Price"
                className="addspecialoffer__info__input__field"
              />
            </Row>
            <Row className="addspecialoffer__info__input__row">
              <InputDiv
                label="Start Date "
                className="addspecialoffer__info__input__field"
              />
              <InputDiv
                label="End Date"
                className="addspecialoffer__info__input__field"
              />
              <InputDiv
                label="Offer Image"
                className="addspecialoffer__info__input__field"
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
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
