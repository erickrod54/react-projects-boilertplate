import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

/**Grocery App version 1 - Features:
 * 
 *        ----> Building States.
 *        ----> Building 'handleSubmit' functionality
 *              to add an 'item'.
 *        ----> Styling App.
 *        ----> Placing 'JSX' and Components.
 */

function App() {

  /**this state is to get and set the item 'name' */
  const [name, setName] = useState('');

  /**this state is to get the list and set newItem 
   * to the 'list' -this will be managed by 
   * local storage-*/
  const [list, setList] = useState([]);

  /**this state is to handle a 'edit' feature*/
  const [isEditing, setisEditing ] = useState(false);

  /**this state is part of the 'edit' feature*/
  const [editID, setEditID] = useState(null);

  /**this state is for the 'alert' feature:
   * as a value will have an object key with 
   * three props:
   *  
   *      -->show ( false or true)
   *      -->msg ( display a sucessful or danger ) 
   *      -->type ( display a color green or red )
  */
  const [alert, setAlert] = useState({show:false, msg:'',
  type:''})


  /**the 'handleSubmit' functionality has three 
   * tasks before submit:
   *      
   *      --> !name ( display alert)
   *      --> name && isEditing ( deal with edit )
   *      --> show alert and add 'item'
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
    }else if (name && isEditing) {
      //deal with edit
    }else{
      //show altert

      /**this is the new element with an 'id' and 
       * 'name'  props*/
      const newItem = {id: new Date().getTime().toString(),
      title: name};
      /**i 'setList' spreading all the newItem list,
       * and i add the current newItem*/
      setList([...list, newItem]);
      /**i 'setName' as empty string to clear the 
       * field*/
      setName('')
    }
  }


  return (
  <>
    {/**<h2>grocery bud setup</h2> */}
    <section className='section-center'>
      {/**this form will contain the following:
       *      --> title.
       *      --> submit ( can be done by 'onSubmit' 
       *                  form - Basic Forms Reference
       *                  or by 'onclick' with a button).
       * 
       *      --> input ( to get the item 'name' value
       *                  and targeting it by 'setName').
       * 
       *      -->submit button ( to check 'isEditing' 
       *                        state).
       * 
       */}  
      <form 
        className='grocery-form' 
        onSubmit={handleSubmit}>
          {alert.show && <Alert />}

          <h3>grocery bud</h3>
          <div className='form-control'>
            <input 
              type='text' 
              className='grocery' 
              placeholder='e. g. eggs'
              value={name}
              onChange={(e) => setName(e.target.value)}/>
            <button type='submit' className='submit-btn'>
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>
      {/** this is where i render the newItems that
       * are being added to the 'List' component 
       * ( this component contain list values )
      */}

      {/**i check first that the list length is greater
       * than 0, and check the 'List' component existence
       */}
      {list.length > 0 && 
        (<div className='grocery-container'>
          <List items={list}/>
          <button className='clear-btn'>
            clear items
          </button>
        </div>
        )}  
    </section>
  
  </>
    
  )
}

export default App
