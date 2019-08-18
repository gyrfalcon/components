// @flow strict
import * as React from 'react'

import buttonFn from './button.jsx'
import visibilityFn from './visibility.jsx'

export type DataProps = {
  cancelButtonAriaLabel: string,
  cancelButtonContents: React.Node,
  children: React.Node,
  controlsDisabled: bool,
  modalId: string,
  okButtonAriaLabel: string,
  okButtonContents: React.Node,
  title: string,
  visible: bool,
}

export type ActionProps = {
  onCancel: () => void,
  onOk: () => void,
}

export default (
  buttonBarClass: string,
  cancelButtonClass: string,
  hiddenClass: string,
  modalClass: string,
  modalContentClass: string,
  okButtonClass: string,
  titleBarClass: string,
  titleClass: string,
  visibleClass: string,
) => {
  const OkButton = buttonFn(okButtonClass)
  const CancelButton = buttonFn(cancelButtonClass)
  const Visibility = visibilityFn(visibleClass, hiddenClass)

  const Modal = ({
    cancelButtonAriaLabel,
    cancelButtonContents,
    children,
    controlsDisabled,
    modalId,
    okButtonAriaLabel,
    okButtonContents,
    onCancel,
    onOk,
    title,
    visible,
  }: DataProps & ActionProps) => {
    const modalVisibility = visible
      ? 'visible'
      : 'hidden'
    return (
      <Visibility
        visibility={modalVisibility}>
        <div className={modalClass} data-id={`modal-${modalId}`}>
          <div className={titleBarClass}>
            <h1 className={titleClass} data-id={`modal-${modalId}-title`}>{title}</h1>
          </div>
          <div className={modalContentClass}>{children}</div>
          <div className={buttonBarClass}>
            <OkButton
              ariaLabel={okButtonAriaLabel}
              buttonId={`modal-${modalId}-ok`}
              disabled={controlsDisabled}
              onPress={onOk}
            >
              {okButtonContents}
            </OkButton>
            <CancelButton
              ariaLabel={cancelButtonAriaLabel}
              buttonId={`modal-${modalId}-cancel`}
              disabled={controlsDisabled}
              onPress={onCancel}
            >
              {cancelButtonContents}
            </CancelButton>
          </div>
        </div>
      </Visibility>
    )
  }

  return Modal
}
