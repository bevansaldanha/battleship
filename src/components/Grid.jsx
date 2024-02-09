import '../Grid.css';
const Grid = (props) => {
  const { playerBoard } = props;
  const arr = []
  for (let items of Object.keys(playerBoard.positions) ){
    let x = items.split('');
    x.length === 3 ? x = 10 : x = x.pop();

  }
  const createGrid = Object.keys(playerBoard.positions).map(function(key, index) {
    
  });

  const grid = Object.keys(playerBoard.positions).map(function(key, index) {
    // let x = key.split('');
    // x.length === 3 ? x = 10 : x = x.pop();
    const row = Object.keys(playerBoard.positions[key]).map(function(key1, index1) {
      return (
          <td key={index1}>{index1}</td>
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