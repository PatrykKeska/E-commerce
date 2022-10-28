import { Component } from 'react';
import './styles.scss';
import { Props } from './types/Props';
export class TopBar extends Component<Props> {
  render() {
    return <section className="bar">{this.props.children}</section>;
  }
}
