import axios from 'axios';
import { BASE_URL } from './constants';
import { CommentType, NewsItemType } from 'src/types/news';

export const getNewsIds = async () => {
  return await axios.get<number[]>(`${BASE_URL}/newstories.json?print=pretty`);
};

export const getNewsItems = async (newsIds: number[]): Promise<NewsItemType[]> => {
  return await Promise.all(
    newsIds.map(async (id) => {
      const newsResponse = await axios.get<any>(`${BASE_URL}/item/${id}.json?print=pretty`);
      const newsData = newsResponse.data;

      const commentsResponse = await axios.get<any>(`${BASE_URL}/item/${id}.json?print=pretty`);
      const commentsData = commentsResponse.data;
      const comments = commentsData.kids || [];

      const rating = newsData.score || 0;

      return {
        ...newsData,
        comments,
        rating
      };
    })
  );
};

export const getCurrentNewsComments = async (newsId: number, parentCommentId?: number) => {
  const response = await axios.get(`${BASE_URL}/item/${parentCommentId || newsId}.json`);
  const { kids } = response.data;

  if (!kids) {
    return [];
  }

  const comments: CommentType[] = [];

  for (const commentId of kids) {
    const commentResponse = await axios.get(`${BASE_URL}/item/${commentId}.json`);
    const { id, text, by, kids: childIds } = commentResponse.data;

    if (!id || !text || !by) {
      continue;
    }

    const comment: CommentType = { id, text, author: by };

    if (childIds && childIds.length > 0) {
      comment.childIds = childIds;
    }

    comments.push(comment);
  }

  return comments;
};

export const getNewsInfo = async (id: number) => {
  return await axios.get(`${BASE_URL}/item/${id}.json`);
};
