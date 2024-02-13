import '../Input.css';
import { useState } from 'react';
import { Player } from './Game';


function Input(props) {
  const {name, setName, player, playerName} = props
  const [word, setWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    setName(word)
    console.log(name);
    playerName(name)
  }
  return (
    !name && <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Name:
        <input type="text" value={word} onChange={(event) => setWord(event.target.value)}  />
      </label>
      <input type="submit" value="Submit" />

    </form>
    
  );
}
export default Input;