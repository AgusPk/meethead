import React, { FC } from "react";
import { Step, StepContent, StepLabel, Typography } from "@mui/material";
import { StepperButtons } from "./StepperButtons";
import { StepChildProps } from "./interfaces";

export const StepChild: FC<StepChildProps> = ({
  step,
  handleNext,
  handleBack,
  index,
  stepLength,
}) => {
  return (
    <>
      <StepLabel>{step.label}</StepLabel>
      <StepContent>
        <Typography>{step.description}</Typography>
        {step.content}
        <StepperButtons
          handleNext={handleNext}
          handleBack={handleBack}
          index={index}
          stepLength={stepLength}
        ></StepperButtons>
      </StepContent>
    </>
  );
};
