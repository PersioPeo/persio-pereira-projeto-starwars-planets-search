import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const StarContexto = createContext(null);
export const StarProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
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
  const store = useMemo(() => ({
    data,
    filterPlanets,
    setFilterPlanets,
  }), [data, filterPlanets]);
  return (
    <StarContexto.Provider value={ store }>{children}</StarContexto.Provider>
  );
};

StarProvider.propTypes = {
  children: PropTypes.shape(),
}.isRequired;
