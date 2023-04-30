import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    marginBottom: theme.spacing.sm,
    width: '100%'
  },

  timeIndicator: {
    '& .mantine-Indicator-indicator': {
      right: '40px'
    }
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: theme.spacing.sm,
    color: theme.white
  },

  rating: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    marginBottom: theme.spacing.xs
  }
}));
