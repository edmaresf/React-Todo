import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './App';
import { PBar } from '../ProgressBar';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

function PB() {
  return (
    <TodoProvider>
      <PBar />
    </TodoProvider>
  );
}

export default App;
export { PB };