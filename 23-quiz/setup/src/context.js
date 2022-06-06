import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

/**Quiz app version 5 - 'context' js file - Features: 
 * 
 *      --> Building 'quiz' state in order to start to 
 *          work on 'SetupForm'.
 * 
 *      --> Building 'handleSubmit' feature.
 * 
 *      --> Building 'handleChange' feature.
 * 
 *      --> Providing features and state throught the
 *          Provider.       
 * 
 * Note: Extremily important 'quiz' state is build with an
 * 'object key' value, so vales must match with the API in
 * order to get the data right later
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
  /**this is the state for 'quiz' handle 'SetupForm'
   * features*/

  const [ quiz, setQuiz ] = useState({ 
    amount: 10, 
    category: 'sports', 
    difficulty:'easy' })

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

      if (index > questions.length - 1) {
        /**here i uncomment openModal */
        openModal()
        return 0;
      }else{
        return index;
      }
    })
  }

  /**here i build the functionality to increase the 
   * counter based on correct answers*/
  const checkAnswer = value => {
    if (value) {
      /**i 'setCorrect' with the counter i get 'true'*/
      setCorrect((oldState) => oldState + 1 )
    }
    /**if value is 'false' triggers next question*/
    nextQuestion()
  }

  /**Here i build 'openModal' to trigger the modal*/
  const openModal = () => {
    setIsModalOpen(true)
  }

  /**Here i build 'closeModal' to close the modal*/
  const closeModal = () => {
    setWaiting(true)
    setCorrect(0)
    setIsModalOpen(false)
  }

const handleChange = (e) => {
  console.log(e);
}


const handleSubmit = (e) => {
  e.preventDefault();
}


  return <AppContext.Provider 
            value={{
              waiting,
              loading,
              questions,
              index,
              correct,
              error,
              isModalOpen,
              nextQuestion,
              checkAnswer,
              closeModal,
              quiz,
              handleChange,
              handleSubmit
            }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
