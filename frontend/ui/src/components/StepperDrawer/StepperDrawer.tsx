import React, { FC } from "react";
import { LargeDeviceDrawer } from "./styles";
import { SmallDeviceDrawer } from "./SmallDeviceDrawer";

export const StepperDrawer: FC<{
  children: React.ReactNode;
  isSmallDevice: boolean;
}> = ({ children, isSmallDevice }) => {
  return isSmallDevice ? (
    <SmallDeviceDrawer>{children}</SmallDeviceDrawer>
  ) : (
    <LargeDeviceDrawer variant="persistent" open>
      {children}
    </LargeDeviceDrawer>
  );
};
