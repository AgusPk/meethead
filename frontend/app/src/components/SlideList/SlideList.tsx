import React, { FC } from 'react';
import { Slide } from '@popr/ui';
import { Grid, Typography } from '@mui/material';
import { CreateSlideDTO } from '@popr/types';

interface SlideListProps {
  slides: CreateSlideDTO[];
}

const SlideList: FC<SlideListProps> = ({ slides }) => {
  return (
    <>
      {slides?.map((slide, index) => (
        <Grid item key={index}>
          <Typography>{`Slide ${index}`} </Typography>
          <Slide header={slide.header} main={slide.main} footer={slide.footer} />
        </Grid>
      ))}
    </>
  );
};

export default SlideList;
