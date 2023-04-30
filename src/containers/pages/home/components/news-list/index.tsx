import { Box, Loader, Text } from '@mantine/core';
import { NewsListItem } from '..';
import { useNavigate } from 'react-router-dom';
import { Fragment, useCallback } from 'react';
import { useStyles } from './styles';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHackerNewsInfiniteScroll } from '../../hooks/useHackerNewsQuery';
import React from 'react';
import { LoaderContainer } from 'src/components/loader-container';

export const NewsList = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useHackerNewsInfiniteScroll();

  const handleClickItem = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      const id = event.currentTarget.dataset.id;
      navigate(`/currentNews/${id}`);
    },
    [navigate]
  );

  if (isLoading) {
    return <LoaderContainer />;
  }

  if (isError) {
    return (
      <Box className={classes.container}>
        <Text weight={500} color="white">
          Ошибка при загрузке новостей
        </Text>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <InfiniteScroll
        dataLength={data?.pages.length ?? 0}
        next={fetchNextPage}
        hasMore={Boolean(hasNextPage)}
        className={classes.infiniteScroll}
        loader={
          <>
            {Boolean(data?.pages.length) && (
              <Box className={classes.infiniteScrollMoreData}>
                <Loader color="mainBlue.9" size="sm" />
              </Box>
            )}
          </>
        }
        height="calc(100vh - 110px)"
      >
        {data?.pages.map((newsItems, pageIndex) => (
          <Fragment key={`page-${pageIndex}`}>
            {newsItems.map((item) => (
              <NewsListItem key={item.id} {...item} onClickItem={handleClickItem} />
            ))}
          </Fragment>
        ))}
      </InfiniteScroll>
    </Box>
  );
};
