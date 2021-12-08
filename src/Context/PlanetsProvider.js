import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

const Context = createContext();
const { Provider, Consumer } = Context;

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filtered, setFiltered] = useState(false);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const setDataResponse = async () => {
    setData(await fetchPlanets());
  };

  useEffect(() => {
    setDataResponse();
  }, []);

  const context = {
    data,
    filterByName,
    setFilterByName,
    filtered,
    setFiltered,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <Provider value={ context }>
      {children}
    </Provider>
  );
}

export { PlanetsProvider as Provider, Consumer, Context };

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
