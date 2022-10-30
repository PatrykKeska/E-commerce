import { Component } from 'react';
import { TopBar } from './components/topBar';
import { NaviLink} from './components/naviLink';
import { Container } from './components/container/container';
import { BasketButton } from './components/basketButton';
import { CurrencyButton } from './components/currencyButton';
import { GreenLogo } from '../../assets/svg/GreenLogo';
import './styles.scss'
export class Nav extends Component {
  render() {
    return (
      <TopBar>
        <Container>
          <NaviLink name="women" />
          <NaviLink name="men" />
          <NaviLink name="kids" />
        </Container>
        <Container center>
          <GreenLogo/>
        </Container>
        <Container>
          <CurrencyButton />
          <BasketButton />
        </Container>
      </TopBar>
    );
  }
}
