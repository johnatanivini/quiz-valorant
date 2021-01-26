
import styled from 'styled-components'

import Logo from '../../svgs/valorant-logo.svg'


const QuizLogoWrapper = styled.div`

    img {
        margin:auto;
        display:block;
    }

    @media screen and ( max-width:500px){

        img {
            margin:0;
        }
    }
`

export default function QuizLogo(props) {
    return(

        <QuizLogoWrapper {...props}>
               <img src={Logo} height="50" /> 
        </QuizLogoWrapper>
    )
}