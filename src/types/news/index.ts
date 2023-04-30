export type NewsItemType = {
  id: number;
  deleted?: boolean;
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  by: string;
  time: number;
  text?: string;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  parts?: number[];
  descendants?: number;
  rating?: number;
  comments?: number[];
  formatTime: string;
};

export type CommentType = {
  id: number;
  text: string;
  author: string;
  children?: CommentType[];
  childIds?: number[];
  isLoading?: boolean;
};
