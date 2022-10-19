import './App.css';
import { Button, Card, CardActions, CardContent, Grid, Paper, TextField, Typography } from '@mui/material'
import {useState} from "react";
import { Container } from '@mui/system';

function AddTodo({onAddTodo}) {

  const [newTodos, setNewTodos] = useState("");

  return (
  <Grid item xs="6">
    <Paper style={{padding:15}}>
      <TextField fullWidth label="New todo" type="text" value={newTodos} onChange={e=>setNewTodos(e.target.value)}/>
      <br/>
      <br/>
      <Button fullWidth variant='contained' className='add' onClick={() => {
        onAddTodo(newTodos);
        setNewTodos("");
      }}>Add todo
      </Button>
    </Paper>
  </Grid>    
 )}

function Todo({todo, onDelete}) {
  return( <Grid item xs="6">
    <Card>
      <CardContent>
        <Typography variant='h4'>
          {todo.name}
        </Typography>
      </CardContent>
      <CardActions>
      <Button fullWidth variant='contained' color='error' className='delete' onClick={() => {
        onDelete(todo.id);
        }
        }>Delete</Button>
      </CardActions>
    </Card>
    </Grid>
  )
} 

function App() {

  const [todos, setTodos] = useState([
    {id: 1, name:"shopping"},
    {id: 2, name:"cooking"},
    {id: 3, name:"go to the gym"}
  ]);
  
  
  return (
    <Container maxWidth={"md"}>
      <h1>Todo list</h1>
      <Grid container spacing={2}>
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
      </Grid>
    </Container>
  );
}

export default App;
