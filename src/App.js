import React from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import { StarProvider } from './contexto/Context';
import MultFilter from './components/MultFilter';

function App() {
  return (
    <StarProvider>
      <Filter />
      <MultFilter />
      <Table />
    </StarProvider>
  );
}

export default App;
