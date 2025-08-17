import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div>
      Article Details
    </div>
  );
};

export default ArticleDetailsPage;
