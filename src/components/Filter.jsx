import React, { useState, useContext, useEffect } from 'react';
import { StarContexto } from '../contexto/Context';

function Filter() {
  const { data, setFilterPlanets } = useContext(StarContexto);
  const [currentFilters, setCurrentFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  useEffect(() => setFilterPlanets(
    data.filter(
      (item) => item.name
        .toUpperCase().includes(filter.filterByName.name
          .toUpperCase()),
    ),
  ), [data, filter, setFilterPlanets]);

  const onSubmit = () => {
    switch (currentFilters.comparison) {
    case 'maior que':
      return setFilterPlanets(
        data.filter(
          (item) => Number(item[currentFilters.column])
              > Number(currentFilters.value),
        ),
      );
    case 'menor que':
      return setFilterPlanets(
        data.filter(
          (item) => Number(item[currentFilters.column])
              < Number(currentFilters.value),
        ),
      );
    case 'igual a':
      return setFilterPlanets(
        data.filter(
          (item) => Number(item[currentFilters.column])
              === Number(currentFilters.value),
        ),
      );
    default:
      return undefined;
    }
  }; // fim da função onSubmit.
  return (
    <>
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
      <section>

        <select
          data-testid="column-filter"
          name="column-filter"
          onChange={ (event) => setCurrentFilters({
            ...currentFilters,
            column: event.target.value,
          }) }
          defaultValue="population"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison-filter"
          onChange={ (event) => setCurrentFilters({
            ...currentFilters,
            comparison: event.target.value,
          }) }
          defaultValue="maior que"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          name="value-filter"
          onChange={ (event) => setCurrentFilters({
            ...currentFilters,
            value: event.target.value,
          }) }
          defaultValue="0"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            onSubmit();
            // limpando os selectes
            setCurrentFilters({
              column: 'population',
              comparison: 'maior que',
              value: 0,
            });
          } }
        >
          Filtrar
        </button>

      </section>
    </>
  );
}

export default Filter;
