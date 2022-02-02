import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

/**Grocery App version 3 - Features:
 * 
 *        ---> Building 'clear items' feature
 *        ---> RemoveItem feature
 *        ---> Drilling 'list' value to Alert Component
 *             to setTimeOut    
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

  const showAlert = (show = false, 
                    type = '', msg = '') => {
          /**this line 'setAlert 'as 'showAlert' */              
          setAlert({show, type, msg})
  }

  /**i build the clearList functionality with
   * a 'showAlert' danger type and a setList([])
   */
  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }

  /**i build remove item targeting the 'id', showing
   * an alert and 'setList' to return a new list 
   * with the values that not include the 'id' targeted 
   */
  const removeItem = (id) => {
    showAlert( 
       true, 
      'danger', 
      'item removed from the List')
    setList(list.filter((item) => item.id !== id))
  }

  return (
  <>
    {/**<h2>grocery bud setup</h2> */}
    <section className='section-center'>
      
      <form 
        className='grocery-form' 
        onSubmit={handleSubmit}>
          {alert.show && <Alert 
                            {...alert} 
                            removeAlert={showAlert}
           /**i drill the list value to 'Alert' 
            * Component */                 
           list={list}/>}

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
          <List 
            items={list} 
            /**i drill the functionality to List
             * Component */
            removeItem={removeItem}/>
          <button 
            className='clear-btn' 
            onClick={clearList}
            > clear items </button>
        </div>
        )}  
    </section>
  
  </>
    
  )
}

export default App
