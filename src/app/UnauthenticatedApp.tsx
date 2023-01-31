import { ReactElement } from 'react';
import { Routes } from 'react-router-dom';

const UnauthenticatedApp = (): ReactElement<typeof Routes> => {
  return <Routes></Routes>;
};

export default UnauthenticatedApp;
