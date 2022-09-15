import React, { FC } from 'react';
import { StepperDrawer, GenericStepper } from '@popr/ui';
import { useIsSmallDevice } from 'hooks/useWindowSize/index';
import Typography from '@mui/material/Typography';

const TemplateDrawer: FC = () => {
  const isSmallDevice = useIsSmallDevice();

  const steps = [
    {
      label: 'Template name',
      description: '',
      content: <h3>Here will be an input</h3>,
    },
    {
      label: 'Choose a layout',
      description: '',
      content: <h3>Here will be the layouts</h3>,
    },
    {
      label: 'Add slides',
      description: "For each invitation that you create, you can control how much you're willing to spend.",
      content: <h3>Here will be the slides</h3>,
    },
    {
      label: 'Add a signature message',
      description: "For each invitation that you create, you can control how much you're willing to spend.",
      content: <h3>Here will be an input</h3>,
    },
  ];

  return (
    <StepperDrawer isSmallDevice={isSmallDevice}>
      <Typography variant="h5">Create your first template</Typography>
      <GenericStepper steps={steps} />
    </StepperDrawer>
  );
};

export default TemplateDrawer;
