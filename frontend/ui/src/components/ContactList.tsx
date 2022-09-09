import React, { FC } from "react";
import List from "@mui/material/List";
import { ContactListItem } from "./ContactListItem";
import Typography from "@mui/material/Typography";
import { ResponseContactDTO } from "@popr/types";

export const ContactList: FC<{ contacts: ResponseContactDTO[] }> = ({
  contacts,
}) => {
  const [checked, setChecked] = React.useState([1]);

  const haveAnyContacts = contacts?.length !== 0;
  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      dense
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {haveAnyContacts ? (
        contacts?.map((contact, index) => {
          return (
            <ContactListItem
              onChange={handleToggle}
              checked={checked}
              index={index}
              contact={contact}
            />
          );
        })
      ) : (
        <Typography variant="h6">No contacts yet...</Typography>
      )}
    </List>
  );
};
