import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './App';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;