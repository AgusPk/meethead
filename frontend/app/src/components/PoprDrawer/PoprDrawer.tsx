import React, { FC } from 'react';
import { StepperDrawer, GenericStepper } from '@popr/ui';
import { useIsSmallDevice } from 'hooks/useWindowSize/index';
import { ContactList } from '@popr/ui';
import { getContacts } from 'services/contacts';
import { useQuery } from 'react-query';
import Typography from '@mui/material/Typography';

const PoprDrawer: FC = () => {
  const isSmallDevice = useIsSmallDevice();
  const { data: contacts } = useQuery(['getContacts'], async () => await getContacts('63120fd98028831ecf43b444'));

  const steps = [
    {
      label: 'Choose a template',
      description: '',
      content: <h3>Here will be the templates</h3>,
    },
    {
      label: 'Select recipients',
      description: "For each invitation that you create, you can control how much you're willing to spend.",
      content: <ContactList contacts={contacts} />,
    },
    {
      label: 'Make my poprs',
      description: '',
      content: <h3>Here will be the poprs</h3>,
    },
  ];

  return (
    <StepperDrawer isSmallDevice={isSmallDevice}>
      <Typography variant="h5">Create your popr</Typography>
      <GenericStepper steps={steps} />
    </StepperDrawer>
  );
};

export default PoprDrawer;
