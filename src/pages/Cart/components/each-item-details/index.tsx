import { Component } from 'react';
import { PricePreview } from '../price-preview';
import { BasketColorPreview } from '../cart-color-preview';
import { BasketSizePreview } from '../cart-size-preview';
import { PlusIcon } from '../../../../assets/svg/PlusIcon';
import { MinusIcon } from '../../../../assets/svg/MinusIcon';
import { Props } from './types';
import { CartImgPreview } from '../cart-img-preview';
import { handleQuantity, removeItemFromCart } from '../cart-wrapper/functions';

class EachItemDetails extends Component<Props> {
  render() {
    const { currency, basketSelector, dispatch } = this.props;
    const { isOpen } = basketSelector;

    return (
      <>
        {basketSelector.items.map((item, index) => (
          <div
            key={index}
            className='cart-wrapper__product-wrapper'
          >
            <section className='cart-wrapper__product-wrapper__left-column '>
              <h3 className='cart-wrapper__product-wrapper__left-column__brand'>
                {item.brand}
              </h3>
              <h3 className='cart-wrapper__product-wrapper__left-column__name'>
                {item.name}
              </h3>
              <PricePreview
                currency={currency}
                allPrices={item.allPrices}
              />
              {item.allColors.length > 1 && (
                <BasketColorPreview
                  pickedColor={item.color}
                  attributes={item.allColors}
                />
              )}
              {item.allSizes.length > 1 && (
                <BasketSizePreview
                  attributes={item.allSizes}
                  pickedSize={item.size}
                  isOpen={isOpen}
                />
              )}
            </section>
            <section className='cart-wrapper__product-wrapper__right-column'>
              <section className='cart-wrapper__product-wrapper__right-column__quantity'>
                <button
                  className='cart-wrapper__product-wrapper__right-column__quantity__button'
                  onClick={() =>
                    handleQuantity(index, '+', basketSelector, dispatch)
                  }
                >
                  <PlusIcon />
                </button>
                <p className='cart-wrapper__product-wrapper__right-column__quantity__value'>
                  {item.quantity}
                </p>
                {item.quantity < 2 ? (
                  <button
                    className='cart-wrapper__product-wrapper__right-column__quantity__button'
                    onClick={() =>
                      removeItemFromCart(index, basketSelector, dispatch)
                    }
                  >
                    <MinusIcon />
                  </button>
                ) : (
                  <button
                    className='cart-wrapper__product-wrapper__right-column__quantity__button'
                    onClick={() =>
                      handleQuantity(index, '-', basketSelector, dispatch)
                    }
                  >
                    <MinusIcon />
                  </button>
                )}
              </section>
              <CartImgPreview gallery={item.gallery} />
            </section>
          </div>
        ))}
      </>
    );
  }
}

export { EachItemDetails };
