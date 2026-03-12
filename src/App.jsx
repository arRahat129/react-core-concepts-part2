import Counter from './Counter.jsx';
import Batsman from './Batsman.jsx';
import './App.css'

function App() {

  function handleClick(){
    alert("I am clicked.");
  }

  const handleClick3 = () => {
    alert("Clicked 3rd");
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h3>Get started</h3>

      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){alert ("clicked 2nd")}}>Click Me 2</button>

      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert("click 4th")}>Click Me 4</button>

      <button onClick={() => handleAdd5(7)}>Click Add 5</button>
    </>
  )
}

export default App
