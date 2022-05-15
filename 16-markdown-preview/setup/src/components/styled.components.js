import styled from 'styled-components'

/**Markdown app version 2 - 'styled.component' js file - 
 * Features:
 * 
 *      -->Adding Styles for 'headings'
 * 
 * Note: also can be added a 
 * custom style for every element that goes
 * throught the 'ReactMarkdown' pipeline
 */

export const MarkDownWrapper = styled.section`

  padding: 4rem;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;

  h2,
  h3,
  h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  } 
  h1 {
    font-size: 2.5rem;
  }
  h2 {
  font-size: 2rem;
  }
  h3 {
  font-size: 1.25rem;
  }
  h4 {
  font-size: 0.875rem;
}

.input {
  border-color: transparent;
  border-radius: var(--radius);
  font-size: 1.2rem;
  line-height: 2;
  box-shadow: var(--dark-shadow);
  min-height: 20vh;
}
`