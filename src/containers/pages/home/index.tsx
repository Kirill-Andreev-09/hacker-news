import { useEffect } from 'react';
import { Layout } from '../../layout';
import { NewsList, UpdateButton } from './components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/containers/routes/constants';
import { observer } from 'mobx-react';
import { useStores } from 'src/utils/hooks/useStores';
import { toJS } from 'mobx';

export const Home = observer(() => {
  const navigate = useNavigate();
  const { UserStore } = useStores();

  useEffect(() => {
    const id = toJS(UserStore.hashId);

    console.log('Home id', id);
    console.log('Home UserStore.hashId', UserStore.hashId);

    if (UserStore.hashId) {
      navigate(`${ROUTES.currentNews.path}/${id}`);
      UserStore.setHashId('');
    }
  }, []);

  return (
    <Layout headerRightIcon={<UpdateButton />}>
      <NewsList />
    </Layout>
  );
});
