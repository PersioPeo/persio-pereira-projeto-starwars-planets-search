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

  const onChange = ({ target: { name, value } }) => {
    setCurrentFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setFilter((prevState) => ({
      ...prevState,
      filterByNumericValues: [
        ...prevState.filterByNumericValues,
        currentFilters,
      ],
    }));
  };
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
        <form>
          <select
            data-testid="column-filter"
            name="column-filter"
            onChange={ onChange }
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
            onChange={ onChange }
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
            onChange={ onChange }
            defaultValue="0"
          />
          <button
            type="submit"
            data-testid="button-filter"
            onClick={ onSubmit }
          >
            Filtrar
          </button>
        </form>
      </section>
    </>
  );
}

export default Filter;
