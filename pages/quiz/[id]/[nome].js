import React from 'react'
import { ThemeProvider } from 'styled-components';
import Quiz from '../../../components/screens/Quiz/Quiz'
import AluraLogo from '../../../svgs/AluraLogo.svg'
import Error from '../../../components/Error/Error'

export default function QuizDaGalera({dbExterno,nomeQuiz,projectName,errorCode}){

    if(errorCode){  
      return <Error statusCode={errorCode} />
    }

    return (
        <ThemeProvider theme={dbExterno.theme}>
            <Quiz externalQuestion={dbExterno.questions} externalBg={dbExterno.bg} externalLogo={AluraLogo} nomeQuiz={nomeQuiz} idQuiz={projectName} />
        </ThemeProvider>
    )
}

export async function getServerSideProps(context){

    
    const [projectName, githubUser] = context.query.id.split('___')
    const nomeQuiz = context.query.nome


      const data = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)

      const  errorCode = data.ok ? false : data.statusCode

      if(errorCode){
        context.statusCode = errorCode
      }

      const dbExterno = await data.json()
       
      // console.log('Infos que o Next da para nós', context.query.id);
      return  {
        props: {
          errorCode,
          dbExterno,
          nomeQuiz,
          projectName
        }
    }


    
}