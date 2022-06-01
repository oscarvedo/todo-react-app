import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoProvider } from "./TodoContext";
import { TodoContext } from "./TodoContext";
import './App.css';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: false },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALA', completed: false },
// ]

function App() {
  return (
    <TodoProvider>
      <>
        <TodoCounter
        />
        <TodoSearch
        />
        <TodoContext.Consumer>
          {({ error, loading, searchedTodos, toggleTodo, deleteTodo }) => (
            <TodoList>
              {error ? <p>Erroooor, desesperate</p> : ''}
              {loading ? <p>Estamos cargando, no desesperes...</p> : ''}
              {(!loading && !searchedTodos.length) ? <p>Crea tu primer Todo</p> : ''}

              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onToggle={() => toggleTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          )}
        </TodoContext.Consumer>
        <CreateTodoButton />
      </>
    </TodoProvider>
  );
}

export default App;
