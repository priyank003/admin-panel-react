import React from "react";
import "./PatientList.css";

import { Card, Table } from "react-bootstrap";
export default function PatientList() {
  return (
    <Card
      style={{
        border: "none",
        overflowX: "auto",
        height: "fit-content",
        width: "100%",
      }}
      className="patient__list__table"
    >
      <Card.Title
        style={{
          padding: "15px",
          paddingBottom: "0",
          alignSelf: "flex-start",
        }}
      >
        Patient List
      </Card.Title>
      <Table
        hover
        className="nowrap"
        size="sm"
        style={{ width: "100%" }}
        borderless
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>

            <th> Specialization</th>
            <th>Online Mode </th>
            <th>Time</th>
            <th>Offline Mode</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Indrajit Sikdar</td>
            <td>indrajit@gmail.com</td>
            <td>6289166961</td>
            <td> Skin Care </td>
            <td>Applied</td>

            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>
          <tr>
            <td>Indrajit Sikdar</td>
            <td>indrajit@gmail.com</td>
            <td>6289166961</td>
            <td> Skin Care </td>
            <td>Applied</td>

            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>
          <tr>
            <td>Indrajit Sikdar</td>
            <td>indrajit@gmail.com</td>
            <td>6289166961</td>
            <td> Skin Care </td>
            <td>Applied</td>

            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>
          <tr>
            <td>Indrajit Sikdar</td>
            <td>indrajit@gmail.com</td>
            <td>6289166961</td>
            <td> Skin Care </td>
            <td>Applied</td>

            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>
          <tr>
            <td>Indrajit Sikdar</td>
            <td>indrajit@gmail.com</td>
            <td>6289166961</td>
            <td> Skin Care </td>
            <td>Applied</td>

            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>
          <tr>
            <td>Indrajit Sikdar</td>
            <td>indrajit@gmail.com</td>
            <td>6289166961</td>
            <td> Skin Care </td>
            <td>Applied</td>

            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>{" "}
          <tr>
            <td>Indrajit Sikdar</td>
            <td>indrajit@gmail.com</td>
            <td>6289166961</td>
            <td> Skin Care </td>
            <td>Applied</td>

            <td>599.00</td>
            <td>599.00</td>
            <td>599.00</td>
          </tr>{" "}
        </tbody>
      </Table>
    </Card>
  );
}
