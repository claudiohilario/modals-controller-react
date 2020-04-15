export interface IOpenModalState {
  modals: object
  configs: object
}

export interface IOpenModalAction {
  modalId: string
  configs: any
}

export interface ICloseModalState {
  modals: object
}

export interface ICloseModalAction {
  modalId: string
}

export interface IUpdateConfigsState {
  configs: object
}

export interface IUpdateConfigsAction {
  modalId: string
  configs: object
}

export interface IReducerAction {
  type: string
}
