import React, { Component } from 'react';
import './styles.scss';
import {Props, State} from './types';
import {ReduxHOC} from '../../../common/components/ReduxHOC';
import {setProductColor} from '../../../../store/features/product-details/product-details-slice';
class ColorPicker extends Component<Props,State>{
  state: State = {
    checked: false,
    pickedColor : '',
  };
  handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {dispatch, selector} = this.props
    this.setState({pickedColor: e.target.value})
    dispatch(setProductColor(e.target.value))
  };


  render() {
    const details = this.props.selector
    console.log(details)
    const {pickedColor, checked} = this.state
    const {attributes} = this.props
    return (
      <section className="color-picker">
        <h3 className="color-picker__name">color:</h3>
        <div className="color-picker__select-options">
          {attributes.map((color)=>(<div key={color}>
            <label
                htmlFor={color}
                style={{backgroundColor: color}}
                className={`color-picker__select-options__label ${color === pickedColor ? 'picked-color' : ''}`}
            />
            <input
                onChange={this.handleColorChange}
                checked={checked}
                name={color}
                id={color}
                className="color-picker__select-options__input"
                type="radio"
                value={color}
            />
          </div>))}

        </div>

      </section>
    );
  }
}

const ColorPickerComponent = ReduxHOC(ColorPicker)
export { ColorPickerComponent };
