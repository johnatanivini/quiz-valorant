import React from 'react'
import QuizBackground from '../QuizComponents/QuizBackground'
import db from '../../db.json'
import styled from 'styled-components'
import { Link } from '../Link'
import ChevronLeft from '../../svgs/chevron-left.svg'

const StatusCode = styled.div`


        display:flex;
        flex: 1;
        width: 100%;
        justify-content:center;
        align-items: center;
        height: 100vh;
        width:100%;
        flex-flow: column nowrap;

    h1{
        font-size:9em;
        text-align: center;
        text-shadow: 2px 2px 80px ${db.theme.colors.mainBg},2px 2px 80px ${db.theme.colors.mainBg}, 2px 2px 2px ${db.theme.colors.contrastText}, 2px -50px 2px ${db.theme.colors.secondary}, 2px 80px 2px ${db.theme.colors.primary}, 2px 2px 80px ${db.theme.colors.primary}
    }
    a {
        color: ${db.theme.colors.contrastText};
        text-decoration:none;
        border-radius: ${db.theme.borderRadius};
        border:solid 2px ${db.theme.colors.primary};
        background: ${db.theme.colors.primary}70;
        padding:10px;

    }
`

function Error ({ statusCode, statusText }) {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <StatusCode>
        <h1>{statusCode}</h1>
        <Link href='/'>
          <img src={ChevronLeft} style={{ marginRight: '10px' }} /> Voltar
        </Link>
      </StatusCode>

    </QuizBackground>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
