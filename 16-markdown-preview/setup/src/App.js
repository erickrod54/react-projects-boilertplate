import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkDownWrapper } from './components/styled.components'

/**Markdown app version 1 - 'App' js file - Features:
 * 
 *      -->Building 'Markdown app' initial setup.
 * 
 *      -->Importing and Placing 'MarkDownWrapper' to
 *         style 'Markdown app'.
 * 
 * Note: This naviagation is made using now is using 
 * react-router version 6
 */

function App() {
  const [ markdown, setMarkdown ] = useState('## markdown preview')
  return(
    <MarkDownWrapper>
      <textarea 
        className='input' 
        value={markdown} 
        onChange={(e) => setMarkdown(e.target.value)}>
        </textarea>
        <article className='result'>{markdown}</article>
    </MarkDownWrapper>
      
     )
}

export default App
