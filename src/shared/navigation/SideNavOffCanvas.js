import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import SideNav from "./SideNav";
export default function OffCanvasExample(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    props.onHide(false);
  };

  return (
    <>
      <Offcanvas show={props.show} onHide={handleClose} {...props}>
        <Offcanvas.Header
          style={{ display: "flex", justifyContent: "flex-end" }}
          closeButton
        >
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: "0", overflowX: "hidden" }}>
          <SideNav />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
