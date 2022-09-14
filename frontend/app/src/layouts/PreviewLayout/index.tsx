import React, { FC, ReactNode } from 'react';
import { PreviewLayoutContainer } from '@popr/ui';

import { useTranslation } from 'react-i18next';

type PreviewLayout = {
  children?: ReactNode;
};

const PreviewLayout: FC<PreviewLayout> = () => {
  const { t } = useTranslation(['config', 'translations']);

  return (
    <PreviewLayoutContainer>
      <h1>{t('app.title')}</h1>
    </PreviewLayoutContainer>
  );
};

export default PreviewLayout;
