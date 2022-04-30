import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const StarContexto = createContext(null);
export const StarProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [currentFilters, setCurrentFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const fetchPlanetas = async () => {
    const response = await fetch(
      'https://swapi-trybe.herokuapp.com/api/planets/?format=json',
    );
    const { results } = await response.json();
    const planetas = results.filter((planet) => delete planet.residents);
    setData(planetas);
    setFilterPlanets(planetas);
  };
  useEffect(() => {
    fetchPlanetas();
  }, []);
  const store = {
    data,
    filterPlanets,
    setFilterPlanets,
    filter,
    setFilter,
    currentFilters,
    setCurrentFilters,
  };
  return (
    <StarContexto.Provider value={ store }>{children}</StarContexto.Provider>
  );
};

StarProvider.propTypes = {
  children: PropTypes.shape(),
}.isRequired;
