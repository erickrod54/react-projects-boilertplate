import React from 'react';
import data from '../../setup/src/data';

/**First i pass the people data*/
const List = () => {

  /**-------the same logic that lived in App js, now lives in 'List' 
   * component in order to apply removeItem feauture -------*/
  
  const [ people, setPeople ] = React.useState(data)

  const removeItem = (id) =>{
    const newPeople = 
      people.filter((person) => person.id !== id)

      setPeople(newPeople)
} 

  /**------------------------------------------------------------*/
  
  return (
    <>
       {/** second i map the data*/} 
      {people.map((person) => {
        /**third i destructure the data in detail,
         * in this part i have always to look for 
         * the 'data' file
         */
        const {id, name, age, image} = person;
        

        /**fourth i assembly the 'JSX' with the data*/
        return (
            <article key={id} className='person' >
                <img 
                  src={image} 
                  alt={name}/>
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
                <div>
                <button 
                      onClick={() => removeItem(id)}
                        >remove </button> 
                </div>
            </article>
            
        )
      })}
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

    </>
  );
};

export default List;
