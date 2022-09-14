import React, { FC } from 'react';
import PreviewLayout from 'layouts/PreviewLayout';
import PoprDrawer from 'components/PoprDrawer';

const Landing: FC = () => {
  return (
    <>
      <PoprDrawer />
      <PreviewLayout />
    </>
  );
};

export default Landing;
