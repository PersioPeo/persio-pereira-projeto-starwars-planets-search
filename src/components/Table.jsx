import React, { useContext } from 'react';
import { StarContexto } from '../contexto/Context';

const Table = () => {
  const { data, filterPlanets } = useContext(StarContexto);
  return data.length === 0 ? (
    <div>Carregando...</div>
  ) : (
    <table className="table table-striped">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <th key={ index }>
              {key === 'url'
                ? key.toUpperCase()
                : key
                  .replace('_', ' ')
                  .replace(/^[a-z]{1}|\s\S/g, (caracter) => caracter.toUpperCase())}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filterPlanets.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
