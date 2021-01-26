import styled from 'styled-components'
import db from './../db.json'
import QuizBackground from '../components/QuizComponents/QuizBackground'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import QuizLogo from '../components/QuizLogo/QuizLogo'



const QuizContainer = styled.div`
  width:100%;
  max-width:350px;
  padding-top:50px;
  margin:auto 10%;
  @media screen and (max-width:500px){
    margin: auto;
    padding:20px
  }
`

export default function Home() {
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
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <h2>Quizes da galera</h2>
              <p>{'lorem ipsum dolor sit amet...'}</p>
            </Card.Content>
          </Card>

          <Footer />

        </QuizContainer>
    </QuizBackground>
  )
}
