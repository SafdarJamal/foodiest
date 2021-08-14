import palette from '../palette';

const MuiTableRow = {
  root: {
    '&$selected': {
      backgroundColor: palette.background.default,
    },
    '&$hover': {
      '&:hover': {
        backgroundColor: palette.background.default,
      },
    },
  },
};

export default MuiTableRow;
