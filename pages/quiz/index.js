import React from 'react'
import { ThemeProvider } from 'styled-components'
import Quiz from '../../components/screens/Quiz/Quiz'
import db from '../../db.json'

export default function QuizPage () {
  return (
    <ThemeProvider theme={db.theme}>
      <Quiz externalQuestion={db.questions} externalBg={db.bg} externalLogo={db.logo} nomeQuiz="Valorant" />
    </ThemeProvider>
  )
}
