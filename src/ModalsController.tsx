/* eslint-disable no-unused-vars */
import React, { createContext, useReducer, useContext, ReactNode } from 'react'
import * as constants from './constants'
import {
  IOpenModalAction,
  IOpenModalState,
  ICloseModalAction,
  ICloseModalState,
  IUpdateConfigsAction,
  IUpdateConfigsState,
  IReducerAction,
} from './types'

const ModalsControllerContext = createContext({})

const openModal = (
  state: IOpenModalState,
  action: IOpenModalAction
): object => ({
  ...state,
  modals: {
    ...state.modals,
    [action.modalId]: true,
  },
  configs: {
    ...state.configs,
    [action.modalId]: action.configs,
  },
})

const closeModal = (state: ICloseModalState, action: ICloseModalAction) => ({
  ...state,
  modals: {
    ...state.modals,
    [action.modalId]: false,
  },
})

const updateConfig = (
  state: IUpdateConfigsState,
  action: IUpdateConfigsAction
) => ({
  ...state,
  configs: {
    ...state.configs,
    [action.modalId]: action.configs || {},
  },
})

function modalReducer(
  state = { modals: {}, configs: {} },
  action: IReducerAction
) {
  const mapper = {
    [constants.OPEN_MODAL]: openModal,
    [constants.CLOSE_MODAL]: closeModal,
    [constants.UPDATE_CONFIG]: updateConfig,
  }

  if (Object.prototype.hasOwnProperty.call(mapper, action.type)) {
    return mapper[action.type](state, action)
  }
  return state
}

function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(modalReducer, {
    modals: {},
    configs: {},
  })

  return (
    <ModalsControllerContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalsControllerContext.Provider>
  )
}

function useModalController() {
  const { state, dispatch } = useContext<any>(ModalsControllerContext)

  return {
    isOpen: (modalId: string) =>
      (state.modals && state.modals[modalId]) || false,
    getConfigs: (modalId: string) =>
      (state.configs && state.configs[modalId]) || {},
    open: (modalId: string, configs: any) =>
      dispatch({ type: constants.OPEN_MODAL, modalId, configs }),
    close: (modalId: string) =>
      dispatch({ type: constants.CLOSE_MODAL, modalId }),
    updateConfig: (modalId: string, configs: any) =>
      dispatch({ type: constants.UPDATE_CONFIG, modalId, configs }),
  }
}

export { Provider, useModalController }
