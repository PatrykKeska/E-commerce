import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';

const ReduxHOC = (Component: React.ComponentType<any>) => {
    return function hooks(props: any) {
        const dispatch = useDispatch();
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
