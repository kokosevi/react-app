import React, { Component } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Nav() {
  return (
    <React.Fragment>
      <nav className="nav">
        <Link to="/" className="site-title">
          <img
            src="./images/Hand.jpg"
            alt="naffin"
            width={60}
            height={60}
            style={{ marginRight: "20px" }}
          />
          About-Self
        </Link>
        <ul>
          <li>
            <Link to="/JungTheory">About C.G.Jung Theory</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <hr
        style={{
          background: "black",
          color: "black",
          borderColor: "black",
          height: "3px",
        }}
      />
    </React.Fragment>
  );
}

export default Nav;

// <React.Fragment>
//     <img src="/images/Hand.jpg" alt="naffin" />

//     <h1>Hello World</h1>
//     <h1>never again</h1>

// </React.Fragment>
