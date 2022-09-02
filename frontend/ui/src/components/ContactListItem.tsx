import React, { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ContactCompanyList } from "./ContactCompanyList";
import { ContactCheckbox } from "./ContactCheckbox";

export const ContactListItem: FC<{
  name: string;
  profilePictureS3Id: string;
  companyName: string;
  logoS3Id: string;
  companyPosition: string;
  linkedInURL: string;
  index: number;
  checked: number[];
  onChange: any;
}> = ({
  name,
  profilePictureS3Id,
  companyName,
  logoS3Id,
  companyPosition,
  linkedInURL,
  index,
  checked,
  onChange,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const labelId = `checkbox-list-secondary-label-${linkedInURL}`;

  return (
    <>
      <ListItem
        key={linkedInURL}
        secondaryAction={
          <ContactCheckbox
            index={index}
            checked={checked}
            onChange={onChange}
            labelId={labelId}
          />
        }
        disablePadding
      >
        <ListItemButton onClick={handleClick}>
          <ListItemAvatar>
            <Avatar alt={`Avatar n°${index + 1}`} src={profilePictureS3Id} />
          </ListItemAvatar>
          <ListItemText id={labelId} primary={name} />
        </ListItemButton>
      </ListItem>
      {open && (
        <ContactCompanyList
          companyName={companyName}
          logoS3Id={logoS3Id}
          companyPosition={companyPosition}
          linkedInURL={linkedInURL}
        />
      )}
    </>
  );
};
