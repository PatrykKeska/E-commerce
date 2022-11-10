import React, { useRef } from 'react';

const RefHOC = (Component: React.ComponentType<any>) => {
  return function HocWithHook(rest) {
    const ref = useRef(null);
    return (
      <Component
        useRef={ref}
        {...rest}
      />
    );
  };
};

export { RefHOC };
