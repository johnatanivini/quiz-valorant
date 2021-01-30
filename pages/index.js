import React from 'react'
import { useRouter } from 'next/router'
import db from './../db.json'
import QuizBackground from '../components/QuizComponents/QuizBackground'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import QuizLogo from '../components/QuizLogo/QuizLogo'
import GitHubCorner from '../components/GitHubCorner/GitHubCorner'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import QuizContainer from '../components/QuizContainer/QuizContainer'
import { Link } from '../components/Link'
import { motion } from 'framer-motion'

export default function Home () {
  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo
          externalLogo={db.logo}
          as={motion.div}
          initial={{ y: '-100px', opacity: '0' }}
          animate={{ y: '0', opacity: '1' }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 0
          }}
        />
        <Card
          as={motion.div}
          initial={{ x: '-100px', opacity: '0' }}
          animate={{ x: '0', opacity: '1' }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 1
          }}

        >
          <Card.Header>
            <h1>{db.title}</h1>
          </Card.Header>
          <Card.Content>
            <p>{db.description}</p>

            <form onSubmit={(evento) => {
              evento.preventDefault()
              router.push(`/quiz?id=${name}`)
            }}
            >
              <Input
                onChange={(infoEvento) => setName(infoEvento.target.value)}
                placeholder='Qual o seu nome soldado?'
                name='name'
                value={name}
              />
              <Button disabled={name.length === 0} text={name.length === 0 ? 'JOGAR' : 'Let\'s GO ' + name} />
            </form>
          </Card.Content>
        </Card>

        <Card
          as={motion.div}
          initial={{ x: '100px', opacity: '0' }}
          animate={{ x: '0', opacity: '1' }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 1.5
          }}
        >
          <Card.Content>
            <h2>Quizes da galera</h2>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão React fez:</p>
            <Card.ListaQuizesWrap>
              {db.external.map((link, index) => {
                const [projeto, user] = new URL(link).host.split('.')
                return (
                  <li
                    key={index}
                  >
                    <Link
                      href={name.length !== 0 ? `/quiz/${projeto}___${user}` : ''}
                    >
                      <a>{`${projeto}/${user}`}</a>
                    </Link>
                  </li>
                )
              })}
            </Card.ListaQuizesWrap>
          </Card.Content>
        </Card>

        <Footer
          as={motion.div}
          initial={{ y: '150px', opacity: '0' }}
          animate={{ y: '0', opacity: '1' }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 25,
            duration: 2
          }}
        />
      </QuizContainer>
      <GitHubCorner
        projectUrl='https://github.com/johnatanivini/quiz-valorant'
      />
    </QuizBackground>
  )
}
