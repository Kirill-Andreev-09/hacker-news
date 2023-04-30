import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  root: {
    height: `100%`,
    width: `100%`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '100%'
  },

  infiniteScroll: {
    width: 'calc(100vw - 60px)',
    paddingTop: theme.spacing.sm,
    paddingRight: theme.spacing.sm,

    '&::-webkit-scrollbar': {
      width: '8px',
      height: '10px'
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '8px',
      background: '#98A2B3'
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent'
    },

    scrollbarColor: '#98A2B3 transparent'
  },

  infiniteScrollMoreData: {
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
