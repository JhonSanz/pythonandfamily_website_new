import COLORS from '@/utils/colors';

const ListConsiderations = ({ data }) => {
  return (
    <div style={{ overflowX: "scroll", }}>
      <table style={{ border: '1px dotted gray', width: "100%" }}>
        <thead></thead>
        <tbody>
          {
            data.map((row, index) => (
              <tr key={index} style={{
                backgroundColor: index % 2 === 0 ? COLORS.lightGray : 'white',
                paddingTop: 2,
              }}>
                <td style={{ width: 20 }}>{index + 1}</td>
                <td>{row}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListConsiderations;
