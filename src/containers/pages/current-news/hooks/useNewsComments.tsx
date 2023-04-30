import { useQuery, useQueryClient } from 'react-query';
import { getCurrentNewsComments } from 'src/api';
import { CommentType } from 'src/types/news';

type NewsData = {
  id: number;
  title: string;
  author: string;
  date: Date;
  url: string;
  commentCount: number;
  comments: CommentType[]; // добавляем свойство comments
};

export const useNewsComments = (newsId: number) => {
  const queryClient = useQueryClient();

  const {
    data: comments = [],
    isFetching,
    refetch
  } = useQuery<CommentType[]>(['comments', newsId], () => getCurrentNewsComments(newsId), {
    enabled: false
  });

  const refetchComments = async () => {
    await refetch();
    const newsData = queryClient.getQueryData<NewsData>(['news', newsId]);
    if (newsData) {
      const currentComments = newsData.comments;
      queryClient.setQueryData(['news', newsId], { ...newsData, comments: currentComments });
    }
  };

  return { comments, isFetching, refetchComments };
};
