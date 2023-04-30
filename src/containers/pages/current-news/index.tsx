import { useEffect } from 'react';
import { Layout } from '../../layout';
import { NewsPage } from './components';
import { observer } from 'mobx-react';
import { useStores } from 'src/utils/hooks/useStores';

export const CurrentNews = observer(() => {
  const { UserStore } = useStores();

  useEffect(() => {
    localStorage.setItem('newsId', '');
    UserStore.setHashId('');
  }, []);

  return (
    <Layout prevPage="/">
      <NewsPage />
    </Layout>
  );
});
