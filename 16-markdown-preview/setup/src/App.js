import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkDownWrapper } from './components/styled.components'
import { markdowndata } from './data'

/**Markdown app version 2 - 'App' js file - Features:
 * 
 *      -->Wrapping 'markdown' result value with
 *        with 'ReactMarkdown' Component.
 * 
 * Note: Markdown is a lightweight markup language,
 * in this case the ReactMarkdown Component from 
 * 'react-markdown' library works as a 'pipeline'
 * and everything that i write on markdown will
 * generate html elements 
 * 
 * the code to test is in 'markdown.code.txt' file
 */

function App() {
  const [ markdown, setMarkdown ] = useState('## markdown preview ')
  return(
    <MarkDownWrapper>
      <textarea 
        className='input' 
        value={markdown} 
        onChange={(e) => setMarkdown(e.target.value)}>
        </textarea>
        <article className='result'>
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>  
        </article>
    </MarkDownWrapper>
      
     )
}

export default App
