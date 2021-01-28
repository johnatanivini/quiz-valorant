import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const ButtonBase = styled.button`
    padding:10px;
    border-radius:${({ theme }) => theme.borderRadius};
    border:none;
    color:${({ theme }) => theme.colors.contrastText};
    margin-top:10px;
    background:${({ theme }) => theme.colors.terciary};
    transition:all linear .5s;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.buttonDisabled}
    }

`

export default function Button ({ name, ...props }) {
  return (
    <>
      <ButtonBase {...props}>
        {name.length === 0 ? 'JOGAR' : 'Let\'s GO ' + name}
      </ButtonBase>
    </>
  )
}

Button.protoTypes = {
  type: propTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: propTypes.node.isRequired
}