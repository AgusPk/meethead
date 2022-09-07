import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

export const StyledDrawer = styled(Drawer)`
  flexshrink: 0;
  & .MuiDrawer-paper {
    width: 33.6rem;
    border-right: none;
    background: white;
  }
`;

export const Puller = styled(Button)`
  width: 1.875rem;
  height: 0.375rem;
  background-color: #451d53;
  border-radius: 3rem;
  left: calc(50% - 30px);
  &:hover {
    background-color: #8c29af;
  }
`;

export const DrawerOpenBox = styled(Box)`
  height: 3rem;
  top: -100px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  visibility: visible;
  right: 0;
  left: 0;
`;

export const DrawerClosedBox = styled(Box)`
  height: 3rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  visibility: visible;
  right: 0;
  left: 0;
  position: absolute;
  bottom: 0;
`;