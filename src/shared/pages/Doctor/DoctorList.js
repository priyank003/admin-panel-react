import React from "react";
import "./DoctorList.css";
import { Card, Table } from "react-bootstrap";
export default function DoctorList() {
  return (
    <Card
      style={{ border: "none", overflowX: "auto", height: "100%" }}
      className="doctorlist__table"
    >
      <Card.Title
        style={{
          padding: "15px",
          paddingBottom: "0",
          alignSelf: "flex-start",
        }}
      >
        Doctor List
      </Card.Title>
      <Table hover className="nowrap" size="sm" responsive borderless>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th> Name</th>

            <th>Email Id</th>
            <th>Phone number</th>
            <th>Specialization</th>
            <th>Address</th>
            <th>City</th>

            <th>Online Date</th>
            <th>Online Time</th>
            <th>Offline Date</th>
            <th>Offline Time</th>
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
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>
          <tr>
            <td>DRP001</td>
            <td> Skin Care </td>
            <td>Indrajit Sikdar</td>
            <td>6289166961</td>
            <td>indrajit@gmail.com</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>
          <tr>
            <td>DRP001</td>
            <td> Skin Care </td>
            <td>Indrajit Sikdar</td>
            <td>6289166961</td>
            <td>indrajit@gmail.com</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>
          <tr>
            <td>DRP001</td>
            <td> Skin Care </td>
            <td>Indrajit Sikdar</td>
            <td>6289166961</td>
            <td>indrajit@gmail.com</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>
          <tr>
            <td>DRP001</td>
            <td> Skin Care </td>
            <td>Indrajit Sikdar</td>
            <td>6289166961</td>
            <td>indrajit@gmail.com</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>
          <tr>
            <td>DRP001</td>
            <td> Skin Care </td>
            <td>Indrajit Sikdar</td>
            <td>6289166961</td>
            <td>indrajit@gmail.com</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>{" "}
          <tr>
            <td>DRP001</td>
            <td> Skin Care </td>
            <td>Indrajit Sikdar</td>
            <td>6289166961</td>
            <td>indrajit@gmail.com</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>{" "}
        </tbody>
      </Table>
    </Card>
  );
}
