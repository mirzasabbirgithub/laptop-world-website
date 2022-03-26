import React from 'react';
import './Selected.css'

const Selected = ({ selected }) => {
          console.log(selected);
          let testing = selected.name;
          console.log(testing);
          const ra = testing[Math.floor(Math.random() * testing.length)];
          console.log(ra);
          return (
                    <div className='selected'>
                              <img src={selected.img} alt="" />
                              <h3>{selected.name}</h3>

                    </div>
          );
};

export default Selected;