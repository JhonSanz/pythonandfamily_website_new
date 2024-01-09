import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import COLORS from '@/utils/colors';
import { MATH } from '@/utils/const';

const CustomChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'subject',
})(({ subject, theme }) => ({
  ...{
    backgroundColor: subject === MATH ? COLORS.blue : COLORS.purple
  }
}));

export default CustomChip;
