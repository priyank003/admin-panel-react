import React, { useState, useEffect } from "react";
import "./MainHeader.css";
import userImg from "../../assets/image.png";
import { Navbar } from "react-bootstrap";
import useWindowDimensions from "../logic/WindowWidth";
export default function MainHeader(props) {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { width } = useWindowDimensions();

  const hamMenuhandler = () => {
    props.onClick(true);
  };
  return (
    <div className="mainheader">
      <div className="mainheader__container">
        <div className="mainheader__ham__menu" onClick={hamMenuhandler}>
          <i class="fas fa-bars"></i>
        </div>
        <div className="mainheader__user">
          <div className="mainheader__user__img">
            <img src={userImg} alt="user_img" />
          </div>
          <div className="mainheader__user__name">
            <h3>Dr.Abhijit Paul</h3>
          </div>
        </div>
        <div className="mainheader__nav">
          {width >= 550 && (
            <div className="mainheader__search">
              <div className="mainheader__search__icon">
                <i class="fas fa-search"></i>
              </div>
              <div className="mainheader__search__input">
                <input placeholder="Quick search" />
              </div>
            </div>
          )}

          <div className="mainheader__notification">
            <i class="fas fa-bell"></i>
          </div>
        </div>
      </div>
      {width < 550 && (
        <div className="mainheader__search">
          <div className="mainheader__search__icon">
            <i class="fas fa-search"></i>
          </div>
          <div className="mainheader__search__input">
            <input placeholder="Quick search" />
          </div>
        </div>
      )}
    </div>
  );
}
