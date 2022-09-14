import React, { FC } from 'react';
import { StepperDrawer, GenericStepper } from '@popr/ui';
import { useIsSmallDevice } from 'hooks/useWindowSize/index';
import { ContactList } from '@popr/ui';
import { getContacts } from 'services/contacts';
import { useQuery } from 'react-query';

const TemplateDrawer: FC = () => {
  const isSmallDevice = useIsSmallDevice();
  const { data: contacts } = useQuery(['getContacts'], async () => await getContacts('63120fd98028831ecf43b444'));

  const steps = [
    {
      label: 'Select recipients',
      description: "For each invitation that you create, you can control how much you're willing to spend.",
      content: <ContactList contacts={contacts} />,
    },
    {
      label: 'Select recipients',
      description: "For each invitation that you create, you can control how much you're willing to spend.",
      content: <ContactList contacts={contacts} />,
    },
  ];

  return (
    <StepperDrawer isSmallDevice={isSmallDevice}>
      <GenericStepper steps={steps} />
    </StepperDrawer>
  );
};

export default TemplateDrawer;
