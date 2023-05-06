import React from "react";
import PollWindow from "../components/PollWindow";
import PollShortWindow from "../components/PollShortWindow";
import ImageComponent from "../components/ImageComponent";
import Button from "@mui/material/Button";

function Home() {
  return (
    <React.Fragment>
      <ImageComponent imageUrl="images/Gesamtmodel.png" altText="Gesamtmodel" />
      {/* <PollShortWindow /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <PollWindow />
      <Button href="/JungTheory">Jung Theory</Button>
    </React.Fragment>
  );
}

export default Home;
