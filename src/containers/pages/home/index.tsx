import { Layout } from '../../layout';
import { NewsList, UpdateButton } from './components';

export const Home = () => {
  return (
    <Layout headerRightIcon={<UpdateButton />}>
      <NewsList />
    </Layout>
  );
};
