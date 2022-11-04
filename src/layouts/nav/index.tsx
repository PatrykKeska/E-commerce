import { Component } from 'react';
import { TopBar } from './components/topBar';
import { NaviLink } from './components/naviLink';
import { Container } from './components/container/container';
import { BasketButton } from './components/basketButton';
import { GreenLogo } from '../../assets/svg/GreenLogo';
import './styles.scss';
import SelectCurrency from './components/selectCurrency';
export class Nav extends Component {
  render() {
    return (
      <TopBar>
        <Container>
          <NaviLink name="all" />
          <NaviLink name="clothes" />
          <NaviLink name="tech" />
        </Container>
        <Container center>
          <GreenLogo />
        </Container>
        <Container>
          <SelectCurrency />
          <BasketButton />
        </Container>
      </TopBar>
    );
  }
}
