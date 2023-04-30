import { useEffect, useState } from 'react';
import { getNewsIds, getNewsItems } from 'src/api';
import { NewsItemType } from 'src/types/news';
import { formatDateUnix } from 'src/utils/date';

export const useHackerNews = (): {
  news: NewsItemType[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  updateNews: () => void;
} => {
  const [news, setNews] = useState<NewsItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await getNewsIds();

      const newsIds = response.data.slice(0, 100);

      const newsItems = await getNewsItems(newsIds);

      const data = newsItems.map((item) => ({ ...item, formatTime: formatDateUnix(item.time) }));

      setNews(data);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  const updateNews = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    await fetchNews();
  };

  return {
    news,
    isLoading,
    isSuccess,
    isError,
    updateNews
  };
};
