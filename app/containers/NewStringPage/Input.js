import styled from 'styled-components';

const Input = styled.input`
  background-color: ${props => props.theme === 'dark' && 'black'};
  color: ${props => props.theme === 'dark' && 'white'};
`;

export default Input;
