import '../Grid.css';
const Grid = (props) => {
  const { boards } = props;

    const grid = Object.keys(boards.positions).map(function(key, index) {

      const row = Object.keys(boards.positions[key]).map(function(key1, index1) {
        return (
          <td key={boards.type +index1 + 1}>{index1 + 1}</td>
        );
      });
      return (
        <tr >
          {row}
        </tr>
      );
    });

    return (
        <table key={boards.type}>
          {grid}
        </table>
    );


};

export default Grid;