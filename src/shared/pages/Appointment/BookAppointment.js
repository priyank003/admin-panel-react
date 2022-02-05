import React, { useEffect } from "react";
import { getData } from "../../../logic/api";
import { Container, Card, Table } from "react-bootstrap";
import "./BookAppointment.css";
export default function BookAppointment() {
  useEffect(() => {
    const fetchCarousel = async () => {
      const response = await fetch(`https://api.drpaul-clinic.com/appointment`);
      const responseData = await response.json();
    };
    fetchCarousel();
  }, []);

  return (
    <Card
      style={{
        overflowX: "auto",
        width: "100%",
        margin: "0",
      }}
      className="appointment__book__appointment__table"
    >
      <Card.Title
        style={{
          padding: "15px",
          paddingBottom: "0",
          alignSelf: "flex-start",
        }}
      >
        Book Appointment
      </Card.Title>
      <Table hover className="nowrap" borderless responsive>
        <thead>
          <tr>
            <th>Sl no </th>
            <th>Name </th>
            <th>Mobile Number </th>
            <th>Email</th>
            <th>Center</th>
            <th>Doctor Name</th>
            <th>Package</th>
            <th>Date</th>
            <th>Time</th>
            <th>Treatment</th>
            <th>Payment</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0001</td>
            <td>Kathryn Murphy</td>
            <td>91+ 6289166961 </td>
            <td>indrajit@gmail.com</td>
            <td>Saltlake</td>
            <td>Dr.Abhijit Paul</td>
            <td>Homepathy</td>
            <td>10.10.2021</td>
            <td>12.30P.M</td>
            <td>ABC</td>
            <td>DONE</td>
            <td>Online</td>
          </tr>
          <tr>
            <td>0001</td>
            <td>Kathryn Murphy</td>
            <td>91+ 6289166961 </td>
            <td>indrajit@gmail.com</td>
            <td>Saltlake</td>
            <td>Dr.Abhijit Paul</td>
            <td>Homepathy</td>
            <td>10.10.2021</td>
            <td>12.30P.M</td>
            <td>ABC</td>
            <td>DONE</td>
            <td>Online</td>
          </tr>
          <tr>
            <td>0001</td>
            <td>Kathryn Murphy</td>
            <td>91+ 6289166961 </td>
            <td>indrajit@gmail.com</td>
            <td>Saltlake</td>
            <td>Dr.Abhijit Paul</td>
            <td>Homepathy</td>
            <td>10.10.2021</td>
            <td>12.30P.M</td>
            <td>ABC</td>
            <td>DONE</td>
            <td>Online</td>
          </tr>
          <tr>
            <td>0001</td>
            <td>Kathryn Murphy</td>
            <td>91+ 6289166961 </td>
            <td>indrajit@gmail.com</td>
            <td>Saltlake</td>
            <td>Dr.Abhijit Paul</td>
            <td>Homepathy</td>
            <td>10.10.2021</td>
            <td>12.30P.M</td>
            <td>ABC</td>
            <td>DONE</td>
            <td>Online</td>
          </tr>
          <tr>
            <td>0001</td>
            <td>Kathryn Murphy</td>
            <td>91+ 6289166961 </td>
            <td>indrajit@gmail.com</td>
            <td>Saltlake</td>
            <td>Dr.Abhijit Paul</td>
            <td>Homepathy</td>
            <td>10.10.2021</td>
            <td>12.30P.M</td>
            <td>ABC</td>
            <td>DONE</td>
            <td>Online</td>
          </tr>{" "}
          <tr>
            <td>0001</td>
            <td>Kathryn Murphy</td>
            <td>91+ 6289166961 </td>
            <td>indrajit@gmail.com</td>
            <td>Saltlake</td>
            <td>Dr.Abhijit Paul</td>
            <td>Homepathy</td>
            <td>10.10.2021</td>
            <td>12.30P.M</td>
            <td>ABC</td>
            <td>DONE</td>
            <td>Online</td>
          </tr>{" "}
        </tbody>
      </Table>
    </Card>
  );
}
