import React, { FC } from "react";
import { Puller, DrawerOpenBox, DrawerClosedBox } from "./styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export const SmallDeviceDrawer: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <DrawerClosedBox>
        <Puller onClick={toggleDrawer(true)} />
      </DrawerClosedBox>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <DrawerOpenBox>
          <Puller onClick={toggleDrawer(false)} />
        </DrawerOpenBox>
        {children}
      </SwipeableDrawer>
    </>
  );
};
