import styled from 'styled-components'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 50px;
  margin: auto 10%;

  form {
    display:flex;
    flex-flow: column nowrap
  }

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 20px;
  }
`

export default QuizContainer
