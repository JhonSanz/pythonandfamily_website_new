import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import COLORS from '@/utils/colors';

const CustomToolbar = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== 'subject',
})(({ subject, theme }) => ({
  ...{
    backgroundColor: subject === "Math" ? COLORS.blue : COLORS.purple
  }
}));

export default CustomToolbar;
