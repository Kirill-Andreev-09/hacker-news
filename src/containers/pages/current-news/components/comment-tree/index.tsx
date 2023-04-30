import { Button, Loader, Text } from '@mantine/core';
import { useState } from 'react';
import { getCurrentNewsComments } from 'src/api';
import { TextWithHtmlTags } from 'src/components/text-with-html-tags';
import { CommentType } from 'src/types/news';

export const CommentTree = ({ comments }: { comments: CommentType[] }) => {
  const [nestedCommentsVisible, setNestedCommentsVisible] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleToggleNestedCommentsClick = async (comment: CommentType) => {
    if (!comment.children && !comment.isLoading) {
      comment.isLoading = true;
      const childComments = await getCurrentNewsComments(comment.id);
      comment.children = childComments;
      comment.childIds = childComments.map((c) => c.id);
      comment.isLoading = false;
    }

    setNestedCommentsVisible((prevState) => ({
      ...prevState,
      [comment.id]: !prevState[comment.id]
    }));
  };

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Text color="white" fw={600}>
            Автор: {comment.author}:
          </Text>
          <Text color="white">
            <TextWithHtmlTags text={comment.text} />
          </Text>

          {comment.childIds && (
            <>
              <Button
                color="dark"
                mb="md"
                radius="md"
                onClick={() => handleToggleNestedCommentsClick(comment)}
              >
                {comment.isLoading ? (
                  <Loader size="xs" style={{ marginRight: '0.5rem' }} />
                ) : nestedCommentsVisible[comment.id] ? (
                  'Скрыть ответы'
                ) : (
                  'Показать ответы'
                )}
              </Button>
              {nestedCommentsVisible[comment.id] && (
                <CommentTree comments={comment.children || []} />
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
