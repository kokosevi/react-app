import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function About() {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        spacing={10}
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          alt="Remy Sharp"
          src="./images/sevi2.jpg"
          sx={{ width: 200, height: 200 }}
        />
        <Typography variant="h1" component="h2">
          Sevi
        </Typography>
      </Stack>
      <br /> <br />
      <Typography variant="h3" component="h2" align="center">
        interested in too many things <br /> and <br /> proud to be one hell of
        a looser
      </Typography>
    </React.Fragment>
  );
}

export default About;
