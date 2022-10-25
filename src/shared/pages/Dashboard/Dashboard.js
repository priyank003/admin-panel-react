import React from "react";
import "./Dashboard.css";
import graph_img from "../../../assets/Screenshot 2022-01-11 221549.png";
import { Card, Container, Table, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Container style={{ width: "100%" }} fluid>
        <Row
          style={{
            padding: "0",
            justifyContent: "space-between",
          }}
        >
          {/* <Col lg={4} md={12} className="dashboard__company__card">
            <Card style={{}}>
              <Card.Body className="dashboard__company__card__body">
                <Card.Title>Company Sale</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Weekly Data
                </Card.Subtitle>
                <Card.Img
                  variant="top"
                  src={graph_img}
                  style={{
                    height: "240px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </Card.Body>
            </Card>
          </Col> */}
          <Col
            lg={7}
            mg={8}
            sm={8}
            className="dashboard__product__order__table"
          >
            <Card
              style={{
                border: "none",
                overflow: "auto",
                height: "100%",
                width: "100%",
              }}
            >
              <Card.Title
                style={{
                  padding: "10px",
                  paddingBottom: "0",
                  alignSelf: "flex-start",
                }}
              >
                Product Order
              </Card.Title>
              <Table hover className="nowrap" size="sm" responsive borderless>
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th> Name</th>
                    <th>Phone number</th>
                    <th>Email Id</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>{" "}
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>{" "}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "5px",
            padding: "0",

            justifyContent: "space-between",
          }}
        >
          <Col className="dashboard__new__lead__table">
            <Card
              style={{
                height: "100%",
                overflow: "auto",
                padding: "0",
                margin: "0",
              }}
            >
              <Card.Title
                style={{
                  padding: "10px 10px",

                  alignSelf: "flex-start",
                  margin: "0",
                }}
              >
                New Lead
              </Card.Title>
              <Table
                hover
                className="nowrap"
                size="sm"
                responsive="lg"
                style={{ margin: "0" }}
                borderless
              >
                <thead>
                  <tr>
                    <th>Patient Name </th>
                    <th>Mobile Number </th>
                    <th>Treatment </th>
                    <th>Time </th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kathryn Murphy</td>
                    <td> 91+ 6289166961 </td>
                    <td>Skin</td>
                    <td>12.30P.M</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>Kathryn Murphy</td>
                    <td> 91+ 6289166961 </td>
                    <td>Skin</td>
                    <td>12.30P.M</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>Kathryn Murphy</td>
                    <td> 91+ 6289166961 </td>
                    <td>Skin</td>
                    <td>12.30P.M</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>Kathryn Murphy</td>
                    <td> 91+ 6289166961 </td>
                    <td>Skin</td>
                    <td>12.30P.M</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>Kathryn Murphy</td>
                    <td> 91+ 6289166961 </td>
                    <td>Skin</td>
                    <td>12.30P.M</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>Kathryn Murphy</td>
                    <td> 91+ 6289166961 </td>
                    <td>Skin</td>
                    <td>12.30P.M</td>
                    <td>Pending</td>
                  </tr>{" "}
                  <tr>
                    <td>Kathryn Murphy</td>
                    <td> 91+ 6289166961 </td>
                    <td>Skin</td>
                    <td>12.30P.M</td>
                    <td>Pending</td>
                  </tr>{" "}
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col className="dashboard__book__appointment__table">
            <Card
              style={{
                border: "none",
                overflow: "auto",
                height: "100%",
              }}
            >
              <Card.Title
                style={{
                  padding: "10px",
                  paddingBottom: "0",
                  alignSelf: "flex-start",
                }}
              >
                Book Appointment
              </Card.Title>
              <Table borderless hover className="nowrap" size="sm" responsive>
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th> Name</th>
                    <th>Phone number</th>
                    <th>Email Id</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>{" "}
                  <tr>
                    <td>DRP001</td>
                    <td> Skin Care </td>
                    <td>Indrajit Sikdar</td>
                    <td>6289166961</td>
                    <td>indrajit@gmail.com</td>
                    <td>599.00</td>
                  </tr>{" "}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
