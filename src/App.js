import React, {useState} from 'react';
import './App.css';
import 'fontsource-roboto';
import Todo from './Main/Todo.js';
import TodoForm from './Main/TodoForm.js';



function App() {

  const [todos, setTodos] = useState([
    { text: "Learn about React",
       isCompleted: false },
    { text: "Meet friend for lunch",
       isCompleted: false },
    { text: "Build really cool todo app",
       isCompleted: false }
  ]);

  return (
    <div className="App">
     <Todo/>
     <TodoForm/>
     <div className="todo-list">

      {todos.map((todo, index) => setTodos(
        <Todo
          key={index}
          index={index}
          todo={todo}
        
        />
      ))}
    </div>
    </div>
  );
}

export default App;
