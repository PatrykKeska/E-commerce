import React, { Component } from 'react';
import './styles.scss';
class ColorPicker extends Component<any,any>{
  state = {
    colors: ['red', 'blue', 'black'],
    checked: false,
    pickedColor : '',
  };
  handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({pickedColor: e.target.value})
  };


  render() {
    const {colors,pickedColor, checked} = this.state
    return (
      <section className="color-picker">
        <h3 className="color-picker__name">color:</h3>
        <div className="color-picker__select-options">
          {colors.map((color)=>(<div key={color}>
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

export { ColorPicker };
