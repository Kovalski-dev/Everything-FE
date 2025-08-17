import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div>
      Article
    </div>
  );
};

export default ArticlesPage;
