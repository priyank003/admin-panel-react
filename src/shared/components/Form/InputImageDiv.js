import React, { useState } from "react";
import "./InputImageDiv.css";
import sampleImg from "../../../assets/222186.jpg";
export default function InputImageDiv(props) {
  const [shareImg, setShareImg] = useState("");
  const ImageChangeHandler = (e) => {
    const image = e.target.files[0];
    console.log(image);
    // console.log(e);
    // console.log(e.target.value);

    if (image === " " || image === undefined) {
      alert(`not an image , thr file is a ${typeof image}`);
      return;
    }
    setShareImg(image);
  };
  const removeImageHandler = () => {
    setShareImg("");
  };
  console.log(shareImg);

  return (
    <div className={`input__image__div ${props.className}`}>
      <h3 className="input__image__header">
        {" "}
        <label htmlFor={props.label} style={{ cursor: "pointer" }}>
          {props.label}{" "}
        </label>
      </h3>

      <div className="input__image__div__wrapper">
        {shareImg ? (
          <div className="input__image">
            <img src={URL.createObjectURL(shareImg)} alt="" />
          </div>
        ) : (
          <label htmlFor={props.label} style={{ cursor: "pointer" }}>
            <div className="input__image__content">
              <div className="input__image__content__icon">
                <i class="fas fa-cloud-upload-alt"></i>
              </div>
              <p>No files chosen yet! </p>
            </div>
          </label>
        )}

        <div className="input__image__cancel__btn">
          <i class="fas fa-times-circle" onClick={removeImageHandler}></i>
        </div>
        {/* <div className="input__image__file__name">File name here</div> */}
      </div>
      <div className="input__image__file">
        <input
          type="file"
          id={props.label}
          hidden
          onChange={ImageChangeHandler}
          accept="image/gif, image/png, image/png, image/jpg"
        />
        {/* <label htmlFor="input_file">Choose a file</label> */}
      </div>
    </div>
  );
}
