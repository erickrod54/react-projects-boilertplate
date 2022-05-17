import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

/**Random person app version 4 - 'App' js file - Features:
 * 
 *      -->Building 'handleValue' to get the data from
 *        the API
 * 
 * Note: data-label match exactly with every person
 * prop in order to be accessed them, previously
 * were named as name, email, age, phone, password
 */

function App() {
  /**here i build the states */
  const [loading, setLoading ] = useState(true)
  const [person, setPerson ] = useState(null)
  const [ title, setTitle ] = useState('name')
  const [ value, setValue ] = useState('random person')

  const getPerson = async () => {
    /**here i fetch the data form the API */
    const response = await fetch(url);
    const data = await response.json()
    
    /**here i get the 'results' that is the first level*/
    const person = data.results[0]
    /**i test that i get the 'data' back */
    console.log(data)

    /**here i destructure it in friendly names */
    const { phone, email } = person;
    const { large: image } = person.picture
    const { login:{password}} = person;
    const {first, last } = person.name;
    const { dob: { age }} = person;
    const {street:{number, name}} = person.location
     
    /**here i store the values in 'newPerson' */
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      /**i implement string template to destructure one 
       * prop in two props.*/
      street:`${number} ${name}`,
      name: `${first} ${last}`
    }

    /**after i set the previous fetching and destructuring */

    /**i set the 'newPerson' */
    setPerson(newPerson)
    /**set loading to false */
    setLoading(false)

    /**set the 'Title' to 'name' */
    setTitle('name')

    /**i set the value as the 'name' of the 'random user' */
    setValue(newPerson.name)
  }

  useEffect(() => {
    getPerson();
  }, [])

  /**here i build the function to handle the 'onMouseOver' 
   * feature */
  const handleValue = (e) => {

    /**first i target the 'icon' in order to exactly
     * trigger the 'onMouseOver' feature*/
    if (e.target.classList.contains('icon')) {
      
      /**then i store in 'newValue' the label
       * of the button being 'onMouseOver'*/
      const newValue = e.target.dataset.label;
      console.log(person)
      console.log(newValue)

      /**througth the person 'object' i access
       * to the values using 'newValue' as index*/
      setValue(person[newValue])
    }
    /**data-label match exactly with every person
     * prop in order to be accessed them, previously
     * were named as name, email, age, phone, password
     */
  }

  return(
    <>
      <main>
        <div className='block bcg-black'></div>
        <div className='block'>
          {/**here i place the image */}
          <div className='container'>
            <img 
                src={( person && person.image) || defaultImage} 
                alt='random user'
                className='user-img'/>
          {/**here i place the person name */}   
            <p className='user-title'>
              my {title} is:
            </p>
            <p className='user-value'>{value}</p>
            {/**here i place the person data */}
            <div className='values-list'>
              <button 
                className='icon' 
                data-label='name' 
                onMouseOver={handleValue}>
                <FaUser />
              </button>
              <button 
                className='icon' 
                data-label='email' 
                onMouseOver={handleValue}>
                <FaEnvelopeOpen />
              </button>
              <button 
                className='icon' 
                data-label='age' 
                onMouseOver={handleValue}>
                <FaCalendarTimes />
              </button>
              <button 
                className='icon' 
                data-label='street' 
                onMouseOver={handleValue}>
                <FaMap />
              </button>
              <button 
                className='icon' 
                data-label='phone' 
                onMouseOver={handleValue}>
                <FaPhone />
              </button>
              <button 
                className='icon' 
                data-label='password' 
                onMouseOver={handleValue}>
                <FaLock />
              </button>
            </div>
            {/**here i place the button 'random user' */}
            {/**here the button will generate 'random person' */}
            <button 
                className='btn' 
                type='button' 
                onClick={getPerson}>
              {loading ? 'loading...' : 'random user'}
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
