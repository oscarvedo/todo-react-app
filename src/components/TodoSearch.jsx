import React from 'react';
import '../stylesheets/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  };

  return (
    <>
      <input
        className="TodoSearch"
        type="text"
        placeholder="Busca tu Todo"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  );
}

export { TodoSearch };