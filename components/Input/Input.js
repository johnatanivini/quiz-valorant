import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const InputBase = styled.input`

    padding:10px;
    border-radius:${({ theme }) => theme.borderRadius};
    border:solid 1px ${({ theme }) => theme.colors.secondary};
    color:${({ theme }) => theme.colors.terciary};
    background:transparent;

  &:focus{
    outline:0
  }

`

export default function Input ({ onChange, placeholder, ...props }) {
  return (
    <>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </>
  )
}

Input.default = {
  name: ''
}

Input.propTypes = {
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired
}
