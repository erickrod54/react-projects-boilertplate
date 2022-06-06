import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'

/**Quiz app version 4 - 'App' js file - Features: 
 * 
 *     --> Uncommenting 'Modal' Component to
 *         start adding the data. 
 * 
 * Note: this component was commented on previous versions
 * for previous development porpouses.
 * 
 * */

function App() {

  const { waiting, 
          loading, 
          questions, 
          index, 
          correct,
         nextQuestion,
         checkAnswer } = useGlobalContext();

  if (waiting) {
    return <SetupForm />
  }

  if (loading) {
    return <Loading />
  }
  //console.log('all the questions => ', questions)
  console.log('the single question => ', questions[0])

  /**here i destructure the props that i need from a 
   * single question - API side*/
  const { question, 
          incorrect_answers, 
          correct_answer } = questions[index] 

  /**here i spread the props that i need from a 
  * single question for answers - to map - API side*/
  const answers = [...incorrect_answers, correct_answer]

  return(
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : {correct} / {index}
        </p>
        <article className='container'>
          {/**i apply this att 'dangerouslySetInnerHTML',
           * because the question is not in 'string' format
           * so is in html, so the att render everything as
           * a string -i have to be aware this att is usually
           * use to inject malicious code, this case i'm using
           * to handle API request, but must not place by
           * the user side- for use only with self-closed tag
          */}
          <h2 dangerouslySetInnerHTML={{__html: question}}/>
          <div className='btn-container'>
            {answers.map((answer, index) => {
              /**in the map trigger 'checkAnswer' */
              return(
                  <button 
                  key={index} 
                  className='answer-btn' 
                  onClick={() => checkAnswer(correct_answer === answer) }
                  dangerouslySetInnerHTML={{__html: answer}}/>)
            })}
          </div>
          <button className='next-question' onClick={nextQuestion}>
            next question
          </button>
        </article>
      </section>
    </main>
  )
}

export default App
