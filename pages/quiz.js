
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card/Card'
import QuizBackground from '../components/QuizComponents/QuizBackground'
import QuizLogo from '../components/QuizLogo/QuizLogo'
import ChevronLeft from '../svgs/chevron-left.svg'
import db from './../db.json'
import QuizContainer from '../components/QuizContainer/QuizContainer'
import Button from '../components/Button/Button'

const QuestionsWrap = styled.div`
  display:flex;
  flex-flow: column nowrap;

  button{
    outiline: none;
    flex:1
  }
  
  button:focus {
    outline:none
  }
`

function Resultado ({ totalAcertos, totalQuestions }) {
  return (
    <Card>
      <Card.Header>
        <h1>
          Resultado
        </h1>
      </Card.Header>
      <Card.Content>
        <br />
        <p>{`Você acertou ${totalAcertos} de ${totalQuestions}`}</p>
        <br />
        <a href='/' style={{ color: '#fff', marginTop: '10px', display: 'block' }}>{'<'} Voltar </a>
      </Card.Content>
    </Card>
  )
}

function LoadingQuiz () {
  return (
    <Card>
      <Card.Header>
        <h1>
          Carregando cenário...
        </h1>
      </Card.Header>
      <img
        src='https://ik.imagekit.io/hzvvrdrlw8t/image_processing20200619-13778-188wbpk_QadXw34vJ.gif'
        style={{
          width: '100%',
          height: '250px;',
          objectFit: 'cover'
        }}
      />
    </Card>
  )
}

function QuestionWidget ({ question, questionIndex, totalQuestion, handleSubmit }) {
  return (
    <Card>
      <Card.Header>
        <h1>
          <a href='/'>
            <img src={ChevronLeft} style={{ 'margin-right': '10px' }} />
          </a>
          {`Pergunta ${questionIndex + 1} de ${totalQuestion}`}
        </h1>
      </Card.Header>
      <img
        alt='nome da imagem'
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
        src={question.image}
      />

      <Card.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <QuestionsWrap>
          <form
            onSubmit={function (evento) {
              evento.preventDefault()
              handleSubmit()
            }}
          >
            <Card.ListaQuizesWrap>
              {question.alternatives.map((alternative, index) => {
                const alternativeId = `alternative_${index}`
                return (
                  <label
                    htmlFor={alternativeId}
                    key={index}
                  >
                    {alternative}
                    <input type='radio' name='alternative' id={alternativeId} value={index} />
                  </label>
                )
              })}
            </Card.ListaQuizesWrap>
            <Button text='CONFIRMAR' />
          </form>
        </QuestionsWrap>
      </Card.Content>
    </Card>
  )
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESRESULT'
}

export default function Quiz () {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING)

  const totalQuestion = db.questions.length

  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const questionIndex = currentQuestion
  const question = db.questions[questionIndex]

  React.useEffect(() => {
    setTimeout(function () {
      setScreenState(screenStates.QUIZ)
    }, 1 * 2000)
  }, [])
  function handleSubmit () {
    const nextQuestion = questionIndex + 1
    setCurrentQuestion(nextQuestion)

    if (nextQuestion === totalQuestion) {
      setScreenState(screenStates.RESULT)
    }
  }
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            totalQuestion={totalQuestion}
            questionIndex={questionIndex}
            handleSubmit={handleSubmit}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingQuiz />}

        {screenState === screenStates.RESULT && (
          <Resultado totalAcertos='1' totalQuestions={totalQuestion} />
        )}

      </QuizContainer>
    </QuizBackground>

  )
}
