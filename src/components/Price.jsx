import React from "react";
import { Button } from "react-bootstrap";
import price  from "../Assets/Price.png";

// Pricing Button.

function Price(props) {
  return (
    <span>
      <img
        className="mr-1"
        src={price}
        style={{
          width: "1.8em",
          height: "1.8em",
          float: "left",
          display: "inline",
        }}
        alt="price"
      />
      <Button
        variant="light"
        style={{ color: "#57698a", textDecoration: "none", fontSize: "0.95em" }} //modal window handling left
      >
        View Pricing
      </Button>
    </span>
  );
}

export default Price;
