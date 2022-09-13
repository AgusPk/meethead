import React, { FC } from "react";
import { StyledIconButton } from "./styles";

export const GeneralIconButton: FC<{
  children: React.ReactNode;
  onClick: any;
}> = ({ children, onClick }) => {
  return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>;
};
