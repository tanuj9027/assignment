import React, { useState } from "react";
import data from "./InputData";
import NavBarManager from "./NavBarManager";
import "../App.css";


// NavBar compaigns (Upcoming, Live, past) 

function NavBar(props) {
  const [active, setActive] = useState("upcoming");

  // Set 
  function handleClick(event) {
    setActive(event.target.title);
  }

  const btnStyle = {
    color: "#82a523",
    borderBottom: "4px solid #82a523",
    fontWeight: "bold",
  };

  const dt = new Date(props.date).getTime();
  const updated = data.body
    .map((val) => {
      if (val["name"] === props.param) val["createdOn"] = dt;
      return val;
    })
    .filter(Boolean);

  return (
    <div> 
      <button
       className="Nav pl-1 pr-2 py-2 "
        onClick={handleClick}
        title="upcoming"
        style={active === "upcoming" ? btnStyle : null}
      >
        Upcoming Compaign
      </button>
      <button
        className="Nav pl-3 pr-2 py-2"
        onClick={handleClick}
        title="live"
        style={active === "live" ? btnStyle : null}
      
      >
        Live Compaign
      </button>
      <button
        className="Nav pl-3 pr-2 py-2"
        onClick={handleClick}
        title="past"
        style={active === "past" ? btnStyle : null}
      >
        Past Campaign
      </button>
      <br />
      <br />
      <NavBarManager data={updated} activeState={active} />
    </div>
  );
}

export default NavBar;
