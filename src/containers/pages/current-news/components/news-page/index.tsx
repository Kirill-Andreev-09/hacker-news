import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCurrentNewsData } from '../../hooks/useCurrentNewsData';
import { CommentTree } from '..';
import { useStyles } from './styles';
import { Anchor, Box, Button, Text, Title } from '@mantine/core';
import { ScrollContainer } from 'src/components/scroll-container';
import { LoaderContainer } from 'src/components/loader-container';
import { useNewsComments } from '../../hooks/useNewsComments';
import { SharingMenu } from '../sharing-menu';
import { TextWithHtmlTags } from 'src/components/text-with-html-tags';
import { observer } from 'mobx-react';
import { useStores } from 'src/utils/hooks/useStores';

type RouteParams = {
  id: string;
};

export const NewsPage = observer(() => {
  const { UserStore } = useStores();

  const { classes } = useStyles();
  const { id } = useParams<RouteParams>();

  const { data: article, isLoading, isError } = useCurrentNewsData(Number(id));

  const { comments, isFetching, refetchComments } = useNewsComments(Number(id));

  const handleRefreshCommentsClick = async () => {
    await refetchComments();
  };

  console.log('UserStore', UserStore.userInfo);

  useEffect(() => {
    refetchComments();
  }, []);

  if (isLoading) {
    return <LoaderContainer />;
  }

  if (isError) {
    return <div>Error: Failed to load article</div>;
  }

  return (
    <Box className={classes.container}>
      <ScrollContainer>
        <>
          {article && (
            <>
              <Title order={1} color="white" mb={30} mt={30} lh={1.2}>
                {article.title}
              </Title>

              <Text color="white">Автор: {article.author}</Text>
              <Text color="white">Дата: {new Date(article.date * 1000).toLocaleDateString()}</Text>
              <Text color="white">
                Источник:{' '}
                <Anchor href={article.url} target="_blank">
                  ссылка
                </Anchor>
              </Text>

              <Text color="white">Кол-во комментариев: {comments.length}</Text>

              {UserStore.userInfo ? (
                <SharingMenu data={article}>
                  <Button style={{ marginBottom: '10px' }}>Поделиться</Button>
                </SharingMenu>
              ) : (
                <></>
              )}

              {Boolean(comments.length) && (
                <>
                  <Button
                    onClick={handleRefreshCommentsClick}
                    style={{ marginBottom: '10px', marginLeft: UserStore.userInfo ? '10px' : '' }}
                  >
                    {isFetching ? 'Обновление...' : 'Обновить комментарии'}
                  </Button>
                </>
              )}

              <Text color="white">
                <TextWithHtmlTags text={article.text ?? ''} />
              </Text>

              {isFetching ? <LoaderContainer /> : <CommentTree comments={comments} />}
            </>
          )}
        </>
      </ScrollContainer>
    </Box>
  );
});
