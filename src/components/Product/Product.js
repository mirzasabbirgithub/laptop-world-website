import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, addToCart }) => {
          const { name, price, img, } = product;

          return (
                    <div className='product'>
                              <img src={img} alt="product-images" />
                              <div className="product-info">
                                        <h3>{name}</h3>
                                        <p>Price:${price}</p>
                              </div>
                              <button onClick={() => addToCart(product)} className='btn-cart'><p>Add To Cart</p>
                                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                              </button>
                    </div>
          );
};

export default Product;