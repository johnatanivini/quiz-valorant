import styled from 'styled-components'

const Card = styled.div`
    border:1px solid ${({ theme }) => theme.colors.primary};
    margin-top:25px;
    margin-bottom:24px;
    background-color:${({ theme }) => theme.colors.mainBg};
    overflow:hidden;
    border-radius:5px;

    h1,h2,h3 {
        font-size:18px;
        font-weigth:700;
        line-height:1;
        margin-bottom:0;
        color: ${({ theme }) => theme.colors.primary}
    }

    p {
        font-size:14px;
        font-weight:400;
        line-heigth:1;
        color: ${({ theme }) => theme.colors.secondary}
    }

`

Card.Header = styled.header`
    padding:10px 5%;
    background:${({ theme }) => theme.colors.primary};

    * {
        margin:0
    }

    h1 {
        color:${({ theme }) => theme.colors.contrastText}
    }    
`

Card.Content = styled.div`
    padding:10px 5%;

    h2 {
        color:${({ theme }) => theme.colors.contrastText}
    }

`

Card.ListaQuizesWrap = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    flex-flow: column nowrap;

    li {
        flex:1;
        list-style:none;
        background-color: #00000070;
        color:${({ theme }) => theme.colors.contrastText};
        margin-bottom:5px;
        border-radius: ${({ theme }) => theme.borderRadius};
        transition:all linear .2s
    }

    li:hover {
        background-color:${({ theme }) => theme.colors.terciary};
    }

    li  a {
        color:${({ theme }) => theme.colors.contrastText};
        text-decoration:none;
        display:block;
        padding:10px;
        font-size:0.8em
        
        
    }


`

Card.Footer = styled.footer`
  padding: 10px 5%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
`

export default Card
