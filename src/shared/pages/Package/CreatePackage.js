import React from "react";
import { useFormik } from "formik";

import InputDiv from "../../components/Form/InputDiv";
import { Row, Button } from "react-bootstrap";
import "./CreatePackage.css";

export default function CreatePackage() {
  const formik = useFormik({
    initialValues: {
      package_name: "",
      package_short_description: "",
      package_full_description: "",
      package_type: "",
      package_composition: "",
      package_instruction: "",
      package_price: "",
    },
    onSubmit: async (values) => {
      await fetch("https://api.drpaul-clinic.com/package", {
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
      <div className="create__package__info">
        <div className="create__package__info__header">
          <p>Create Package</p>
        </div>
        <form>
          <div className="create__package__info__inputs">
            <div className="create__package__info__inputs__row">
              <InputDiv
                label="Package Name"
                className={"create__package__info__inputs__input"}
                name="package_name"
                onChange={formik.handleChange}
                value={formik.values.package_name}
              />
              <InputDiv
                label="Short Description"
                className={"create__package__info__inputs__input"}
                name="package_short_description"
                onChange={formik.handleChange}
                value={formik.values.package_short_description}
              />
              <InputDiv
                label=" Full Description"
                className={"create__package__info__inputs__input"}
                name="package_full_description"
                onChange={formik.handleChange}
                value={formik.values.package_full_description}
              />
            </div>
            <div className="create__package__info__inputs__row">
              <InputDiv
                label="Package Type "
                className={"create__package__info__inputs__input"}
                name="package_type"
                onChange={formik.handleChange}
                value={formik.values.package_type}
              />
              <InputDiv
                label="Composition"
                className={"create__package__info__inputs__input"}
                name="package_composition"
                onChange={formik.handleChange}
                value={formik.values.package_composition}
              />
              <InputDiv
                label="Instruction"
                className={"create__package__info__inputs__input"}
                name="package_instruction"
                onChange={formik.handleChange}
                value={formik.values.package_instruction}
              />
              <InputDiv
                label="Price"
                className={"create__package__info__inputs__input"}
                name="package_price"
                onChange={formik.handleChange}
                value={formik.values.package_price}
              />
            </div>
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
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
