
import React, {useEffect, useState} from 'react'
import fire from '../../../config/fire-config.js'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Card from '../../Card/Card'
import QuestionIncorrect from '../../ResultQuestion/QuestionIncorrect'
import QuestionCorrect from '../../ResultQuestion/QuestionCorrect'
import ChevronLeft from './../../../svgs/chevron-left.svg'
import Button from '../../Button/Button'
import QuizBackground from '../../QuizComponents/QuizBackground'
import QuizContainer from '../../QuizContainer/QuizContainer'
import QuizLogo from '../../QuizLogo/QuizLogo'
import { Link } from '../../Link'
import { motion } from 'framer-motion'


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

function Resultado ({ results, nomeQuiz, externalQuestion }) {


  return (
    <Card
      as={motion.div}
      initial={{ x: '-100px', opacity: '0' }}
      animate={{ x: '0', opacity: '1' }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 0
      }}
    >
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
              color: ({ theme }) => theme.colors.secondary
            }}
          >
            {` ${nomeQuiz}`}
          </span>
        </p>
        <p> {`você acertou ${results.filter((result) => result === true).reduce((a, b) => a + b, 0)} de ${results.length} questões`}</p>
        <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
          {results.map((result, index) => {
            const questaoIndex = index + 1
            const questao = externalQuestion[index]
            const alternativa = questao ? questao.alternatives[questao.answer] : []
            return (
              <div
                key={index}
                style={{
                  color: ({ theme }) => theme.colors.contrastText,
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
                  marginRight: '20px',
                  color: ({ theme }) => theme.colors.contrastText
                }}
                >{`#${questaoIndex}`}
                </span>
                <span style={{ color: ({ theme }) => theme.colors.contrastText }}>
                  Resposta Correta:
                  <br />
                  <span
                    style={{ color: ({ theme }) => theme.colors.primary }}
                  >{alternativa}
                  </span>
                </span>
                {result === true ? <QuestionCorrect /> : <QuestionIncorrect />}
              </div>
            )
          })}
        </div>
        <button style={{
          backgroundColor: ({ theme }) => theme.colors.primary,
          color: ({ theme }) => theme.contrastText,
          padding: '10px',
          width: '100%',
          border: 'none',
          borderRadius: ({ theme }) => theme.borderRadius,
          margin: '25px 0 10px 0'
        }}
        >
          ADICIONAR AO MEU PROJETO
        </button>
      </Card.Content>
      <Link href='/' style={{ color: ({ theme }) => theme.colors.contrastText, margin: '10px 0', display: 'block', textAlign: 'center', textDecoration: 'none' }}>

          Voltar para a Home
        
      </Link>
    </Card>
  )
}

