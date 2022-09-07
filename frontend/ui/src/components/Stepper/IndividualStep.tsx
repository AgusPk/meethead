import React, { FC } from "react";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { StepperButtons } from "./StepperButtons";
import Typography from "@mui/material/Typography";

export const IndividualStep: FC<{
  children: React.ReactNode;
  label: string;
  description: string;
  handleNext: () => void;
  handleBack: () => void;
  index: number;
  stepLength: number;
}> = ({
  children,
  label,
  description,
  handleNext,
  handleBack,
  index,
  stepLength,
}) => {
  return (
    <Step key={label}>
      <StepLabel
        optional={
          index === 2 ? (
            <Typography variant="caption">Last step</Typography>
          ) : null
        }
      >
        {label}
      </StepLabel>
      <StepContent>
        <Typography>{description}</Typography>
        {children}
        <StepperButtons
          handleNext={handleNext}
          handleBack={handleBack}
          index={index}
          stepLength={stepLength}
        ></StepperButtons>
      </StepContent>
    </Step>
  );
};
