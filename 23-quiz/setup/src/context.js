import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

/**Quiz app version 7 - 'context' js file - Features: 
 * 
 * 
 *      --> Building 'handleSubmit' full feature.
 * 
 *     
 * 
 * Note: this full feature will target by 'name' each input
 * from 'SetupForm' with his value -can be number of questions
 * category and difficulty - and using 'SetQuiz' as an object
 * key values i can make a 'controlled input' because i'll
 * now that the values i'll get will be those three
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
  const name = e.target.name;
  const value = e.target.value;

  /**As 'handleChange' functionality gets multiple values
   * as 'number of questions', 'category', and 'difficulty'
   * all of these dinamicly because i'm target them above
   * using the att 'name' of each input -setQuiz as 'key 
   * object' is to handle the changes more easy-  
  */
  console.log('name selected ==>', name, ', value in it ==>', value)

  /**checking out on Components i can verify
   * how values change dinamicly*/

  /**i spread first, and then name with 
   * the value selected */
  setQuiz({ ...quiz, [name]: value})
}


const handleSubmit = (e) => {
  e.preventDefault();

  /**i destructure the values to use them to
   * build the 'url'*/
  const { amount, category, difficulty } = quiz;

  /**i take as reference the 'tempUrl' to build
   * this one, i'm gonna use it to once setup is 
   * done get the API data back*/
  const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&${difficulty}&type=multiple`

  /**i fetch the 'url' that i build*/
  fetchQuestions(url)
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
