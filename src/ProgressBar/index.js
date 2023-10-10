import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import './ProgressBar.css';
import { Footer } from '../Footer';

function PBar() {
  const {
    completedTodos,
    totalTodos,
    tot = totalTodos >= 1 ? Math.round((completedTodos / totalTodos) * 100) : 100,
    totnum = completedTodos >= 1 ? tot : 0,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <div key={totnum} className="pie animate no-round" style={{ "--p": totnum }}>
        {totnum}%
      </div>
      <Footer />
    </>
  );
}

export { PBar };