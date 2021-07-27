import React from "react";
import NavBar from "./NavBar";
// This this is the main body of UI

function Body() {
  return (
    <div>
      <div className="container mr-auto pl-5">
        <h1 style={{ color: "#2b416c" }}>
          <b>Manage Campaigns</b>
        </h1>
      </div>
      <br />
      <div className="container mr-auto pl-5">
        <NavBar/>
      </div>
    </div>
  );
}

export default Body;
