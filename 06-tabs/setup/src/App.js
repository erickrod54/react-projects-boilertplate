import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

/**Tabs App version 1 - features:
 *          ---> builduing states.
 *          ---> fetching data from an API (url).
 *          ---> useEffect to request the data from 
 *               the API.
 *          --->'Conditional Rendering' to switch from
 *               loading state to show the data.      
 */   

function App() {

  /**this is the state for loading */
  const [loading, setLoading ] = useState(true);
  
  /**this is the state for jobs -initial value 'empty'
   * and will be filled by the 'jobs' data from the 
   * API-*/
  const [ jobs, setJobs ] = useState([]);

  /**This state will be use it to run the map, for
   * the multiple tabs
   */
  const [value, setValue] = useState(0);

  /**here i fetch the API */
  const fetchJobs = async() => {
    /**build a response that promise the data */
    const response = await fetch(url);
    
    /**then i keep the 'response' with another 
     * promise in a 'json' object*/
    const newJobs = await response.json();

    /**then i set the 'jobs' state to get the data
     *  'setJobs(newJobs)' */
    setJobs(newJobs);

    /**switch the 'loading' state to 'false' 
     * and proceed to show the data*/
    setLoading(false);

    /**i prompted to verify that the data is there
  * ---i have to get done the useEffect to do so---
     */
    console.log(newJobs)
  };

/**'useEffect' hook show me the data, the second 
 * parameter is to render only once the request */  
useEffect(() => {
  fetchJobs()
}, []);

/**conditional rendering for the loading state */
if (loading) {
  return(
    <section className='section loading'>
      <h1>loading</h1>
    </section>
  )
}

/**here i start to destructure the 'newJobs' data*/
const {company, dates, duties, title} = jobs[value]
  return (
    <>
     {/**<h2>tabs project setup</h2> */}
      <section className='section'>
        <div className='title'>
          <h2>experience</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          {/**btn container */}
          <div className='btn-container'>
            {
              /**here i map the data */
              jobs.map((item, index) => {
                /**
                 * ---the item by id
                 * ---onClick 'setValue' as 'index'
                 *    to show me the current value
                 */
                return(
                  <button 
                    key={item.id} 
                    onClick={() => setValue(index)}
                    /**this style is with an active
                     * class, and re-renders 
                     * selectively the data that 
                     * i need*/ 
                    className=
                    {`job-btn ${index === value && 
                    'active-btn'}`}>
                    {/**the button value is the 'item'
                     * 'company'*/}
                    {item.company}
                  </button>
                )
              })
            }
          </div>
          {/**rendering jobs info data*/}
          <article className='job-info'>
            {/** the 'job' title */}
            <h3>{title}</h3>
            {/**the company name*/}
            <h4>{company}</h4>
            {/**jobs dates*/}
            <p className='job-date'>{dates}</p>
            {/** for 'duties' i map the duties and 
             * give it a fontAwesome style with 
             * angles
            */}
            {duties.map((duty,index) => {
              return(
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon'>
                    
                  </FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
      </section>
    </>
    
  )
}

export default App
