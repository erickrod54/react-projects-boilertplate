import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

/**Accordion App version 1 - in this file:
 *  i map the array of questions, and i use the 
 * component:
 * ---- '<SingleQuestion/>' -----
 * 
 * to show every
 * single question - */

function App() {

const [ questions, setQuestions ] = useState(data)

  return (
    <>
      <h2>accordion project setup</h2>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {
            questions.map((question) =>{
              return <SingleQuestion key={question.id} {...question} />
            })
          }
        </section>
      </div>
    
    </>
    
  );
}

export default App;
