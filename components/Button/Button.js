import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
    padding:10px;
    border-radius:${({ theme }) => theme.borderRadius};
    border:none;
    color:${({ theme }) => theme.colors.contrastText};
    margin-top:10px;
    background:${({ theme }) => theme.colors.terciary};
`

export default Button

Button.protoTypes = {
  type: propTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: propTypes.node.isRequired
}
