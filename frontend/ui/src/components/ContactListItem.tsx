import React, { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";

export const ContactListItem: FC<{
  id: string;
  name: string;
  profilePicture: string;
  company: string;
  companyLogo: string;
  position: string;
  index: number;
  checked: number[];
  onChange: any;
}> = ({
  id,
  name,
  profilePicture,
  company,
  companyLogo,
  position,
  index,
  checked,
  onChange,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const labelId = `checkbox-list-secondary-label-${id}`;

  return (
    <>
      <ListItem
        key={id}
        secondaryAction={
          <Checkbox
            edge="end"
            onChange={onChange(index)}
            checked={checked.indexOf(index) !== -1}
            inputProps={{ "aria-labelledby": labelId }}
          />
        }
        disablePadding
      >
        <ListItemButton onClick={handleClick}>
          <ListItemAvatar>
            <Avatar alt={`Avatar n°${index + 1}`} src={profilePicture} />
          </ListItemAvatar>
          <ListItemText id={labelId} primary={name} />
        </ListItemButton>
      </ListItem>
      {open && (
        <List
          component="div"
          disablePadding
          sx={{
            width: "100%",
            maxWidth: 300,
            bgcolor: "background.paper",
            marginLeft: "15px",
          }}
        >
          <ListItem>
            <Avatar src={companyLogo} />
            <ListItemText primary={company} secondary={position} />
          </ListItem>
        </List>
      )}
    </>
  );
};
