import React, { Component } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function PollShortWindow() {
  return (
    <div className="initiate_poll_container">
      <div className="text_container">
        <div className="text">What are you after in</div>
        <div className="text">
          <h1>LIFE?</h1>
        </div>

        <div className="button">
          <Link to="/PollShortSalient">
            <button
              //   onClick={initiatePoll}
              id="start_poll_basic_needs"
              className="btn_standart"
            >
              Find out
            </button>
          </Link>
        </div>
      </div>

      <div className="image_container">
        <img
          id="test"
          src="images/running_after.jpg"
          alt="runnergirl"
          className="container"
        />
      </div>
    </div>
  );
}

export default PollShortWindow;
