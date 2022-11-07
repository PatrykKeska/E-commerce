import { Component } from 'react';
import { Props } from './types/types';
import './styles.scss';

class CategoryTitle extends Component<Props> {
  render() {
    return (
      <h2
        data-test-id="title"
        className="category-title"
      >
        {this.props.name}
      </h2>
    );
  }
}

export { CategoryTitle };
