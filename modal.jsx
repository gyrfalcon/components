// @flow strict
import * as React from 'react'

import buttonFn from './button.jsx'
import Visiblity from './visibility.jsx'

export type DataProps = {
  okButtonContents: React.Node,
  cancelButtonContents: React.Node,
  children: React.Node,
  controlsDisabled: bool,
  modalId: string,
  title: string,
  visible: bool,
}

export type ActionProps = {
  onOk: () => void,
  onCancel: () => void,
}

export default (
  buttonBarClass: string,
  cancelButtonClass: string,
  modalClass: string,
  modalContentClass: string,
  okButtonClass: string,
  titleBarClass: string,
  titleClass: string,
) => {
  const OkButton = buttonFn(okButtonClass)
  const CancelButton = buttonFn(cancelButtonClass)

  const Modal = ({
    cancelButtonContents,
    controlsDisabled,
    children,
    modalId,
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
      <Visiblity
        visibility={modalVisibility}>
        <div className={modalClass} data-id={`modal-${modalId}`}>
          <div className={titleBarClass}>
            <h1 className={titleClass} data-id={`modal-${modalId}-title`}>{title}</h1>
          </div>
          <div className={modalContentClass}>{children}</div>
          <div className={buttonBarClass}>
            <OkButton
              buttonId={`modal-${modalId}-ok`}
              disabled={controlsDisabled}
              onPress={onOk}
              >
              {okButtonContents}
            </OkButton>
            <CancelButton
              buttonId={`modal-${modalId}-cancel`}
              disabled={controlsDisabled}
              onPress={onCancel}
              >
              {cancelButtonContents}
            </CancelButton>
          </div>
        </div>
      </Visiblity>
    )
  }

  return Modal
}
