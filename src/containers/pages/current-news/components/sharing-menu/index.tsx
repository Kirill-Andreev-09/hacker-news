import { Menu } from '@mantine/core';
import { ReactNode } from 'react';
import { shareLink, shareWall } from 'src/utils/vk/sharing-method';
import { ArticleType } from '../../hooks/useCurrentNewsData';
import { formatDateUnix } from 'src/utils/date';
import { APP_URL } from 'src/utils/constants';

type Props = {
  children: ReactNode;
  data: ArticleType;
};

export const SharingMenu = ({ children, data }: Props) => {
  const newsText = `
Автор: ${data.author}
Время новости: ${formatDateUnix(data.date)}
Описание: ${data.title}
Новость: 
${data.text ?? ''}

${data.url ? `Источник: ${data.url}` : ''}
`;

  const link = `${APP_URL}#${data.id}`;

  const handleClick = (type: string) => {
    switch (type) {
      case 'wall':
        shareWall(newsText, link);
        break;
      case 'send':
        shareLink(link);
        break;
      default:
        break;
    }
  };

  return (
    <Menu>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={() => handleClick('wall')}>Поделиться на стене</Menu.Item>
        <Menu.Item onClick={() => handleClick('send')}>Отправить новость</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
