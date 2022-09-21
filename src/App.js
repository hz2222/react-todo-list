import './App.css';
import {useState} from "react";

function AddTodo({onAddTodo}) {

  const [newTodos, setNewTodos] = useState("");

  return (
    <div className='input-div'>
      <input type="text" value={newTodos} onChange={e=>setNewTodos(e.target.value)}/>
      <button className='add' onClick={() => {
        onAddTodo(newTodos);
        setNewTodos("");
      }}>Add todo
      </button>
    </div>
 )}

function Todo({todo, onDelete}) {
  return(
    <div className='todos'>
      <button className='delete' onClick={() => {
        onDelete(todo.id);
      }
      }>Delete</button>
      {todo.name}
    </div>
  )
} 

function App() {

  const [todos, setTodos] = useState([
    {id: 1, name:"shopping"},
    {id: 2, name:"cooking"},
    {id: 3, name:"go to the gym"}
  ]);
  
  
  return (
    <div className="App">
      <h1>Todo list</h1>
      {todos.map(e => {
        return <Todo todo={e} onDelete={id=>{
          setTodos(todos.filter(f=>f.id !== id));
        }
      } />
      })}
      <AddTodo onAddTodo={(newTodosname) => {
        setTodos([...todos, {
          id: `${Math.random()}`.substr(2),
          name: newTodosname
        }
      ]);
      }} />
    </div>
  );
}

export default App;
