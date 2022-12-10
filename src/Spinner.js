import styled from 'styled-components'

const Spinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #2c3e50; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: auto;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export { Spinner }
