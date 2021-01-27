
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import QuizBackground from '../components/QuizComponents/QuizBackground'
import QuizLogo from '../components/QuizLogo/QuizLogo'
import db from './../db.json'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 50px;
  margin: auto 10%;

  form {
    display:flex;
    flex-flow: column nowrap
  }

  form input[type="text"] {
    padding:10px;
    border-radius:${({ theme }) => theme.borderRadius};
    border:solid 1px ${({ theme }) => theme.colors.secondary};
    color:${({ theme }) => theme.colors.terciary};
    background:transparent
  }

  form input:focus{
    outline:0
  }

  form button {
    padding:10px;
    border-radius:${({ theme }) => theme.borderRadius};
    border:none;
    color:${({ theme }) => theme.colors.contrastText};
    margin-top:10px;
    background:${({ theme }) => theme.colors.terciary};
  }

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 20px;
  }

`

export default function Quiz () {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Card>
          <Card.Header>
            <h1>Pergunta 1 de 6 </h1>
          </Card.Header>
          <Card.Content>

            <h2>Primeira pergunta do quiz?</h2>
            <p>Considere somente o universo Valorant</p>

            <form>
              <Card.ListaQuizesWrap>
                <li>
                  <a>Alternativa 1</a>
                </li>
                <li>
                  <a>Alternativa 2</a>
                </li>
                <li>
                  <a>Alternativa 3</a>
                </li>
                <li>
                  <a>Alternativa 4</a>
                </li>
              </Card.ListaQuizesWrap>
              <button disabled>CONFIRMAR</button>
            </form>
          </Card.Content>
        </Card>
        <Footer />
      </QuizContainer>
    </QuizBackground>
  )
}
