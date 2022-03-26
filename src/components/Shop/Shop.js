import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Selected from '../Selected-Items/Selected';
import './Shop.css'


const Shop = () => {
          const [products, setProducts] = useState([]);
          const [selected, setSelected] = useState([]);
          useEffect(() => {
                    fetch('products.json')
                              .then(res => res.json())
                              .then(data => setProducts(data))
          }, []);

          const addToCart = (product) => {
                    const newItem = [...selected, product];
                    setSelected(newItem);
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
                                        <div>
                                                  <h2>Selected Item</h2>
                                        </div>

                                        {
                                                  selected.map(selected => <Selected key={selected.id} selected={selected}></Selected>)
                                        }
                              </div>
                    </div >

          );
};
export default Shop;