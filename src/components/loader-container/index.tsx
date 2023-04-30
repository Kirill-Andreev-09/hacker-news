import { Box, Loader } from '@mantine/core';
import { useStyles } from './styles';

export const LoaderContainer = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Loader />
    </Box>
  );
};
