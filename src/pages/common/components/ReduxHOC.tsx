import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { SizePickerProps } from '../../Product-details-page/components/size-picker/types';

interface Props extends SizePickerProps {
  children?: React.ReactNode;
}

const ReduxHOC = (Component: React.ComponentType<any>) => {
  return function hooks(props) {
    const dispatch = useDispatch();
    const selector = useSelector((store: RootState) => store.productDetails);
    const basketSelector = useSelector((store: RootState) => store.basket);
    const modalSelector = useSelector((store: RootState) => store.modal);
    const currency = useSelector((store: RootState) => store.currency);

    return (
      <Component
        {...props}
        dispatch={dispatch}
        selector={selector}
        currency={currency}
        basketSelector={basketSelector}
        modalSelector={modalSelector}
      />
    );
  };
};

export { ReduxHOC };
