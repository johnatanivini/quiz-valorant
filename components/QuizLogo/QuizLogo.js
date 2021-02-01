import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Link } from '../Link'

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

export default function QuizLogo ({ externalLogo, ...props }) {
  console.log(externalLogo)
  return (
    <QuizLogoWrapper {...props}>
          <img src={externalLogo} height='50' />
    </QuizLogoWrapper>
  )
}
