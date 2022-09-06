import React, { FC } from "react";
import { StyledDrawer } from "./styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export const StepperDrawer: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setMobileOpen(newOpen);
  };

  return (
    <>
      <SwipeableDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={60}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        {children}
      </SwipeableDrawer>
      <StyledDrawer
        variant="persistent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        {children}
      </StyledDrawer>
    </>
  );
};
