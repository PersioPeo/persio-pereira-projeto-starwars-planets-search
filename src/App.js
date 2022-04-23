import React from 'react';
import './App.css';
import Table from './components/Table';
import { StarProvider } from './contexto/Context';

function App() {
  return (
    <StarProvider>
      <Table />
    </StarProvider>
  );
}

export default App;
