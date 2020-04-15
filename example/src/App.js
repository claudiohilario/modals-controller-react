import React from 'react'

import * as ModalsController from 'modals-controller-reactjs'
import ViewDataTest from './ViewDataTest';
import ModalActions from './ModalActions';

const App = () => {
  return (
    <ModalsController.Provider>
      <ViewDataTest />
      <ModalActions />
    </ModalsController.Provider>
  )
}

export default App
