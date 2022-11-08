import { useNavigate } from 'react-router-dom';
import React from 'react';
import {ProductProps} from './Product/types/types';

interface Props extends ProductProps {
  children? : React.ReactNode
}

const addRedirectMethod = (Component: React.ComponentType<Props>) => {
  return function Redirection(rest) {
    const navi = useNavigate();

    return (
      <Component
        {...rest}
        navigate={navi}
      />
    );
  };
};

export { addRedirectMethod };
