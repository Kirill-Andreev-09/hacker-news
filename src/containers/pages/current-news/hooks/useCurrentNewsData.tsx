import { useQuery } from 'react-query';
import { getNewsInfo } from 'src/api';

export type ArticleType = {
  id: number;
  title: string;
  url: string;
  author: string;
  date: number;
  text?: string;
};

const getArticle = async (id: number): Promise<ArticleType> => {
  const response = await getNewsInfo(id);
  const { id: articleId, title, url, by: author, time: date, text } = response.data;

  return {
    id: articleId,
    title,
    url,
    author,
    date,
    text
  };
};

export const useCurrentNewsData = (id: number) => {
  return useQuery<ArticleType>(['article', id], () => getArticle(id));
};
