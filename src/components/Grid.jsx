import '../Grid.css';
const Grid = (props) => {
  const { playerBoard } = props;
  const grid = Object.keys(playerBoard.positions).map(function(key, index) {

    const row = Object.keys(playerBoard.positions[key]).map(function(key1, index1) {
      return (
          <td key={index1+1}>{index1+1}</td>
      );
    })
    return (
      <tr key={index}>
        {row}
      </tr>
    );

  });

  return (
    <table className="grid">
      <tbody>
        {grid}
      </tbody>
    </table>

  );
};

export default Grid;