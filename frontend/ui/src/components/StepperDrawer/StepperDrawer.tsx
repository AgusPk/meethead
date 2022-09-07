import React, { FC } from "react";
import { StyledDrawer } from "./styles";
import { SmallDeviceDrawer } from "./SmallDeviceDrawer";

export const StepperDrawer: FC<{
  children: React.ReactNode;
  isSmallDevice: boolean;
}> = ({ children, isSmallDevice }) => {
  return isSmallDevice ? (
    <SmallDeviceDrawer>{children}</SmallDeviceDrawer>
  ) : (
    <StyledDrawer variant="persistent" open>
      {children}
    </StyledDrawer>
  );
};
