import React from 'react';
import './Product.css'

const Product = (props) => {
          const { product, addToCart } = props;
          const { name, price, img } = product;

          return (
                    <div className='product'>
                              <img src={img} alt="product-images" />
                              <div className="product-info">
                                        <h3>{name}</h3>
                                        <p>Price:${price}</p>
                              </div>
                              <button onClick={() => addToCart(product)} className='btn-cart'><p>Add to Cart</p></button>
                    </div>
          );
};

export default Product;