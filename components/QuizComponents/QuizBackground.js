import styled from 'styled-components'


const QuizBackground = styled.div`

  background: url(${({backgroundImage})=>backgroundImage});
  flex:1;
  width:100%;
  background-size: cover;
  background-position:bottom rigth;
  background-color: ${({theme})=> theme.colors.mainBg};
  transition:all linear .2s;

  @media screen and (max-width:500px){
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
      background-repeat:no-repeat;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child{
       position:relative;
       z-index:10;
    }
  }
  @media screen and (max-width:960px){
    background-position-x: -200px
  }


`

export default QuizBackground