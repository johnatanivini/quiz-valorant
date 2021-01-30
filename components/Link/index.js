import React from 'react'
import Nextlink from 'next/link'

export function Link ({ children, href, ...props }) {
  return (
    <Nextlink href={href} passHref>
      <a {...props}>{children}</a>
    </Nextlink>
  )
}
