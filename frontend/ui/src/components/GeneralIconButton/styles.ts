import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  width: 3.5rem;
  height: 3.5rem;

  background: #451d53;
  color: white;

  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12);
  border-radius: 28px;

  flex: none;
  order: 0;
  flex-grow: 0;

  &:hover {
    background-color: #c5b9ca;
  }
`;
