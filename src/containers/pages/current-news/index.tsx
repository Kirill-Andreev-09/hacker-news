import { useEffect } from 'react';
import { Layout } from '../../layout';
import { NewsPage } from './components';
import { observer } from 'mobx-react';
import { useStores } from 'src/utils/hooks/useStores';
import { toJS } from 'mobx';

export const CurrentNews = observer(() => {
  const { UserStore } = useStores();

  useEffect(() => {
    console.log('CurrentNews UserStore.hashId', toJS(UserStore.hashId));

    UserStore.setHashId('');
  }, []);

  return (
    <Layout prevPage="/">
      <NewsPage />
    </Layout>
  );
});
