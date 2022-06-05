import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

/**Quiz app version 2 - 'context' js file - Features: 
 * 
 *      -->Building 'nextQuestion' functionality.
 * 
 * Note: the request is made using 'axios' library
 * in order to friendly handle the API concerns
 * 
 * */

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const tempUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  /**this is for the form */
  const [ waiting, setWaiting ] = useState(true);
  /**this is for fetch data from the API */
  const [ loading, setLoading ] = useState(false);
  /**here the state for the questions value */
  const [ questions, setQuestions ] = useState([]);
  /**the index for the questions*/
  const [ index, setIndex ] = useState(0);
  /**here is the state for the number of correct questions */
  const [ correct, setCorrect ] = useState(0)
  /**here is the state for error */
  const [ error, setError ] = useState(false)
  /**this is the state for modal to show results */
  const [ isModalOpen, setIsModalOpen ] = useState(false)

  /**here i build the fetchQuestions -for now
   * i target 'url' that in this version is empty, i'll use
   * temporal data 'tempUrl'- */
  const fetchQuestions = async(url) => {
    setLoading(true);
    setWaiting(false);

    const response = await axios(url).
    catch(err => console.log(err))

    console.log(response)

    if (response) {
      const data = response.data.results
      console.log('this is data => ', data)
      /**i set the states in order to display 'quizz' app
       * previously defined in 'App' js*/
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false)
        setWaiting(false)
        setError(false)
      }else{
        setWaiting(true)
        setError(true)
      }
    }
  }

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      /**'oldIndex' is the current index plus '1'*/
      const index = oldIndex + 1;

      /**this condition is to prevent the error when i
       * ran out of 'indexes' */
      if (index > questions.length - 1) {
        /**i'll uncomment once a build the 'openModaal' 
         * feature*/

        // openModal()
        //i'll return '0' to take me to the first element
        //and avoid the error 
        return 0;
      }else{
        return index;
      }
    })
  }

  /**here i invoke 'fetchQuestions' passing throught the 
   * 'tempUrl' */
  useEffect(() => {
    fetchQuestions(tempUrl)
  }, [])


  return <AppContext.Provider 
            value={{
              waiting,
              loading,
              questions,
              index,
              correct,
              error,
              isModalOpen,
              nextQuestion
            }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
