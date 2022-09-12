import React, { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ContactCompanyList } from "./ContactCompanyList";
import { ContactCheckbox } from "./ContactCheckbox";
import { ResponseContactDTO } from "@popr-project/types";

export const ContactListItem: FC<{
  contact: ResponseContactDTO;
  index: number;
  checked: number[];
  onChange: any;
}> = ({ contact, index, checked, onChange }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const labelId = `checkbox-list-secondary-label-${contact.linkedInURL}`;

  return (
    <>
      <ListItem
        key={contact.linkedInURL}
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
            <Avatar
              alt={`Avatar n°${index + 1}`}
              src={contact.profilePictureS3Id}
            />
          </ListItemAvatar>
          <ListItemText id={labelId} primary={contact.name} />
        </ListItemButton>
      </ListItem>
      {open && (
        <ContactCompanyList
          companyName={contact.companyName}
          logoS3Id={contact.logoS3Id}
          companyPosition={contact.companyPosition}
          linkedInURL={contact.linkedInURL}
        />
      )}
    </>
  );
};
