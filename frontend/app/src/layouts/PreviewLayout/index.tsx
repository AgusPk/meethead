import React, { FC, ReactNode } from 'react';
import { PreviewLayoutContainer } from '@meethead/ui';
import { ContactList } from '@meethead/ui';
import { getContacts } from 'services/contacts';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

type PreviewLayout = {
  children?: ReactNode;
};

const PreviewLayout: FC<PreviewLayout> = () => {
  const { t } = useTranslation(['config', 'translations']);
  const { data: contacts } = useQuery(['getContacts'], async () => await getContacts('63120fd98028831ecf43b444'));

  return (
    <PreviewLayoutContainer>
      <h1>{t('app.title')}</h1>
      <ContactList contacts={contacts} />
    </PreviewLayoutContainer>
  );
};

export default PreviewLayout;
