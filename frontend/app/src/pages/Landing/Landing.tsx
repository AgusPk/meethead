import React, { FC } from 'react';
import PreviewLayout from 'layouts/PreviewLayout';
import TemplateDrawer from 'components/TemplateDrawer';

const Landing: FC = () => {
  return (
    <>
      <TemplateDrawer />
      <PreviewLayout />;
    </>
  );
};

export default Landing;
