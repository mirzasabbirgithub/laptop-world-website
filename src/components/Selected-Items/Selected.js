import React from 'react';
import './Selected.css'

const Selected = ({ selected }) => {
          return (
                    <div className='selected'>
                              <img src={selected.img} alt="" />
                              <h3>{selected.name}</h3>

                    </div>
          );
};

export default Selected;