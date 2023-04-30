import { useEffect } from 'react';
import { Layout } from '../../layout';
import { NewsList, UpdateButton } from './components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/containers/routes/constants';
import { observer } from 'mobx-react';
import { useStores } from 'src/utils/hooks/useStores';

export const Home = observer(() => {
  const navigate = useNavigate();
  const { UserStore } = useStores();

  useEffect(() => {
    // const newsId = localStorage.getItem('newsId');

    // if (newsId) {
    //   navigate(`${ROUTES.currentNews.path}/${newsId}`);
    //   localStorage.setItem('newsId', '');
    // } else if (UserStore.hashId) {
    //   navigate(`${ROUTES.currentNews.path}/${UserStore.hashId}`);
    //   UserStore.setHashId('');
    // }

    if (UserStore.hashId) {
      navigate(`${ROUTES.currentNews.path}/${UserStore.hashId}`);
      UserStore.setHashId('');
    }
  }, []);

  return (
    <Layout headerRightIcon={<UpdateButton />}>
      <NewsList />
    </Layout>
  );
});
