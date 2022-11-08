import React from 'react';
import {useDispatch, useSelector,} from 'react-redux';
import {RootState} from '../../../store';
import {SizePickerProps} from '../../Product-details-page/components/size-picker/types';

interface Props extends SizePickerProps{
    children? : React.ReactNode
}



const ReduxHOC = (Component: React.ComponentType<Props>) => {
    return function hooks(props) {
        const dispatch= useDispatch();
        const selector = useSelector((store:RootState)=> store.productDetails);

        return (
            <Component
                {...props}
                dispatch={dispatch}
                selector={selector}
            />
        );
    };
};

export { ReduxHOC };
