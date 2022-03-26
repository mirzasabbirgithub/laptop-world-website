import React from 'react';
import './RandomlyShowed.css'
const RandomlyShowed = ({ random }) => {
          return (
                    <div class='RandomlyShowed'>
                              <h4>{random.name}</h4>
                    </div>
          );
};

export default RandomlyShowed;