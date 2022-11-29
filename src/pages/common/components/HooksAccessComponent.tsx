import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useNavigate, useParams } from 'react-router-dom';


const HooksAccessComponent = (Component: React.ComponentType<any>) => {
  return function hooks(props) {
    const dispatch = useDispatch();
    const param = useParams();
    const selector = useSelector((store: RootState) => store.productDetails);
    const basketSelector = useSelector((store: RootState) => store.basket);
    const navi = useNavigate();
    const modalSelector = useSelector((store: RootState) => store.modal);
    const currency = useSelector((store: RootState) => store.currency);

    const ref = useRef(null);

    return (
      <Component
        {...props}
        dispatch={dispatch}
        selector={selector}
        currency={currency}
        useParams={param}
        navigate={navi}
        basketSelector={basketSelector}
        modalSelector={modalSelector}
        useRef={ref}
      />
    );
  };
};

export { HooksAccessComponent };
