import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PollStepper(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.activeStep}>
        {props.steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
