import { Component } from 'react';
import { TopBar } from './components/topBar';
import { NaviLink } from './components/naviLink';
import { Container } from './components/container/container';
import { BasketButton } from './components/basketButton';
import { GreenLogo } from '../../assets/svg/GreenLogo';
import './styles.scss';
import { CartCoverElement } from '../../pages/common/components/cart-cover-element';
import { SelectCurrency } from './components/selectCurrency';
import { ReduxHOC } from '../../pages/common/components/ReduxHOC';
import { Props } from './types/types';
export class NavC extends Component<Props> {
  render() {
    const { basketSelector } = this.props;
    const { isOpen } = basketSelector;
    return (
      <TopBar>
        <Container>
          <NaviLink name='all' />
          <NaviLink name='clothes' />
          <NaviLink name='tech' />
          <NaviLink name='cart' />
        </Container>
        <Container center>
          <GreenLogo />
        </Container>
        <Container>
          <SelectCurrency />
          <BasketButton />
        </Container>
        {isOpen && <CartCoverElement />}
      </TopBar>
    );
  }
}

const Nav = ReduxHOC(NavC);
export { Nav };
