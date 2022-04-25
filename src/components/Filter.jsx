import React, { useState, useContext, useEffect } from 'react';
import { StarContexto } from '../contexto/Context';

function Filter() {
  const { data, setFilterPlanets } = useContext(StarContexto);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });
  useEffect(() => setFilterPlanets(
    data.filter(
      (item) => item.name
        .toUpperCase().includes(filter.filterByName.name
          .toUpperCase()),
    ),
  ), [data, filter, setFilterPlanets]);

  return (
    <section>
      <h2>Projeto Star Wars - Trybe</h2>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => setFilter((prevState) => ({
          ...prevState,
          filterByName: { name: value },
        })) }
      />

    </section>

  );
}

export default Filter;
