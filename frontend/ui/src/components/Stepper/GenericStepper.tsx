import React, { FC } from "react";
import { Box, Step, Button, Paper, Typography } from "@mui/material";
import { StepChild } from "./StepChild";
import { StepProps } from "./interfaces";
import { StyledStepper } from "./styles";

export const GenericStepper: FC<{ steps: StepProps[] }> = ({ steps }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <StyledStepper
        activeStep={activeStep}
        orientation="vertical"
        connector={null}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepChild
              step={step}
              handleNext={handleNext}
              handleBack={handleBack}
              index={index}
              stepLength={steps.length}
            />
          </Step>
        ))}
      </StyledStepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};
