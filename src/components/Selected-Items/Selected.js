import React from 'react';
import './Selected.css'

const Selected = ({ selected }) => {
          console.log(selected);
          return (
                    <div className='selected'>
                              <h3>{selected.name}</h3>
                    </div>
          );
};

export default Selected;