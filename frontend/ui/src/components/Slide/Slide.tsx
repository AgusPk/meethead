import React, { FC } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ContainerCard } from "./styles";

export const Slide: FC<{
  header: string;
  main: string;
  footer: string;
}> = ({ header, main, footer }) => {
  return (
    <ContainerCard>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {header}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {main}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {footer}
        </Typography>
      </CardContent>
    </ContainerCard>
  );
};
