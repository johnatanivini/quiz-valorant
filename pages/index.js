import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import db from './../db.json'
import QuizBackground from '../components/QuizComponents/QuizBackground'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import QuizLogo from '../components/QuizLogo/QuizLogo'
import GitHubCorner from '../components/GitHubCorner/GitHubCorner'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 50px;
  margin: auto 10%;

  form {
    display:flex;
    flex-flow: column nowrap
  }

  form input {
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

export default function Home () {
  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Card>
          <Card.Header>
            <h1>{db.title}</h1>
          </Card.Header>
          <Card.Content>
            <p>{db.description}</p>
            <form onSubmit={function (evento) {
              evento.preventDefault()
              router.push(`/quiz?nome=${name}`)
            }}
            >
              <input
                onChange={function (infoEvento) {
                  setName(infoEvento.target.value)
                }} placeholder='Qual o seu nome soldado?'
              />
              <button type='submit' disabled={name.length === 0}>{name.length === 0 ? 'JOGAR' : 'Let\'s GO ' + name}</button>
            </form>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <h2>Quizes da galera</h2>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão React fez:</p>
            <Card.ListaQuizesWrap>
              <li>
                <a href='https://quiz-pokemon.vercel.app' target='_blank' rel='noreferrer'>Quiz Pokemon</a>
              </li>
              <li>
                <a href='https://quiz-imersao-react.vercel.app/' target='_blank' rel='noreferrer'>Data Science Quiz</a>
              </li>
              <li>
                <a href='https://aluraquiz-base.mpradofilho.vercel.app/' target='_blank' rel='noreferrer'>Quiz - Viajando pelo mundo!</a>
              </li>
            </Card.ListaQuizesWrap>
          </Card.Content>
        </Card>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/johnatanivini/quiz-valorant' />
    </QuizBackground>
  )
}
