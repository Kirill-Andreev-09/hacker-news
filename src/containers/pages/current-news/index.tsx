import { useEffect } from 'react';
import { Layout } from '../../layout';
import { NewsPage } from './components';
import { observer } from 'mobx-react';
import { useStores } from 'src/utils/hooks/useStores';
import { toJS } from 'mobx';
import bridge from '@vkontakte/vk-bridge';

export const CurrentNews = observer(() => {
  const { UserStore } = useStores();

  useEffect(() => {
    (async () => {
      console.log('CurrentNews UserStore.hashId', toJS(UserStore.hashId));

      await bridge.send('VKWebAppStorageSet', { key: 'newsId', value: '' });

      // UserStore.setHashId('');
    })();
  }, []);

  return (
    <Layout prevPage="/">
      <NewsPage />
    </Layout>
  );
});
