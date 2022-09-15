import React, { FC } from "react";
import { Puller, DrawerOpenBox, DrawerClosedBox } from "./styles";
import { SwipeableDrawer, Box } from "@mui/material";

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
        <Puller variant="contained" onClick={toggleDrawer(true)} />
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
          <Puller variant="contained" onClick={toggleDrawer(false)} />
        </DrawerOpenBox>
        <Box p={3}>{children}</Box>
      </SwipeableDrawer>
    </>
  );
};
