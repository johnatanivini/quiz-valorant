import styled from 'styled-components'
import Logo from '../../svgs/valorant-logo.svg'
import { useRouter } from 'next/router'

const QuizLogoWrapper = styled.div`
  img {
    margin: auto;
    display: block;
  }

  @media screen and (max-width: 500px) {
    img {
      margin: 0;
    }
  }
`

export default function QuizLogo (props) {
  const router = useRouter()

  const toHome = (e) => {
    e.preventDefault()
    router.push('/')
  }
  return (
    <QuizLogoWrapper {...props}>
      <a onClick={toHome}>
        <img src={Logo} height='50' />
      </a>
    </QuizLogoWrapper>
  )
}
