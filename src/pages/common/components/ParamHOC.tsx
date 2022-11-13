import React from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';

const ParamHoc = (Component: React.ComponentType) => {
  return function HocWithHook(rest) {
    const param = useParams();
    const dispatch = useDispatch();
    const selector = useSelector((store: RootState) => store.productDetails);
    const currency = useSelector((store: RootState) => store.currency);
    return (
      <Component
        useParams={param}
        dispatch={dispatch}
        selector={selector}
        currency={currency}
        {...rest}
      />
    );
  };
};

export { ParamHoc };
