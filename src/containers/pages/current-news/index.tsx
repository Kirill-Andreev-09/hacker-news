import { Layout } from '../../layout';
import { NewsPage } from './components';

export const CurrentNews = () => {
  return (
    <Layout prevPage="/">
      <NewsPage />
    </Layout>
  );
};
