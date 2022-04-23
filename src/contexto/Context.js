import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const StarContexto = createContext(null);
export const StarProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const fetchPlanetas = async () => {
    const response = await fetch(
      'https://swapi-trybe.herokuapp.com/api/planets/?format=json',
    );
    const { results } = await response.json();
    const planetas = results.filter((planet) => delete planet.residents);
    setData(planetas);
  };
  useEffect(() => {
    fetchPlanetas();
  }, []);
  return (
    <StarContexto.Provider value={ data }>{children}</StarContexto.Provider>
  );
};

StarProvider.propTypes = {
  children: PropTypes.shape(),
}.isRequired;
