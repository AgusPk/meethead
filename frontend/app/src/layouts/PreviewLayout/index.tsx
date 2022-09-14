import React, { FC, ReactNode, useState } from 'react';
import { PreviewLayoutContainer } from '@popr/ui';
import AddIcon from '@mui/icons-material/Add';
import { GeneralIconButton } from '@popr/ui';
import { Grid } from '@mui/material';
import SlideList from 'components/SlideList/SlideList';

type PreviewLayout = {
  children?: ReactNode;
};

const PreviewLayout: FC<PreviewLayout> = () => {
  const exampleSlide = { header: 'header', main: 'some text', footer: 'footer' };
  const [slides, setSlides] = useState([exampleSlide]);

  const addSlide = () => {
    setSlides([...slides, exampleSlide]);
  };

  return (
    <PreviewLayoutContainer>
      <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
        <SlideList slides={slides} />
        <Grid item>
          <GeneralIconButton onClick={addSlide}>
            <AddIcon />
          </GeneralIconButton>
        </Grid>
      </Grid>
    </PreviewLayoutContainer>
  );
};

export default PreviewLayout;
