import { Badge, Box, Button, Card, Indicator, Text } from '@mantine/core';

import { NewsItemType } from 'src/types/news';
import { useStyles } from './styles';
import { IconStar } from '@tabler/icons';

type Props = NewsItemType & {
  onClickItem?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
};

export const NewsListItem = ({
  title,
  text,
  by,
  formatTime,
  comments,
  rating,
  id,
  onClickItem
}: Props) => {
  const { classes } = useStyles();

  return (
    <Box>
      <Indicator className={classes.timeIndicator} color="dark" label={formatTime} size={16}>
        <Card className={classes.card} shadow="sm" radius="md" withBorder>
          <Box className={classes.rating}>
            <Text color="white" mr={4}>
              {rating}
            </Text>

            <IconStar color="white" width={16} />
          </Box>

          <Box mb="sm">
            <Box className={classes.title}>
              <Text>{title}</Text>
              {Boolean(comments?.length) && <Text>Комментарии: {comments?.length}</Text>}
            </Box>

            <Badge color="dark" variant="filled">
              {by}
            </Badge>
          </Box>

          <Text size="sm" color="white">
            {text}
          </Text>

          <Button data-id={id} color="dark" fullWidth mt="md" radius="md" onClick={onClickItem}>
            Открыть
          </Button>
        </Card>
      </Indicator>
    </Box>
  );
};
