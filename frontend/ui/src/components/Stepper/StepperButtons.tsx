import React, { FC } from "react";
import { Button, Box } from "@mui/material";

export const StepperButtons: FC<{
  handleNext: () => void;
  handleBack: () => void;
  index: number;
  stepLength: number;
}> = ({ handleNext, handleBack, index, stepLength }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <div>
        <Button
          disabled={index === 0}
          onClick={handleBack}
          sx={{ mt: 1, mr: 1 }}
        >
          Back
        </Button>
        <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
          {index === stepLength - 1 ? "Save" : "Continue"}
        </Button>
      </div>
    </Box>
  );
};