import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../layout';
import { NewsList, UpdateButton } from './components';
import { ROUTES } from 'src/containers/routes/constants';

const hashId = document.location.hash.replace('#', '');

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (hashId) {
      navigate(`${ROUTES.currentNews.path}/${hashId}`);
    }
  }, []);

  return (
    <Layout headerRightIcon={<UpdateButton />}>
      <NewsList />
    </Layout>
  );
};
