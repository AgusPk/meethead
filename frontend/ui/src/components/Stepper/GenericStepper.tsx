import React, { FC } from "react";
import Stepper from "@mui/material/Stepper";

const steps = [
  { label: "hola", content: <h4>this is a step content</h4> },
  { label: "este es el segundo", content: <h4>aaaa dsklfjsalkf ldkfj</h4> },
  { label: "este es el tercero", content: <h4>this is a step content</h4> },
];

export const GenericStepper: FC<{}> = ({}) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map((step, index) => (
        <IndividualStep step={step} />
      ))}
    </Stepper>
  );
};
