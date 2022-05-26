import React from 'react';
import '../stylesheets/TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
  );
}

export { TodoCounter };