import React from 'react';
import Loader from 'react-loader-spinner';
import { Column } from './primitive-components';

export const Spinner = () => (
  <Column>
    <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
  </Column>
);
