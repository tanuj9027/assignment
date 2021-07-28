import React from "react";
import { Table, ButtonGroup } from "react-bootstrap";
import Price from "./Price";
import Calendar from "./Calender";


// Loading all images in an array.

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../Assets", false, /\.(png|jpe?g|svg)$/)
);

// showing UI for single game campaigns and mapping data to a table rows.

function GameRows(props) {

  function daysCount(x) {
    return Math.floor(Math.abs(x) / (60 * 60 * 24 * 1000)).toString();
  }
 
  function dateFormat(date) {
    return " " + date.getUTCFullYear() + ", " + date.getUTCDate();
  }

  function monthInUtc(date) {
    let months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec",
    ];
    return months[date.getUTCMonth()];
  }

  let d = new Date();
  let milsec = d.getTime();
  if (props.data === null) {
    return <h3 className="text-center">Select a Compaign.</h3>;
  }

  return (
    <div>
      <Table
        responsive
        hover
        style={{
          color: "#57698a",
          backgroundColor: "white",
          border: "1px solid lightgrey",
          tableLayout: "auto",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f1f1f4" }}>
            <th>DATE</th>
            <th>CAMPAIGN</th>
            <th>VIEW</th>
            <th>ACTIONS </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((arr, idx) => (
            <tr key={idx}>
              <td style={{ fontSize: "0.95em" }}>
                {monthInUtc(new Date(parseInt(arr["createdOn"])))}
                {dateFormat(new Date(parseInt(arr["createdOn"])))}
                <br />
                <sub>
                  <i>
                    {daysCount(parseInt(arr["createdOn"]) - milsec)} days
                    {arr["createdOn"] - milsec >= 0 ? "ahead" : "ago"}
                  </i>
                </sub>
              </td>
              <td style={{ width: "24%" }}>
                <img
                  alt="game_url"
                  className="mr-3"
                  src={images[arr["image_url"]].default}
                  style={{ width: "3em", height: "3em", float: "left" }}
                />
                <div>
                  <p className="my-0">
                    <b> {arr["name"]} </b>
                  </p>
                  <sub> {arr["region"]} </sub>{" "}
                </div>
              </td>
              <td style={{ width: "19%" }}>
                <Price
                  item={{
                    name: arr["name"],
                    region: arr["region"],
                    price: arr["price"],
                    image: arr["image_url"],
                  }}
                />
              </td>
              <td style={{ width: "46%" }}>
                {" "}
                <ButtonGroup>
                  <img
                    alt="csv"
                    className="mr-3"
                    src={images["file.png"].default}
                    style={{ width: "2.2em", height: "2.2em", float: "left" }}
                  />
                  <p className="ml-1 mx-0 my-0"> CSV</p>
                  <img
                    alt="report"
                    className="ml-5"
                    src={images["statistics-report.png"].default}
                    style={{ width: "2.2em", height: "2.2em", float: "left" }}
                  />
                  <p className="ml-2 mx-0 my-0">Report</p>
                    <Calendar item={{ name: arr['name'], time: arr['createdOn'] }} updatedData={props.updatedData} />
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default GameRows;
