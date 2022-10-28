import { Component } from 'react';
import { Props } from './types/props';
import './style.scss';
import clsx from 'clsx';

class Container extends Component<Props> {
  render() {
    return (
      <div
        className={clsx('container', this.props.center && 'container--center')}
      >
        {this.props.children}
      </div>
    );
  }
}

export { Container };
