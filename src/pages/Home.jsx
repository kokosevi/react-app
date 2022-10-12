import React from "react";
import PollWindow from "../components/PollWindow";
import Button from "@mui/material/Button";

function Home() {
  return (
    <React.Fragment>
      <PollWindow />
      <Button href="/JungTheory">Jung Theory</Button>
    </React.Fragment>
  );
}

export default Home;
