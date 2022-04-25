import React from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import { StarProvider } from './contexto/Context';

function App() {
  return (
    <StarProvider>
      <Filter />
      <Table />
    </StarProvider>
  );
}

export default App;
