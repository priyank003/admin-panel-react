import React, { useEffect } from "react";
import "./App.css";

import MainHeader from "./shared/navigation/MainHeader";
import SideNav from "./shared/navigation/SideNav";
import Dashboard from "./shared/pages/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import Product from "./shared/pages/Product/Product";
import CreateAppointment from "./shared/pages/Appointment/CreateAppointment";
import BookAppointment from "./shared/pages/Appointment/BookAppointment";
import AddDoctor from "./shared/pages/Doctor/AddDoctor";
import DoctorList from "./shared/pages/Doctor/DoctorList";
import CreatePackage from "./shared/pages/Package/CreatePackage";
import ViewPackage from "./shared/pages/Package/ViewPackage";
import CreatePrescription from "./shared/pages/Prescription/CreatePrescription";
import PatientList from "./shared/pages/Patient/PatientList";
import AddSpecialOffer from "./shared/pages/AddSpecialOffer";
import Marketing from "./shared/pages/Marketing";
import AddBanner from "./shared/pages/AddBanner";
import OffCanvasExample from "./shared/navigation/SideNavOffCanvas";
import { useState } from "react";
function App() {
  const [showNav, setShowNav] = useState(false);
  const showSideNavHandler = () => {
    setShowNav(true);
  };
  const hideSideNavHandler = (bool) => {
    setShowNav(bool);
  };
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
    <div className="App">
      <MainHeader onClick={showSideNavHandler} />
      <div className="App__row">
        <OffCanvasExample show={showNav} onHide={hideSideNavHandler} />
        {width > 1475 && <SideNav />}

        {/* <PersistentDrawerLeft /> */}
        <Container
          fluid
          style={{
            marginTop: "10px",
            borderRadius: "10px",
            height: "88vh",
            overflowY: "auto",
          }}
          className="pages__container"
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/createappointment" element={<CreateAppointment />} />
            <Route path="/bookappointment" element={<BookAppointment />} />
            <Route path="/adddoctor" element={<AddDoctor />} />
            <Route path="/doctorlist" element={<DoctorList />} />
            <Route path="/createpackage" element={<CreatePackage />} />
            <Route path="/viewpackage" element={<ViewPackage />} />
            <Route
              path="/createprescription"
              element={<CreatePrescription />}
            />
            <Route path="/patientlist" element={<PatientList />} />
            <Route path="/addspecialoffer" element={<AddSpecialOffer />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/addbanner" element={<AddBanner />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
