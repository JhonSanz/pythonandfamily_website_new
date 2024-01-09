import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import COLORS from '@/utils/colors';

const CustomSelect = styled(Select, {
  shouldForwardProp: (prop) => prop !== 'subject',
})(({ subject, theme }) => ({
  ...{
    color: "white",
    "& .Mui-focused": {
        color: "red",
    }
  }
}));

export default CustomSelect;
