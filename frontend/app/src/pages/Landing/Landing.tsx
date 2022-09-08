import React, { FC } from 'react';
import { StepperDrawer } from '@meethead/ui';
import { useIsSmallDevice } from 'hooks/useWindowSize/index';
import PreviewLayout from 'layouts/PreviewLayout';

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
