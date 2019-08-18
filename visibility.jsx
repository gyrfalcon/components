// @flow strict
import * as React from 'react'

type VisibilityState =
  | 'visible'
  | 'hidden'

type Props = {
  visibility: VisibilityState,
  children: React.Node,
}

export default (visibleClassName: string, hiddenClassName: string) => {
  const Visibility = ({ visibility, children }: Props) => {
    let className
    switch (visibility) {
      case 'visible':
        className = visibleClassName
        break
      case 'hidden':
        className = hiddenClassName
        break
    }
    return (
      <div className={className}>
        {children}
      </div>
    )
  }

  return Visibility
}
