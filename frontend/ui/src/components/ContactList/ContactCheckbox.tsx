import React, { FC } from "react";
import Checkbox from "@mui/material/Checkbox";

export const ContactCheckbox: FC<{
  checked: number[];
  index: number;
  labelId: string;
  onChange: any;
}> = ({ checked, index, labelId, onChange }) => {
  return (
    <Checkbox
      edge="end"
      onChange={onChange(index)}
      checked={checked.indexOf(index) !== -1}
      inputProps={{ "aria-labelledby": labelId }}
    />
  );
};
