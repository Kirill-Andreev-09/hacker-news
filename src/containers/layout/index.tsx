import { Box } from '@mantine/core';
import { observer } from 'mobx-react';
import { FC, ReactNode } from 'react';
import { ArrowLeftIcon } from '../../assets/icons';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { useStyles } from './styles';
import { ROUTES } from '../routes/constants';
import { useLocation } from 'react-router-dom';

interface ICurrentTitle {
  [key: string]: string;
}

const currentTitle: ICurrentTitle = {
  [ROUTES.home.name]: 'Главная',
  [ROUTES.currentNews.name]: 'Новость'
};

interface ILayoutProps {
  children: ReactNode;
  prevPage?: string;
  headerRightIcon?: ReactNode;
}

export const Layout: FC<ILayoutProps> = observer(({ children, prevPage, headerRightIcon }) => {
  const location = useLocation();
  const { classes } = useStyles();

  const getTitlePage = (pathname: string) => {
    if (pathname.includes(ROUTES.home.name)) {
      return currentTitle[ROUTES.home.name];
    } else if (pathname.includes(ROUTES.currentNews.name)) {
      return currentTitle[ROUTES.currentNews.name];
    } else {
      return '';
    }
  };

  return (
    <Box className={classes.root}>
      <Header
        title={getTitlePage(location.pathname)}
        prevPage={prevPage}
        iconLeft={<ArrowLeftIcon fill="white" />}
        iconRight={headerRightIcon}
      />
      {children}

      <Footer />
    </Box>
  );
});
