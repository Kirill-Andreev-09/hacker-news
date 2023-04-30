import { useInfiniteQuery } from 'react-query';
import { getNewsIds, getNewsItems } from 'src/api';
import { NewsItemType } from 'src/types/news';
import { formatDateUnix } from 'src/utils/date';

const PAGE_SIZE = 10;

export const useHackerNewsInfiniteScroll = (initialPage = 0, reset = false) => {
  const fetchNews = async ({ pageParam = initialPage }) => {
    let newsIds = [];

    if (reset) {
      const response = await getNewsIds();
      newsIds = response.data.slice(0, PAGE_SIZE);
    } else {
      const response = await getNewsIds();
      const startIndex = pageParam * PAGE_SIZE;
      const endIndex = startIndex + PAGE_SIZE;
      newsIds = response.data.slice(startIndex, endIndex);
    }

    const newsItems = await getNewsItems(newsIds);

    return newsItems.map((item) => ({ ...item, formatTime: formatDateUnix(item.time) }));
  };

  return useInfiniteQuery<NewsItemType[], number>({
    queryKey: ['hackerNews', initialPage],
    queryFn: fetchNews,
    getNextPageParam: (_, pages) => pages.length,
    staleTime: 60 * 1000,
    refetchInterval: 60 * 1000
  });
};
