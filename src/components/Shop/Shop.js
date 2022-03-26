import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Selected from '../Selected-Items/Selected';
import './Shop.css'


const Shop = () => {
          const [products, setProducts] = useState([]);
          useEffect(() => {
                    fetch('products.json')
                              .then(res => res.json())
                              .then(data => setProducts(data))
          }, []);

          const addToCart = (product) => {
                    console.log(product);
          }
          return (
                    <div className="shop-container">
                              <div className="product-container">
                                        {
                                                  products.map(product => <Product key={product.id}
                                                            product={product}
                                                            addToCart={addToCart}
                                                  ></Product>)
                                        }

                              </div>
                              <div className="selected-container">
                                        <Selected></Selected>
                              </div>
                    </div >
          );
};
export default Shop;