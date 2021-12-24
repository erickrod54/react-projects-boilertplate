import React, { useState } from 'react';
import data from './data';
import List from './List';

/**this is the birthday reminder version 1 - does
 * have features like clear data, and restore data
 */

function App() {
  /**first i destructure my data 'useState(data)'
   * in 'people' and 'setPeople'
  */
  const [ people, setPeople ] = useState(data)
  
  return (
    <>
    <main>
      {/**<h2>Birthday Reminder</h2> */}
        <section className='container'>
          {/** using 'people.length', i count 
           * the elements in my array
          */}
          <h3>{people.length} birthdays today</h3>
          {/** i have a component called 'List'
           * that has the JSX, and where the 'people'
           * data is destructured
          */}
          <List people={people}/>
          {/**button to clear the array data 
           * this inline function give back an
           * empty array 'setPeople([])'
          */}
          <button 
            onClick={() => 
            setPeople([])}>Clear Data</button>
            {/**button to restore data from the array
             * this inline function give back the 
             * array with the original data 'setPeople([])'
             */}
            <button 
            onClick={() => 
            setPeople(data)}>Restore data</button>
        </section>
        </main>
    </>
  );
}

export default App;
