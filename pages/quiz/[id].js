import React from 'react'
import { ThemeProvider } from 'styled-components';
import Quiz from '../../components/screens/Quiz/Quiz'
import AluraLogo from '../../svgs/AluraLogo.svg'
export default function QuizDaGalera({dbExterno}){
    return (
        <ThemeProvider theme={dbExterno.theme}>
            <Quiz externalQuestion={dbExterno.questions} externalBg={dbExterno.bg} externalLogo={AluraLogo} />
        </ThemeProvider>
    )
}

export async function getServerSideProps(context){
    const [projectName, githubUser] = context.query.id.split('___');

    try {
      const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
        .then((respostaDoServer) => {
          if (respostaDoServer.ok) {
            return respostaDoServer.json()
          }
          throw new Error('Falha em pegar os dados')
        })
        .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
        // .catch((err) => {
        //   // console.error(err);
        // });
  
      // console.log('Infos que o Next da para nós', context.query.id);
      return {
        props: {
          dbExterno
        },
      };
    } catch(err) {
      throw new Error(err)
    }

    
}