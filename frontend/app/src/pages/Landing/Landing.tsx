import React, { FC } from 'react';
import FullWidthLayout from 'layouts/FullWidth';
import { useTranslation } from 'react-i18next';
import { ContactList } from '@meethead/ui';


const Landing: FC = () => {
  const { t } = useTranslation(['config', 'translations']);

  return (
    <FullWidthLayout>
      <h1>{t('app.title')}</h1>
      <ContactList />
    </FullWidthLayout>
  );
};

export default Landing;
