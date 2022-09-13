import React, { FC, ReactNode, useState } from 'react';
import { PreviewLayoutContainer, Slide } from '@popr/ui';
import AddIcon from '@mui/icons-material/Add';
import { GeneralIconButton } from '@popr/ui';

type PreviewLayout = {
  children?: ReactNode;
};

const PreviewLayout: FC<PreviewLayout> = () => {
  const exampleSlide = { header: 'header', main: 'some text', footer: 'footer' };
  const [slides, setSlides] = useState([exampleSlide]);

  const addSlide = () => {
    setSlides([...slides, exampleSlide]);
  };

  const showSlides = () => {
    return slides.map((slide, index) => {
      return <Slide key={index} header={slide.header} main={slide.header} footer={slide.footer} />;
    });
  };

  return (
    <PreviewLayoutContainer>
      <>
        {showSlides()}
        <GeneralIconButton onClick={addSlide}>
          <AddIcon />
        </GeneralIconButton>
      </>
    </PreviewLayoutContainer>
  );
};

export default PreviewLayout;
