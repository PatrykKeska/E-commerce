import { useNavigate } from 'react-router-dom';
import React from 'react';

const addRedirectMethod = (Component: React.ComponentType<any>) => {
  return function Redir(props: any) {
    const navi = useNavigate();

    return (
      <Component
        {...props}
        navigate={navi}
      />
    );
  };
};

export { addRedirectMethod };
