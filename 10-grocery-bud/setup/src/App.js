import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

/**Grocery App version 4 - Features:
 * 
 *        ---> Building editItem functionality    
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
      /**i 'setList' mapping the list values and 
       * returning the whole items plus title with
       * the name already edited
      */
      setList(
        list.map((item) => {
        
        if (item.id === editID) {
          return {...item, title:name}
        }
        /**i return the item */
        return item
        })
      )
      /**'setName' to blank after being edited
       * 'setEditID' to null 
       * 'setisEditing' to false
       * 'showAlert' referent to the edit action
       */
      setName(''); 
      setEditID(null);
      setisEditing(false);
      showAlert(true, 'success', 'value changed');

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

  /**Here i build the 'editItem' i apply the find 
   * method to find the item which 'id' matches, 
   * then i 'setisEditing' to 'true', 'setEditID' 
   * -to keep the id value-, and 'setName'
   * to the 'title' of the 'specificItem' */

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setisEditing(true)
    setEditID(id)
    setName(specificItem.title)
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
            removeItem={removeItem}
            editItem={editItem}/>
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
