// @flow strict
import * as React from 'react'

type VisibilityState =
  | 'visible'
  | 'hidden'

type Props = {
  visibility: VisibilityState,
  children: React.Node,
}

export default (visibleClass: string, hiddenClass: string) => {
  const Visibility = ({ visibility, children }: Props) => {
    let className
    switch (visibility) {
      case 'visible':
        className = visibleClass
        break
      case 'hidden':
        className = hiddenClass
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
