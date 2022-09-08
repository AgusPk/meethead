import React, { FC } from 'react';
import FullWidthLayout from 'layouts/FullWidth';
import { useTranslation } from 'react-i18next';
import { ContactList } from '@popr/ui';
import { StepperDrawer } from '@popr/ui';
import { getContacts } from 'services/contacts';
import { useQuery } from 'react-query';
import { useIsSmallDevice } from 'hooks/useWindowSize/index';

const Landing: FC = () => {
  const { t } = useTranslation(['config', 'translations']);
  const { data: contacts } = useQuery(['getContacts'], async () => await getContacts('63120fd98028831ecf43b444'));
  const isSmallDevice = useIsSmallDevice();

  return (
    <FullWidthLayout>
      <StepperDrawer isSmallDevice={isSmallDevice}>
        <h2>drawer</h2>
      </StepperDrawer>
      <h1>{t('app.title')}</h1>
      <ContactList contacts={contacts} />
    </FullWidthLayout>
  );
};

export default Landing;
