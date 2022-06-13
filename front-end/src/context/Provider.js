import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [game, setGame] = useState('Sum');
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  const context = {
    game,
    setGame,
    token,
    setToken,
    user,
    setUser,
  }

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}
