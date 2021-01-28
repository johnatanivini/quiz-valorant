
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import QuizBackground from '../components/QuizComponents/QuizBackground'
import QuizLogo from '../components/QuizLogo/QuizLogo'
import ChevronLeft from '../svgs/chevron-left.svg'
import db from './../db.json'
import QuizContainer from '../components/QuizContainer/QuizContainer'
import Button from '../components/Button/Button'

export default function Quiz () {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Card>
          <Card.Header>
            <h1>
              <a href='/'>
                <img src={ChevronLeft} style={{ 'margin-right': '10px' }} />
              </a>
              Pergunta 1 de {db.questions.length}
            </h1>
          </Card.Header>
          <img
            alt='nome da imagem'
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover'
            }}
            src='https://placehold.it/400x400'
          />

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
              <Button disabled name='CONFIRMAR' />
            </form>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <h1>
              Carregando...
            </h1>
          </Card.Header>
          <Card.Content>
            [desafio do loading]
          </Card.Content>
        </Card>
        <Footer />
      </QuizContainer>
    </QuizBackground>

  )
}
