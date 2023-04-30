import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  root: {
    height: `calc(100vh - 110px)`,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '60px',
    padding: 0,
    background: 'linear-gradient(180deg, #0d1116,#0d1116,#7e0234,#0d1116)'
  }
}));
