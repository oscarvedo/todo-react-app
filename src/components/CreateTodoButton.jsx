import React from 'react';
import '../stylesheets/CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className='CreateTodoButton'
      onClick={() => onClickButton('Aquí va el modal')}
    >
      +
    </button>
  );
}
export { CreateTodoButton };