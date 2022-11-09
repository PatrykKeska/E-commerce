import { Component } from 'react';
import { Props } from './types';
import './styles.scss';
class ProductDescription extends Component<Props> {
constructor(props) {
  super(props);
}
  convertToHtml(){
    return{__html: this.props.attributes};
  }
  render() {
    return (
      <section className="product-description-wrapper">
        <div className='product-description-wrapper__text' dangerouslySetInnerHTML={this.convertToHtml()}/>
      </section>
    );
  }
}

export { ProductDescription };
