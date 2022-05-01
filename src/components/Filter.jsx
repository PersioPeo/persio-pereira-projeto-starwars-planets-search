import React, { useContext, useEffect } from 'react';
import { StarContexto } from '../contexto/Context';

function Filter() {
  const { data,
    setFilterPlanets,
    filter,
    setFilter,
    currentFilters,
    setCurrentFilters,
    columnSelect,
    setColumnSelect,
  } = useContext(StarContexto);

  useEffect(() => setFilterPlanets(
    data.filter(
      (item) => item.name
        .toUpperCase().includes(filter.filterByName.name
          .toUpperCase()),
    ),
  ), [data, filter, setFilterPlanets]);

  const onSubmit = () => {
    setFilter((ant) => ({
      ...ant,
      filterByNumericValues: [...ant.filterByNumericValues, currentFilters],
    }));
  };
  const dataFiltrados = () => {
    let dataFiltrar = data;
    filter.filterByNumericValues.forEach((filtro) => {
      switch (filtro.comparison) {
      case 'maior que':
        dataFiltrar = dataFiltrar.filter((planeta) => (
          Number(planeta[filtro.column]) > Number(filtro.value)
        ));
        break;
      case 'menor que':
        dataFiltrar = dataFiltrar.filter((planeta) => (
          Number(planeta[filtro.column]) < Number(filtro.value)
        ));
        break;
      case 'igual a':
        dataFiltrar = dataFiltrar.filter((planeta) => (
          Number(planeta[filtro.column]) === Number(filtro.value)
        ));
        break;
      default:
        break;
      }
      setFilterPlanets(dataFiltrar);
    });
  };
  useEffect(() => {
    dataFiltrados();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.filterByNumericValues]);
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
          {columnSelect.filter().map((item, key) => (
            <option
              key={ key }
              value={ item }
            >
              {item}
            </option>
          ))}
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
              column: '',
              comparison: '',
              value: '',
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
