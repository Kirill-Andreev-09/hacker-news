import { useEffect } from 'react';
import { Layout } from '../../layout';
import { NewsPage } from './components';

export const CurrentNews = () => {
  useEffect(() => {
    localStorage.setItem('refId', '');
  }, []);

  return (
    <Layout prevPage="/">
      <NewsPage />
    </Layout>
  );
};
