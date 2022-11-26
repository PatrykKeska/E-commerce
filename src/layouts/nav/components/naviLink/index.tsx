import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Props } from './types/props';
import './style.scss';
export class NaviLink extends Component<Props> {
  render() {
    return (
      <NavLink
        className='navi-link'
        to={`/${this.props.name}`}
      >
        {this.props.name}
      </NavLink>
    );
  }
}
