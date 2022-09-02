import React, { FC } from "react";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export const ContactCompanyList: FC<{
  companyName: string;
  logoS3Id: string;
  companyPosition: string;
  linkedInURL: string;
}> = ({ companyName, logoS3Id, companyPosition, linkedInURL }) => {
  return (
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
        <Avatar src={logoS3Id} />
        <ListItemText primary={companyName} secondary={companyPosition} />
      </ListItem>
    </List>
  );
};
