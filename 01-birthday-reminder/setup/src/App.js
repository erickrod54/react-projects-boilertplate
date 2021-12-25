import React, { useState } from 'react';
import data from './data';
import List from './List';

/**this is the birthday reminder version 2 - does
 * have features like clear data, restore data, and
 * remove item -i have an issue with the counter-
 */

function App() {
  /**first i destructure my data 'useState(data)'
   * in 'people' and 'setPeople'
  */
  const [ people ] = useState(data)


  return (
    <>
    <main>
      {/**<h2>Birthday Reminder</h2> */}
        <section className='container'>
          {/** issue with 'people.length' does not update :(
          */}
          <h3>{people.length} birthdays today</h3>
          {/** i have a component called 'List'
           * that has the JSX, and where the 'people'
           * data is destructured
          */}
          <List people={people} />
     
   
        </section>
        </main>
    </>
  );
}

export default App;
