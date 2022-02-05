import React from "react";
import { Container, Card, Table } from "react-bootstrap";
import "./Marketing.css";
const NotifyInput = () => {
  return (
    <div className="notify__input__div">
      <input />
      <button>Send</button>
    </div>
  );
};

export default function Marketing() {
  return (
    <Container>
      <Card
        style={{ border: "none", overflow: "auto", height: "100%" }}
        className="marketing__table"
      >
        <Card.Title
          style={{
            padding: "15px",
            paddingBottom: "0",
            alignSelf: "flex-start",
          }}
        >
          Marketing
        </Card.Title>
        <Table hover className="nowrap" size="sm" borderless>
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

              <th>Treatment</th>
              <th>Push Notifications</th>
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
              <td>
                <NotifyInput />
              </td>
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
              <td>
                <NotifyInput />
              </td>
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
              <td>
                <NotifyInput />
              </td>
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
              <td>
                <NotifyInput />
              </td>
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
              <td>
                <NotifyInput />
              </td>
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
              <td>
                <NotifyInput />
              </td>
            </tr>{" "}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}
