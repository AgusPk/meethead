import React, { FC } from "react";
import { PreviewLayoutBox } from "./styles";

export const PreviewLayoutContainer: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <PreviewLayoutBox>{children}</PreviewLayoutBox>;
};
