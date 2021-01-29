
import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Card from '../components/Card/Card'
import QuizBackground from '../components/QuizComponents/QuizBackground'
import QuizLogo from '../components/QuizLogo/QuizLogo'
import ChevronLeft from '../svgs/chevron-left.svg'
import db from './../db.json'
import QuizContainer from '../components/QuizContainer/QuizContainer'
import Button from '../components/Button/Button'
import CorrectImage from '../components/ResultQuestion/QuestionCorrect'
import IncorrectImage from '../components/ResultQuestion/QuestionIncorrect'

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

function Resultado ({ results }) {
  const router = useRouter()
  const nome = router.query.nome
  return (
    <Card>
      <Card.Header>
        <h1>
          Resultados
        </h1>
      </Card.Header>
      <Card.Content>
        <br />
        <p>Boa Soldado

          <span
            style={{
              color: db.theme.colors.primary
            }}
          >

            {` ${nome}`}
          </span>
        </p>
        <p> {`você acertou ${results.filter((result) => result === true).reduce((a, b) => a + b, 0)} de ${results.length} questões`}</p>
        <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
          {results.map((result, index) => {
            const questaoIndex = index + 1
            const questao = db.questions[index]
            const alternativa = questao ? questao.alternatives[questao.answer] : []
            return (
              <div
                key={index}
                style={{
                  color: db.theme.colors.contrastText,
                  alignSelf: 'baseline',
                  background: '#00000070',
                  padding: '10px',
                  display: 'flex',
                  minHeight: '40px',
                  flexFlow: 'row',
                  alignItems: 'center',
                  flex: 1,
                  margin: '2px',
                  flexBasis: '100%',
                  textAlign: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span style={{
                  background: '#00000010',
                  padding: '10px',
                  flexBasis: '50px',
                  marginRight: '20px'
                 
                }}
                >{`#${questaoIndex}`}
                </span>
                <span>
                  {`Resposta Correta:`}
                  <br/>
                  <span style={{color:db.theme.colors.primary}}>{alternativa}</span>
                </span>
                {result === true ? <CorrectImage /> : <IncorrectImage />}
              </div>
            )
          })}
        </div>
        <button style={{
          background: db.theme.colors.primary,
          color: db.theme.colors.contrastText,
          padding: '10px',
          width: '100%',
          border: 'none',
          borderRadius: db.theme.borderRadius,
          margin: '25px 0 10px 0'
        }}
        >
          ADICIONAR AO MEU PROJETO
        </button>
      </Card.Content>
      <a
        href='/'
        style={{ color: db.theme.colors.secondary, margin: '10px 0', display: 'block', textAlign: 'center', textDecoration: 'none' }}
      >
        Voltar para a Home
      </a>
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
      <svg xmlns="http://www.w3.org/2000/svg" style={{margin: 'auto',background: 'none', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <g>
        <circle cx="60" cy="50" r="4" fill="#d82fe4">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.67s"></animate>
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.67s"></animate>
        </circle>
        <circle cx="60" cy="50" r="4" fill="#d82fe4">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.33s"></animate>
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.33s"></animate>
        </circle>
        <circle cx="60" cy="50" r="4" fill="#d82fe4">
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="0s"></animate>
            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="0s"></animate>
        </circle>
    </g>
    <g transform="translate(-15 0)">
        <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f95c5c" transform="rotate(90 50 50)"></path>
        <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f95c5c">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
        </path>
        <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#f95c5c">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
        </path>
    </g>
</svg>
    </Card>
  )
}

function QuestionWidget ({ question, questionIndex, totalQuestion, handleSubmit, addResult }) {
  const [selectAlternative, setSelectAlternative] = React.useState(undefined)
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false)
  const isCorrect = selectAlternative === question.answer
  const hasAlternativeSelected = selectAlternative !== undefined

  return (
    <Card>
      <Card.Header>
        <h1>
          <a href='/'>
            <img src={ChevronLeft} style={{ marginRight: '10px' }} />
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
      {/* <pre>
        {JSON.stringify(selectAlternative, false, 4)}
      </pre> */}

      <Card.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <QuestionsWrap>
          <form onSubmit={(evento) => {
            evento.preventDefault()
            setIsQuestionSubmited(true)
            setTimeout(() => {
              addResult(isCorrect)
              handleSubmit()
              setIsQuestionSubmited(false)
              setSelectAlternative(undefined)
            }, 2 * 1000)
          }}
          >
            <Card.ListaQuizesWrap>
              {question.alternatives.map((alternative, index) => {
                const alternativeStatus = isCorrect ? 'correta' : 'errada'
                const isSelected = selectAlternative === index
                const alternativeId = `alternative_${index}`
                return (
                  <label
                    htmlFor={alternativeId}
                    key={index}
                    checked={isSelected}
                    data-selected={isSelected}
                    data-status={alternativeStatus}
                  >
                    {alternative}
                    <input
                      type='radio'
                      onClick={() => setSelectAlternative(index)}
                      name='alternative' id={alternativeId} value={index}
                    />
                  </label>
                )
              })}
            </Card.ListaQuizesWrap>
            {!isQuestionSubmited && <Button text='CONFIRMAR' disabled={!hasAlternativeSelected} />}
            {isQuestionSubmited && isCorrect && <CorrectImage />}
            {isQuestionSubmited && !isCorrect && <IncorrectImage />}
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
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [results, setResults] = React.useState([])

  const totalQuestion = db.questions.length

  const questionIndex = currentQuestion
  const question = db.questions[questionIndex]

  function addResult (result) {
    setResults([
      ...results,
      result
    ])
    console.log(results)
  }

  React.useEffect(() => {
    setTimeout(function () {
      setScreenState(screenStates.QUIZ)
    }, 1 * 2000)
  }, [])
  function handleSubmit () {
    const nextQuestion = questionIndex + 1

    if (nextQuestion < totalQuestion) {
      
      setCurrentQuestion(nextQuestion)
    } else {
      
      setScreenState(screenStates.LOADING)
      
      setTimeout(function () {
        setScreenState(screenStates.RESULT)
      }, 1 * 2000)
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
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingQuiz />}

        {screenState === screenStates.RESULT && (
          <Resultado results={results} />
        )}

      </QuizContainer>
    </QuizBackground>

  )
}
