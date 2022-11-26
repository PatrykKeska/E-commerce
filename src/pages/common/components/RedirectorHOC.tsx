import { useNavigate } from 'react-router-dom';
import React from 'react';

const addRedirectMethod = (Component: React.ComponentType<any>) => {
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
