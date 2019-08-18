// @flow strict
import * as React from 'react'

export type HeaderProps = {
  children: React.Node,
}

export default (headerClass: string) => {
  const Header = (props: HeaderProps) => {
    return (
      <div data-id="header" className={headerClass}>
        <h1>{props.children}</h1>
      </div>
    )
  }

  return Header
}
