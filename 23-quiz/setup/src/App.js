import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'

/**Quiz app version 1 - 'App' js file - Features: 
 * 
 *      -->Destructuring states from useGlobalContext.
 * 
 *      -->Conditionally rendering 'waiting' state for
 *        the 'SetupForm' Component.
 * 
 *      -->Conditionally rendering 'loading' for the 
 *         loading state.
 * 
 *      -->Accessing to the 'question' object from the API.
 * 
 * Note: this version will keep the basic setup for
 * the quiz app.
 * 
 * */

function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();

  if (waiting) {
    return <SetupForm />
  }

  if (loading) {
    return <Loading />
  }
  console.log('the single question => ', questions[0])
  return(
    <main>quiz app</main>
  )
}

export default App
