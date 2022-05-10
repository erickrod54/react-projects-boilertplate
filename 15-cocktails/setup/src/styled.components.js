import styled from 'styled-components';
/**Cocktails app version 5 - 'styled.components' file - 
 * Features:
 * 
 *      --> Building 'SectionWrapper' Component.
 *  
 *      --> Building 'CocktailWrapper' Component.
 * 
 * Notes: this two components are based on the styles 
 * classes 'section' and 'cocktail'.
 */

export const SectionWrapper = styled.div`
    padding: 5rem 0;
`

export const CocktailWrapper = styled.article`
      background: var(--mainWhite);
      margin-bottom: 2rem;
      box-shadow: var(--lightShadow);
      transition: var(--mainTransition);
      display: grid;
      grid-template-rows: auto 1fr;
      border-radius: var(--mainBorderRadius);
`