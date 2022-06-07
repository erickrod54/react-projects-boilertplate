import React from 'react'
import { useGlobalContext } from './context'

/**Quiz app version 6 - 'SetupForm' Component - 
 * Features: 
 * 
 *      --> Destructuring props and functionality to
 *          render the 'SetupForm'
 * 
 *      --> Building an input to handle the number
 *          of questions - amount prop -
 * 
 *      --> Building a JSX 'select' tag to select a
 *          category.
 * 
 *      --> Building a JSX 'select' tag to select a
 *          difficulty.        
 * 
 * Note: 'SetupForm' is the Component that is going
 * to make a 'quiz' like a config setup to start.
 * 
 * the names are extremily important to match because
 * targeting them, i can make the functionality to 
 * handleChange.
 * 
 * So must match:
 * 
 * -- 'name for input' > 'name for prop' > 'name API prop' --
 * */

const SetupForm = () => {
  const { quiz, 
          handleChange, 
          handleSubmit, 
          error } = useGlobalContext();

          console.log(quiz.amount)
          console.log(quiz.category)

  return(
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>setup quiz</h2>
          {/**amount */}
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input 
                type='number' 
                name='amount' 
                id='amount' 
                value={quiz.amount} 
                onChange={handleChange}
                className='form-input'
                min={1}
                max={50}
                />
          </div>

          {/**select category */}
          <div className='form-control'>
            <label htmlFor='category'>
              category
            </label>
            <select 
                name='category' 
                id='category' 
                className='form-input' 
                value={quiz.category} 
                onChange={handleChange}>

                  <option value='sports'>sports</option>
                  <option value='history'>history</option>
                  <option value='politics'>politics</option>
                </select>
          </div>
          {/**select difficulty */}
          <div className='form-control'>
            <label htmlFor='difficulty'>
              difficulty
            </label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
                  <option value='easy'>easy</option>
                  <option value='medium'>medium</option>
                  <option value='hard'>hard</option>
            </select>
          </div>
          {error && <p className='error'>
            can't generate questions, please try different options
            </p>}
           <button 
            type='submit' 
            onClick={handleSubmit}
            className='submit-btn'
            >
            start  
            </button> 
        </form>
      </section>
    </main>
  )
}

export default SetupForm
