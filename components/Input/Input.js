import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

Input.PropTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
