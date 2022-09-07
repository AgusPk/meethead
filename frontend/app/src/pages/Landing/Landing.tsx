import React, { FC } from 'react';
import { StepperDrawer } from '@popr/ui';
import { useIsSmallDevice } from 'hooks/useWindowSize/index';
import PreviewLayout from 'layouts/PreviewLayout';

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    content: (
      <>
        <h4>HOLAAA</h4>
        <h4>This is FOURTH test</h4>
        <h4>This is FOURTH test</h4>
      </>
    ),
  },
  {
    label: 'Create an ad group',
    description: 'An ad group contains one or more ads which target a shared set of keywords.',
    content: <h4>This is test</h4>,
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    content: <h4>This is a test</h4>,
  },
  {
    label: 'Create something',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    content: <h4>This another test</h4>,
  },
];

const Landing: FC = () => {
  const isSmallDevice = useIsSmallDevice();

  return (
    <>
      <StepperDrawer isSmallDevice={isSmallDevice}>
        <h2>drawer</h2>
      </StepperDrawer>
      <PreviewLayout />
    </>
  );
};

export default Landing;
