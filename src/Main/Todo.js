import React from 'react';

 const Todo = ({ todo, index, completeTodo }) => 

         <div className="todo"
         style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>

         {todo.text}
        
         <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
         </div>

         </div>;
   

export default Todo;