import './App.css'
import Counter from './count';
import Team from './team';
import Users from './users';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  return (
    <>
     <h3>React core concepts 2</h3>
     <Team></Team>
     <Counter></Counter>
     <Users></Users>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>Click2</button>
    </>
  )
}

export default App
