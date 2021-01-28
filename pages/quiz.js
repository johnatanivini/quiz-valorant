
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import QuizBackground from '../components/QuizComponents/QuizBackground'
import QuizLogo from '../components/QuizLogo/QuizLogo'
import ChevronLeft from '../svgs/chevron-left.svg'
import db from './../db.json'
import QuizContainer from '../components/QuizContainer/QuizContainer'

export default function Quiz () {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Card>
          <Card.Header>
            <h1> <img src={ChevronLeft} /> Pergunta 1 de 6 </h1>
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
