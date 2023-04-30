import { ActionIcon } from '@mantine/core';
import { IconRefresh } from '@tabler/icons';
import { useHackerNewsInfiniteScroll } from '../../hooks/useHackerNewsQuery';

export const UpdateButton = () => {
  const { refetch } = useHackerNewsInfiniteScroll(0, true);

  const handleRefresh = async () => {
    refetch();
  };

  return (
    <ActionIcon variant="transparent" onClick={handleRefresh}>
      <IconRefresh color="white" />
    </ActionIcon>
  );
};
