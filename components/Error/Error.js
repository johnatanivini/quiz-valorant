import React from 'react'
import QuizBackground from '../QuizComponents/QuizBackground'
import db from '../../db.json'
import styled from 'styled-components'

const StatusCode = styled.div`
    display:flex;
    flex: 1;
    width: 100%;

    h1{
        font-size:9em;
        text-align: center;
        box-shadow: 0 0 0 ${db.theme.colors.primary}
    }
`

function Error ({ statusCode }) {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <StatusCode>
        <h1>{statusCode}</h1>
      </StatusCode>
    </QuizBackground>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
