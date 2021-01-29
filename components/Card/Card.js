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

    li,
    label {
        flex:1;
        list-style:none;
        background-color: #00000070;
        color:${({ theme }) => theme.colors.contrastText};
        margin-bottom:5px;
        border-radius: ${({ theme }) => theme.borderRadius};
        transition:all linear .2s;
        position:relative;
        overflow:hidden;
        padding:10px;
        border: solid 1px transparent;

        &[data-selected="true"] {

            background-color: ${({ theme }) => theme.colors.primary};
            
            &[data-status="correta"] {
                background-color: ${({ theme }) => theme.colors.success};
            }
            &[data-status="errada"] {
                background-color: ${({ theme }) => theme.colors.wrong};
            }
          }

        &:hover{
            background-color:${({ theme }) => theme.colors.terciary};
        }

        &:focus,
        &:focus-within {
            background-color: ${({ theme }) => theme.colors.primary} !important;
            box-shadow: 0px 0px 13px #fff, 0px 2px 7px #f770bd, 1px -2px 10px red;
            border: solid 1px ${({ theme }) => theme.colors.contrastText + '70'};
        }

        input {
            position:absolute;
            top:0;
            left:0;
            left: -30px
        }

        a {
            color:${({ theme }) => theme.colors.contrastText};
            text-decoration:none;
        }
    }

    button {
        flex:1;
        width:100%;
        magin:10px 0;
    }

`

Card.Footer = styled.footer`
  padding: 10px 5%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
`

export default Card
