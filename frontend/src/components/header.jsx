import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './primitive-components';

export default () => {
  return (
    <Header>
      <Link to="/movies">Home</Link>
    </Header>
  );
};
