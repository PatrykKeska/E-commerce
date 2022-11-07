import React, {Component} from 'react';
import {ReduxHOC} from '../../../common/components/ReduxHOC';
import {Props, State} from './types';
import {setProductSize} from '../../../../store/features/product-details/product-details-slice';
import './styles.scss'

class SizePicker extends Component<Props,State> {
    state:State = {
        checked: false
    }
    handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {dispatch} = this.props
        dispatch(setProductSize(e.target.value))
    }
    render() {
        const {sizes ,selector} = this.props
        const {checked} = this.state
        console.log(selector)
        return (
                <section className="size-picker">
                    <h3 className="size-picker__name">size:</h3>
                    <div className="size-picker__select-options">
                        {sizes.map((size)=>(<div key={size}>
                            <label
                                htmlFor={size}
                                className={`size-picker__select-options__label ${size === selector.size ? 'picked-size' : ''}`}
                            >
                                <span className='size-picker__select-options__label__span' >{size}</span>
                            </label>
                            <input
                                onChange={this.handleChangeSize}
                                checked={checked}
                                name={size}
                                id={size}
                                className="size-picker__select-options__input"
                                type="radio"
                                value={size}
                            />
                        </div>))}

                    </div>

                </section>
        );
    }
}



const SizePickerComponent = ReduxHOC(SizePicker);
export {SizePickerComponent}