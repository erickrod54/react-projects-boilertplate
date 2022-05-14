import styled from 'styled-components'

/**Markdown app version 1 - 'styled.component' js file - 
 * Features:
 * 
 *      -->Building'MarkDownWrapper' to
 *         style 'Markdown app'.
 * 
 * Note: This 'MarkDownWrapper' will wrap the 'markdown' app.
 */

export const MarkDownWrapper = styled.section`

  padding: 4rem;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;

.input {
  border-color: transparent;
  border-radius: var(--radius);
  font-size: 1.2rem;
  line-height: 2;
  box-shadow: var(--dark-shadow);
  min-height: 20vh;
}
`