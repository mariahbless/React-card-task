import React from "react";

function Headers() {
  return (
    <header style={{ backgroundColor:"darkblue", color: "white", padding: "5px",marginLeft:"10px",textAlign:"center",fontSize:"larger" }}>
    <br/><br/><p> Elite jet Wash Bay And Garage </p>
    <p> 'Your wish is our command, walk in dirty! drive out smart'</p>

      {/* <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
          <li><a href="/" style={{ color: "white", textDecoration: "none" }}>Parking</a></li>
          <li><a href="/about" style={{ color: "white", textDecoration: "none" }}>Washing Bay</a></li>
          <li><a href="/contact" style={{ color: "white", textDecoration: "none" }}>Restaurant</a></li>
        </ul>
      </nav> */}
    </header>
  );
}

export { Headers } ;
