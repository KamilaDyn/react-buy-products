import { IconButton, styled } from '@mui/material';

const StyledIconButton = styled(IconButton)(
  ({ theme, expandedOpen, iscard, deletebtn }) => ({
    fontSize: theme.typography.h3.fontSize,
    ...(expandedOpen && { transform: 'rotate(180deg)' }),
    ...(iscard && {
      marginLeft: theme.spacing(0),
      width: '2.8rem',
    }),
    ...(deletebtn && {
      color: theme.palette.primary.main,
    }),
  })
);

export default StyledIconButton;
