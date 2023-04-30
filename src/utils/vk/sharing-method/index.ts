import { showNotification } from '@mantine/notifications';
import bridge from '@vkontakte/vk-bridge';
import { APP_URL, SHARING_TEXT } from '../../constants';

// Поделиться ссылкой
export const shareLink = (link: string) => {
  bridge.send('VKWebAppShare', {
    link: link
  });
};

// Копирование в буфер
export const copyLink = () => {
  bridge
    .send('VKWebAppGetClientVersion')
    .then((result) => {
      console.log(result.platform);
      if (result.platform === 'web' || result.platform === 'mobile-web') {
        window.navigator.clipboard.writeText(APP_URL).then(
          () => {
            console.log('successfully set', APP_URL);
            showNotification({
              title: `Ссылка скопирована`,
              message: '',
              autoClose: 5_000,
              color: 'green'
            });
          },
          () => {
            console.log('write failed', APP_URL);
          }
        );
      } else {
        bridge.send('VKWebAppCopyText', { text: APP_URL });
        showNotification({
          title: `Ссылка скопирована`,
          message: '',
          autoClose: 5_000,
          color: 'green'
        });
      }
    })
    .catch((error) => {
      console.log('error', error);
    });
};

//  Поделиться в истории
export const sharingStory = async (link: string) => {
  return await bridge.send('VKWebAppShowStoryBox', {
    background_type: 'image',
    url: link,
    attachment: {
      text: 'go_to',
      type: 'url',
      url: APP_URL
    }
  });
};

//  Добавление репоста на стену пользователя
export const shareWall = (text: string, link: string) => {
  // e.preventDefault();

  const message = `
  ${text}
  ${SHARING_TEXT}
  `;

  bridge.send('VKWebAppShowWallPostBox', {
    message: message,
    attachments: link
  });
};
