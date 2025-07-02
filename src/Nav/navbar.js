import React from "react";

function Headers() {
  return (
    <header style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>
    <br/><br/><p> my nav bars</p>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
          <li><a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
          <li><a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
          <li><a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export { Headers } ;
