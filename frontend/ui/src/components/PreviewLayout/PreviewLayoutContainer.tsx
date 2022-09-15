import { Box, Container } from "@mui/material";
import React, { FC } from "react";
import { PreviewLayoutBox } from "./styles";

export const PreviewLayoutContainer: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <PreviewLayoutBox>
      <Container>{children}</Container>
    </PreviewLayoutBox>
  );
};
