import React from 'react';
import '../stylesheets/TodoItem.css';
import Icon from '@mdi/react';
import {mdiDelete} from '@mdi/js';
import {mdiCheckBold} from '@mdi/js';

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed ? 'TodoItem--completed' : ''}`}>
      <Icon className="Icon Icon-delete"
            path={mdiDelete}
            size={1}
      >
      </Icon>
      <p className={`TodoItem-p ${props.completed ? 'TodoItem-p--completed' : ''}`}>
        {props.text}
      </p>
      <Icon className={`Icon Icon-check ${props.completed ? 'Icon-check--active' : ''}`}
            path={mdiCheckBold}
            size={1}
      >
      </Icon>
    </li>
  );
}

export {TodoItem};