// @flow strict
import * as React from 'react'

export type DataProps = {
  ariaLabel: string,
  buttonId: string,
  children: React.Node,
  disabled: bool,
}

export type ActionProps = {
  onPress: () => void,
}

export default (buttonClass: string) => {
  const Button = ({
    ariaLabel,
    buttonId,
    children,
    disabled,
    onPress,
  }: DataProps & ActionProps
) => {
    return (
      <button
        aria-label={ariaLabel}
        className={buttonClass}
        disabled={disabled}
        data-id={`button-${buttonId}`}
        onClick={onPress}
        >
        {children}
      </button>
    )
  }

  return Button
}
