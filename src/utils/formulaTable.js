import COLORS from '@/utils/colors';
import Latex from 'react-latex-next'

const FormulaTable = ({
  data, enableScroll = false
}) => {
  return (
    <div style={
      enableScroll ? {
        overflowX: "scroll", backgroundColor: COLORS.lightGray2,
        paddingTop: "15px", paddingLeft: "10px"
      } : {}
    }>
      <table>
        <thead>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr key={item}>
                <td><Latex>{item}</Latex></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default FormulaTable;
