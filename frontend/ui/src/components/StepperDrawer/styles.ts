import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

export const StyledDrawer = styled(Drawer)`
  display: { xs: 'none', sm: 'block' };
  width: 35rem;
  flexshrink: 0;
  & .MuiDrawer-paper {
    width: 35rem;
    border-right: none;
    background: #451D53;
  }
`;

export default StyledDrawer;
