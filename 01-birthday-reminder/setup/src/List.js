import React from 'react';

/**First i pass the people data*/
const List = ({people}) => {
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
            <article key={id} className='person'>
                <img 
                  src={image} 
                  alt={name}/>
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
            </article>
        )
      })}

    </>
  );
};

export default List;
