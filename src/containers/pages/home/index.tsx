import { useEffect } from 'react';
import { Layout } from '../../layout';
import { NewsList, UpdateButton } from './components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/containers/routes/constants';
import { observer } from 'mobx-react';
import { useStores } from 'src/utils/hooks/useStores';
import { toJS } from 'mobx';
import bridge from '@vkontakte/vk-bridge';

export const Home = observer(() => {
  const navigate = useNavigate();
  const { UserStore } = useStores();

  useEffect(() => {
    (async () => {
      const id = toJS(UserStore.hashId);
      const dataKeys = await bridge.send('VKWebAppStorageGet', { keys: ['newsId'] });
      const hashId = dataKeys?.keys?.find((item) => item.key === 'newsId')?.value;

      console.log('Home hashId', hashId);
      console.log('Home id', id);

      if (hashId) {
        navigate(`${ROUTES.currentNews.path}/${hashId}`);
      }
    })();
  }, []);

  return (
    <Layout headerRightIcon={<UpdateButton />}>
      <NewsList />
    </Layout>
  );
});
