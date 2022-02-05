import React, { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { httpGetPackage } from "../../../hooks/requests";
import { htppGetData } from "../../../logic/api";
import "./ViewPackage.css";

export default function ViewPackage() {
  let PACKAGE_DATA = [];
  useEffect(async () => {
    PACKAGE_DATA = await htppGetData("package");

    console.log(PACKAGE_DATA);
  }, [htppGetData]);

  return (
    <Card
      style={{
        border: "none",
        overflowX: "auto",
        height: "100%",
      }}
      className="view__package__table"
    >
      <Card.Title
        style={{
          padding: "15px",
          paddingBottom: "0",
          alignSelf: "flex-start",
        }}
      >
        View Package
      </Card.Title>
      <Table
        borderless
        hover
        className="nowrap"
        size="sm"
        style={{ width: "100%" }}
        responsive
      >
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Package Name </th>
            <th>Short Description</th>

            <th> Full Description</th>
            <th>Package Type </th>
            <th>Composition</th>
            <th>Instruction</th>
            <th>Price</th>

            <th>Sale Price</th>
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
          </tr>{" "}
        </tbody>
      </Table>
    </Card>
  );
}