function LoadingQuiz () {
  return (
    <Card
      as={motion.div}
      initial={{ y: '-100px' }}
      animate={{ y: '100%' }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 1
      }}
    >
      <Card.Header>
        <h1>
          Carregando cenário...
        </h1>
      </Card.Header>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
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
    <Card
      as={motion.div}
      initial={{ y: '100px', scale: 0.1 }}
      animate={{ y: '0', scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 60
      }}
    >
      <Card.Header>
        <h1>
          <Link href='/'>
           
              <img src={ChevronLeft} style={{ marginRight: '10px' }} />
           
          </Link>
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
                    data-status={isQuestionSubmited && alternativeStatus}
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
            {isQuestionSubmited && isCorrect && <QuestionCorrect />}
            {isQuestionSubmited && !isCorrect && <QuestionIncorrect />}
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

const FlexRow = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

export default function Quiz ({ externalQuestion, externalBg, externalLogo, nomeQuiz, idQuiz}) {
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [results, setResults] = useState([])

  const totalQuestion = externalQuestion.length
  const questionIndex = currentQuestion
  const question = externalQuestion[questionIndex]


  function addResult (result) {
    setResults([
      ...results,
      result
    ])
    console.log(results)
  }

  useEffect(() => {
    let isSubscripted =  true
    setTimeout(function () {
      setScreenState(screenStates.QUIZ)
    }, 1 * 2000)


    return () => (isSubscripted =  false)

  }, [])

  function handleSubmit () {
    const nextQuestion = questionIndex + 1
    if (nextQuestion < totalQuestion) {
      setCurrentQuestion(nextQuestion)
    } else {

      setScreenState(screenStates.LOADING)

      const acertos = results.filter((result) => result === true).reduce((a, b) => a + b, 0)
        const total = results.length

        fire.firestore()
        .collection(idQuiz)
        .add({
          'user':nomeQuiz,
          'acertos': acertos,
          'total': total
        })

      setTimeout(function () {
        setScreenState(screenStates.RESULT)
      }, 1 * 2000)
    }
  }
  return (

    <QuizBackground backgroundImage={externalBg}>
      <FlexRow>
      <QuizContainer>
        <QuizLogo externalLogo={externalLogo} />
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
          <Resultado results={results} nomeQuiz={nomeQuiz} externalQuestion={externalQuestion} />
        )}

      </QuizContainer>

       <Pontuacoes idQuiz={idQuiz} />


       </FlexRow>

    </QuizBackground>

  )
}


function RankSilver(){
  return (
    <img src="/silver-3.png"  height="50"  />
  )
}

function RankBronze(){
  return (
    <img src="/bronze-3.png"  height="50"  />
  )
}

function RankPatina(){
  return (
    <img src="/platina-3.png"  height="50" />
  )
}

function RankOuro(){
  return (
    <img src="/gold-3.png"  height="50"  />
  )
}

function RankRadiante(){
  return (
    <img src="/radiant.png" height="50" />
  )
}

function Pontuacoes({idQuiz}){

  const [pontos, setPontos] = useState([])

  const media = (acertos) => {
    return acertos / pontos.length * 100
  }


  useEffect(() => {

      let isSubscribed = true;

      const quizePontos = fire.firestore().collection(idQuiz)
      const orders = quizePontos.orderBy('acertos','desc')

      orders.onSnapshot(snap => {
        const pontos = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setPontos(pontos)

      })

      return () => (isSubscribed = false)

  },[])

  return (
    
     <QuizContainer

       as={motion.div}
      initial={{ y: '300px', opacity:0}}
      animate={{ y: '0', opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 60,
        duration:'2s'
      }}
     
     >
          <Card>
            <Card.Header>
              <h1>Pontuações</h1>
            </Card.Header>
            <Card.Content>  
              {
                pontos.map( ponto => {

                    const resultMedia  = media(ponto.acertos)

                    return (
                <div
                  key={ponto.id}
                  style={{
                    color: ({ theme }) => theme.colors.contrastText + '!important',
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
                          color: ({theme}) => theme.colors.primary + '!important',
                          flexBasis: '20%'
                        }}
                        >
                        {ponto.user}
                        </span>
                        <span>{ponto.acertos} </span>
                        <span>
                          
                          {resultMedia <= 20 && <RankSilver />}

                          {resultMedia > 21 && resultMedia < 40 && media && <RankBronze />}
                          {resultMedia > 40 && resultMedia < 60 &&  <RankPrata />}
                          {resultMedia > 60 && resultMedia < 80 &&  <RankOuro />}
                          {resultMedia > 80 && resultMedia < 90 &&  <RankPlatina />}
                          {resultMedia > 90 &&  <RankRadiante />}
                        </span>
                    </div>
                    )
                })
              }
              {pontos.length === 0 &&  <div
                 
                  style={{
                    color: ({ theme }) => theme.colors.contrastText + '!important',
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
                          color: ({theme}) => theme.colors.primary + '!important'
                        }}
                        >
                        Nenhuma pontuação no momento!</span>
                    </div>
                    
                }
            </Card.Content>
          </Card>
      </QuizContainer> 
    
  )
}
