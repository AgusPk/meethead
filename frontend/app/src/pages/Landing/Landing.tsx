import React, { FC } from 'react';
import FullWidthLayout from 'layouts/FullWidth';
import { useTranslation } from 'react-i18next';

const Landing: FC = () => {
  const { t } = useTranslation(['config', 'translations']);

  return (
    <FullWidthLayout>
      <h1>{t('app.title')}</h1>
    </FullWidthLayout>
  );
};

export default Landing;
