import { useEffect } from 'react';
import { Layout } from '../../layout';
import { NewsPage } from './components';

export const CurrentNews = () => {
  useEffect(() => {
    localStorage.setItem('newsId', '');
  }, []);

  return (
    <Layout prevPage="/">
      <NewsPage />
    </Layout>
  );
};
