import React from 'react'
import { ThemeProvider } from 'styled-components'
import Quiz from '../../components/screens/Quiz/Quiz'
import db from '../../db.json'
import { useRouter } from 'next/router'

export default function QuizPage () {

  const router = useRouter()
  const nome = router.query.nome

  return (
    <ThemeProvider theme={db.theme}>
      <Quiz externalQuestion={db.questions} externalBg={db.bg} externalLogo={db.logo} nomeQuiz={nome} idQuiz='Valorant' />
    </ThemeProvider>
  )
}
