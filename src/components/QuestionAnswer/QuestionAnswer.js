import React from 'react';

const QuestionAnswer = () => {
          return (
                    <div className='QuestionAnswer'>
                              <div>
                                        <h2>Question and Answer Part</h2>
                              </div>

                              <div>
                                        <h3>How React Works?</h3>
                                        <p>React always works in one way data. When a react app has been designed then react create a connection between child and parent. Therefore we can debug easily.  React is not a frame work materials. It's a library which is developed by facebook. </p>
                              </div>

                              <div>
                                        <h3>How useState works?</h3>
                                        <p>useState is a Hook which is allowed state variable in the functional components. useState returns value by the form of array that have 2 elements. One is current state value and another is function to update the value. useState might be usded to toggle between two values.</p>
                              </div>
                    </div>
          );
};

export default QuestionAnswer;