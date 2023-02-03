import { Box, styled } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme, iscardopen }) => ({
  width: '100%',
  ...(iscardopen && {
    maxWidth: 'calc(100% - 380px)',
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
  }),
}));
