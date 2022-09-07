import React, { FC } from "react";
import { Step, StepContent, StepLabel, Typography } from "@mui/material";
import { StepperButtons } from "./StepperButtons";

export const StepChild: FC<{
  step: {
    label: string;
    description: string;
    content: JSX.Element;
  };
  handleNext: () => void;
  handleBack: () => void;
  index: number;
  stepLength: number;
}> = ({ step, handleNext, handleBack, index, stepLength }) => {
  return (
    <>
      <StepLabel
        optional={
          index === 2 ? (
            <Typography variant="caption">Last step</Typography>
          ) : null
        }
      >
        {step.label}
      </StepLabel>
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
