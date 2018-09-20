import styled from "styled-components";

const Container = styled.div`
  padding: 0 2rem;

  ${props => props.fullWidth ? 
  'width: 100%;'
  :
  'max-width: 80rem;' +
  'margin: 0 auto'
  }
  
  ${props => props.theme.media.mobile`
    padding: 0 1rem;
  `}
`;

export default Container;
