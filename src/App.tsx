import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import bridge from '@vkontakte/vk-bridge';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { MainRoutes } from './containers/routes';
import { theme } from './theme/global-theme';
import { useStores } from './utils/hooks/useStores';
import { getUserPlatform } from './utils/vk/bridge-methods';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const hashId = document.location.hash.replace('#', '');

const App = observer(() => {
  const { UserStore } = useStores();

  const queryClient = new QueryClient();

  useEffect(() => {
    if (hashId) {
      UserStore.setHashId(hashId);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const platform = await getUserPlatform();
      UserStore.setPlatform(platform);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const user = await bridge.send('VKWebAppGetUserInfo');
      localStorage.setItem('userInfo', JSON.stringify(user));

      UserStore.setUserInfo(user);
    })();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <NotificationsProvider position="top-right" zIndex={1200}>
          <MainRoutes />
          <ReactQueryDevtools />
        </NotificationsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
});

export default App;
