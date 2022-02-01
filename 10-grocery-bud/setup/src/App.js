import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

/**Grocery App version 2 - Features:
 * 
 *        ---> Building 'Alert' feature.
 *        ---> Building a 'showAlert' function
 *             to use 'setAlert'.
 *        --->full filling conditions with alert 
 *            when submit with an empty input, and
 *            when an elements is added .
 *    
 */

function App() {

  const [name, setName] = useState('');

  const [list, setList] = useState([]);

  const [isEditing, setisEditing ] = useState(false);
  const [editID, setEditID] = useState(null);

  const [alert, setAlert] = useState({
    show:false, 
    msg:'', 
    type:''
  })


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
      
      showAlert(
        true,
        'danger',
        'please enter a value'
      )

    }else if (name && isEditing) {
      //deal with edit
    }else{
      //i can use 'showAlert' directly with the
      //values i want to give it
      showAlert(
        true,
        'success',
        'item successfuly added'
      )
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

  /**this showAlert function will be used
   * to switch values betwwen a success or
   * danger within a message*/
  const showAlert = (show = false, 
                    type = '', msg = '') => {
          /**this line 'setAlert 'as 'showAlert' */              
          setAlert({show, type, msg})
  }

  return (
  <>
    {/**<h2>grocery bud setup</h2> */}
    <section className='section-center'>
      
      <form 
        className='grocery-form' 
        onSubmit={handleSubmit}>
          {alert.show && <Alert 
                        /**i spread all 'alert' props
                         * and 'removeAlert' to build
                         * cleanup function with 
                         * 'useEffect' in 'Alert' 
                         * js component
                         */
                            {...alert} 
                            removeAlert={showAlert}/>}

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
