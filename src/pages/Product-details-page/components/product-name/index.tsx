import {Component} from 'react';
import {Props} from './types';
import './styles.scss'
class ProductName extends Component<Props> {
    render() {
        const {name} = this.props
        return (
            <>
             <h2 className='product-name'>{name}</h2>
            </>
        );
    }
}

export {ProductName}