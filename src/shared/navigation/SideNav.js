import React, { useState, useEffect } from "react";
import "./SideNav.css";
import { NavLink, Link } from "react-router-dom";
import { Dropdown, DropdownButton, Offcanvas } from "react-bootstrap";
export default function SideNav() {
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

  return (
    <div className="sidenav">
      <div className="sidenav__container">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active__navlink" : "")}
        >
          <div className="sidenav__link">
            <div className="sidenav__link-icon">
              <i class="fas fa-columns"></i>
            </div>

            <h3>Dashboard</h3>
          </div>
        </NavLink>

        <div className="sidenav__link">
          <Dropdown
            className="d-inline mx-2"
            style={{
              width: "100%",
              margin: "0",
              padding: "0",
            }}
          >
            <Dropdown.Toggle
              id="dropdown-autoclose-true"
              className="sidenav__link__dropdown__toggle"
              style={{ width: "100%", padding: "0" }}
            >
              <div className="sidenav__link-icon">
                <i class="fas fa-user-friends"></i>
              </div>

              <h3>Appointment</h3>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/createappointment">Create Appointment</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/bookappointment">Book Appointment</Link>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <Link to="/totalappointment">Total Appointment</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <NavLink
          to="/patientlist"
          className={({ isActive }) => (isActive ? "active__navlink" : "")}
        >
          <div className="sidenav__link">
            <div className="sidenav__link-icon">
              <i class="fas fa-clipboard-list"></i>
            </div>

            <h3>Patient List</h3>
          </div>
        </NavLink>
        {/* <NavLink
          to="/patient registration"
          className={({ isActive }) => (isActive ? "active__navlink" : "")}
        >
          <div className="sidenav__link">
            <div className="sidenav__link-icon"></div>

            <h3>Patient Registration</h3>
          </div>
        </NavLink> */}
        <NavLink
          to="/Appointment"
          className={({ isActive }) => (isActive ? "active__navlink" : "")}
        ></NavLink>

        <div className="sidenav__link">
          <Dropdown
            className="d-inline mx-2"
            style={{
              width: "100%",
              margin: "0",
              padding: "0",
            }}
          >
            <Dropdown.Toggle
              id="dropdown-autoclose-true"
              className="sidenav__link__dropdown__toggle"
              style={{ width: "100%", padding: "0" }}
            >
              <div className="sidenav__link-icon">
                <i class="fas fa-calendar-check"></i>
              </div>

              <h3>Package</h3>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/createpackage">Create Package</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/viewpackage">View Package</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <NavLink
          to="/createprescription"
          className={({ isActive }) => (isActive ? "active__navlink" : "")}
        >
          <div className="sidenav__link">
            <div className="sidenav__link-icon">
              <i class="fas fa-hourglass-start"></i>
            </div>

            <h3>Create Prescription</h3>
          </div>
        </NavLink>
        <NavLink to="/product">
          <div className="sidenav__link">
            <div className="sidenav__link-icon">
              <i class="fas fa-comments"></i>
            </div>

            <h3>Product</h3>
          </div>
        </NavLink>

        <div className="sidenav__link">
          <Dropdown
            className="d-inline mx-2"
            style={{
              width: "100%",
              margin: "0",
              padding: "0",
            }}
          >
            <Dropdown.Toggle
              id="dropdown-autoclose-true"
              className="sidenav__link__dropdown__toggle"
              style={{ width: "100%", padding: "0" }}
            >
              <div className="sidenav__link-icon">
                <i class="fas fa-user-friends"></i>
              </div>

              <h3>Doctor</h3>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/adddoctor">Add Doctor</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/doctorlist">Doctor List</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <NavLink
          to="/administration"
          className={({ isActive }) => (isActive ? "active__navlink" : "")}
        >
          <div className="sidenav__link">
            <div className="sidenav__link-icon">
              <i class="fas fa-user-shield"></i>
            </div>

            <h3>Administration</h3>
          </div>
        </NavLink>
        <NavLink
          to="/addbanner"
          className={({ isActive }) => (isActive ? "active__navlink" : "")}
        >
          <div className="sidenav__link">
            <div className="sidenav__link-icon">
              <i class="far fa-plus-square"></i>
            </div>

            <h3>Add Banner</h3>
          </div>
        </NavLink>
        <NavLink
          to="/addspecialoffer"
          className={({ isActive }) => (isActive ? "active__navlink" : "")}
        >
          <div className="sidenav__link">
            <div className="sidenav__link-icon">
              <i class="fas fa-user-tag"></i>
            </div>

            <h3>Add Special offer</h3>
          </div>
        </NavLink>
        <NavLink
          to="/marketing"
          className={({ isActive }) => (isActive ? "active__navlink" : "")}
        >
          <div className="sidenav__link">
            <div className="sidenav__link-icon">
              <i class="fas fa-ad"></i>
            </div>

            <h3>Marketing</h3>
          </div>
        </NavLink>
        <NavLink
          to="/customersupport"
          className={({ isActive }) => (isActive ? "active__navlink" : "")}
        >
          <div className="sidenav__link">
            <div className="sidenav__link-icon">
              <i class="fas fa-headset"></i>
            </div>

            <h3>Customer Support</h3>
          </div>
        </NavLink>
        <NavLink
          to="/payments&bills"
          className={({ isActive }) => (isActive ? "active__navlink" : "")}
        >
          <div className="sidenav__link">
            <div className="sidenav__link-icon">
              <i class="fas fa-file-invoice-dollar"></i>
            </div>

            <h3>Payments & Bill</h3>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
