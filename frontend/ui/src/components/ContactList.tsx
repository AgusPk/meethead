import React, { FC } from "react";
import List from "@mui/material/List";
import { ContactListItem } from "./ContactListItem";
import Typography from "@mui/material/Typography";

const contacts = [
  {
    id: "maria-de-los-angeles",
    name: "María de los Ángeles Portal",
    profilePicture:
      "https://media-exp1.licdn.com/dms/image/C4E03AQEtoVcL8kI8sw/profile-displayphoto-shrink_100_100/0/1617053829266?e=1667433600&v=beta&t=Jd1BrxeqAWpDP16H4Sj2_avspwMM028WHQO8W0Y2O4k",
    company: "NaNLABS",
    companyLogo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQEQpYbJwhTLPw/company-logo_100_100/0/1658182094225?e=1669852800&v=beta&t=C-9TRhzQRk8YuDWGJbwy8PfVqjFBmyvE4wWGnyi8F3U",
    position: "Full-Stack Developer",
  },
  {
    id: "rosariosantamarina",
    name: "Rosario Santa Marina",
    profilePicture:
      "https://media-exp1.licdn.com/dms/image/C4D03AQHW2Cuwbra6qA/profile-displayphoto-shrink_100_100/0/1610374777767?e=1667433600&v=beta&t=6XEKzBN-0GLObfDc1D2C-xSi_gLdKu-kEAFRnREGWrY",
    company: "NaNLABS",
    companyLogo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQEQpYbJwhTLPw/company-logo_100_100/0/1658182094225?e=1669852800&v=beta&t=C-9TRhzQRk8YuDWGJbwy8PfVqjFBmyvE4wWGnyi8F3U",
    position: "Sr. Software developer en NaNLABS",
  },
  {
    id: "agustin-perkins",
    name: "Agustin Perkins",
    profilePicture:
      "https://media-exp1.licdn.com/dms/image/C4D03AQGjxjJM3scOUw/profile-displayphoto-shrink_100_100/0/1575408719695?e=1667433600&v=beta&t=ffyUluaJ7xkiejp38Kk1smn2xKDuvlnzfrc8pct7dPw",
    company: "NaNLABS",
    companyLogo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQEQpYbJwhTLPw/company-logo_100_100/0/1658182094225?e=1669852800&v=beta&t=C-9TRhzQRk8YuDWGJbwy8PfVqjFBmyvE4wWGnyi8F3U",
    position: "Software Developer en NaNLABS",
  },
  {
    id: "sgshimojo",
    name: "Silvina Grace Shimojo",
    profilePicture:
      "https://media-exp1.licdn.com/dms/image/C4E03AQF0PFuxxBf9Qw/profile-displayphoto-shrink_100_100/0/1607540876685?e=1667433600&v=beta&t=G94KzLXXzQ0SE-r-sNliOcvq-aLD_q9WoMWr6dXLcm0",
    company: "NaNLABS",
    companyLogo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQEQpYbJwhTLPw/company-logo_100_100/0/1658182094225?e=1669852800&v=beta&t=C-9TRhzQRk8YuDWGJbwy8PfVqjFBmyvE4wWGnyi8F3U",
    position: "IT Project Manager at NaNLABS l CSM",
  },
  {
    id: "valeriacerrada",
    name: "Valeria Cerrada Cortes",
    profilePicture:
      "https://media-exp1.licdn.com/dms/image/C4D03AQF_ICEw0jDgog/profile-displayphoto-shrink_100_100/0/1644850367873?e=1667433600&v=beta&t=vmcCUBmN5aBuNQ9VTBu2wuTAAVWU7xzjPAjv87pxxsw",
    company: "NaNLABS",
    companyLogo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQEQpYbJwhTLPw/company-logo_100_100/0/1658182094225?e=1669852800&v=beta&t=C-9TRhzQRk8YuDWGJbwy8PfVqjFBmyvE4wWGnyi8F3U",
    position: "UX UI Designer",
  },
  {
    id: "pamela-contin-5357531ab",
    name: "Pamela Contin",
    profilePicture:
      "https://media-exp1.licdn.com/dms/image/C4D03AQETWJV95kV4hg/profile-displayphoto-shrink_100_100/0/1614781299830?e=1667433600&v=beta&t=HH31ip0WZDDtlZ0JuGc4VfdMBGgbUutI91kmRwCDNbM",
    company: "NaNLABS",
    companyLogo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQEQpYbJwhTLPw/company-logo_100_100/0/1658182094225?e=1669852800&v=beta&t=C-9TRhzQRk8YuDWGJbwy8PfVqjFBmyvE4wWGnyi8F3U",
    position: "Fullstack developer en NaNLABS",
  },
];

export const ContactList: FC = () => {
  const [checked, setChecked] = React.useState([1]);
  const haveAnyContacts = contacts.length !== 0;
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
        contacts.map((contact, index) => {
          return (
            <ContactListItem
              onChange={handleToggle}
              checked={checked}
              index={index}
              {...contact}
            />
          );
        })
      ) : (
        <Typography variant="h6">No contacts yet...</Typography>
      )}
    </List>
  );
};
