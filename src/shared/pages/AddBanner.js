import React from "react";

import { Button, Row } from "react-bootstrap";
import InputDiv from "../components/Form/InputDiv";
import InputImageDiv from "../components/Form/InputImageDiv";

import "./AddBanner.css";
export default function AddBanner() {
  return (
    <div className="formdisplay">
      <div className="adddoctor__info">
        <div className="adddoctor__info__header">
          <p>Add Banner</p>
        </div>
        <form>
          <div className="adddoctor__info__inputs">
            <Row
              style={{ margin: "10px", marginBottom: "0" }}
              className="adddoctor__info__input__row"
            >
              <InputImageDiv
                label="Pop Up Screen Banner"
                className="add_banner_input"
              />
              <InputImageDiv label="Main Banner" className="add_banner_input" />
            </Row>

            <Row
              style={{ margin: "10px", marginBottom: "0" }}
              className="adddoctor__info__input__row"
            >
              <InputImageDiv
                label="Mid Area Screen Banner"
                className="add_banner_input"
              />
              <InputImageDiv
                label="Below Area Screen Banner"
                className="add_banner_input"
              />
            </Row>
          </div>
        </form>
      </div>
    </div>
  );
}
