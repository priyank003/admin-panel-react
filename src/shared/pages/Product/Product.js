import React from "react";
import "./Product.css";

import InputDiv from "../../components/Form/InputDiv";
import { Button, Col, Row } from "react-bootstrap";
export default function Product() {
  return (
    <div className="formdisplay">
      <div className="productorder__info">
        <div className="productorder__info__header">
          <p>Product Order Information</p>
        </div>
        <form>
          <div className="productorder__info__inputs">
            <Row className="productorder__info__input__row">
              <Col>
                <InputDiv
                  label="Name"
                  className="productorder__info__input__field"
                />
                <InputDiv
                  label="Mobile Number"
                  className="productorder__info__input__field"
                />
                <InputDiv
                  label="Whatsapp Number"
                  className="productorder__info__input__field"
                />
                <InputDiv
                  label="Address"
                  className="productorder__info__input__field"
                />
              </Col>
              <Col>
                <InputDiv
                  label="Alternatvie Number "
                  className="productorder__info__input__field"
                />
                <InputDiv
                  label="Pincode"
                  className="productorder__info__input__field"
                />
                <InputDiv
                  label="Building No "
                  className="productorder__info__input__field"
                />
                <InputDiv
                  label="Landmark"
                  className="productorder__info__input__field"
                />
              </Col>
              <Col>
                <InputDiv
                  label="Product Type"
                  className="productorder__info__input__field"
                />
                <InputDiv
                  label="Product ID "
                  className="productorder__info__input__field"
                />
                <InputDiv
                  label="Product SKU"
                  className="productorder__info__input__field"
                />
                <InputDiv
                  label="Price "
                  className="productorder__info__input__field"
                />
              </Col>
              <Col>
                <InputDiv
                  label="Tax"
                  className="productorder__info__input__field"
                />
                <InputDiv
                  label="Shippent Type"
                  className="productorder__info__input__field"
                />
                <InputDiv
                  label="Order Date"
                  className="productorder__info__input__field"
                />
              </Col>
            </Row>

            <Button
              style={{
                width: "fit-content",
                backgroundColor: "#57C262",
                border: "none",

                alignSelf: "flex-end",
                marginRight: "5%",
                marginTop: "2rem",
              }}
            >
              Place Order
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
