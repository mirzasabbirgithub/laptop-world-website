import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import RandomlyShowed from '../Selected-Items/RandomlyShowed';
import Selected from '../Selected-Items/Selected';
import './Shop.css'


const Shop = () => {
          const [products, setProducts] = useState([]);
          const [selected, setSelected] = useState([]);
          const [random, setRandom] = useState([]);
          useEffect(() => {
                    fetch('products.json')
                              .then(res => res.json())
                              .then(data => setProducts(data))
          }, []);

          const addToCart = (product) => {
                    const newItem = [...selected, product];
                    setSelected(newItem);
          }

          const randomProduct = (random) => {
                    let item = random[Math.floor(Math.random() * random.length)]
                    setRandom(item);
                    // console.log(item);
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
                                                  selected.map(selected => <Selected key={selected.id} selected={selected}
                                                            selectedNew={selected}
                                                  ></Selected>)
                                        }

                                        <div className='choose-container'>
                                                  <button onClick={() => randomProduct(selected)} className='choose-btn'>Choose one for me</button>
                                        </div>

                                        {
                                                  <RandomlyShowed key={random.id} random={random}
                                                            randomHanlde={random}

                                                  ></RandomlyShowed>
                                        }

                              </div>
                    </div >

          );
};
export default Shop;