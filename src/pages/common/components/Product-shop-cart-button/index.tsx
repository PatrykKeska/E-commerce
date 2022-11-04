import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Props } from './types/types';
import { GreenBasket } from '../../../../assets/svg/GreenBasket';
export class ProductShopCartButton extends Component<Props> {
  render() {
    const { productID, category, className } = this.props;
    return (
      <NavLink
        className={className}
        to={`/${category}/${productID}`}
      >
        <GreenBasket />
      </NavLink>
    );
  }
}
