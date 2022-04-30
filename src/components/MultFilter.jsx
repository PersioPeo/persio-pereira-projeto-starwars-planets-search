import React, { useContext } from 'react';
import { StarContexto } from '../contexto/Context';

const MultFilter = () => {
  const { filter } = useContext(StarContexto);

  return (
    <div>
      {filter.filterByNumericValues.map((item, key) => (
        <p key={ key }>
          {`${item.column} ${item.comparison} ${item.value}`}
        </p>
      ))}
    </div>
  );
};

export default MultFilter;
