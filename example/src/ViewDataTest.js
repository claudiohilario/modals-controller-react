import React from 'react';
import { useModalController } from 'modals-controller-reactjs';

import { MODAL_TEST_ID } from './constants'
export default function ViewDataTest() {
  const { isOpen, getConfigs } = useModalController();
  return (
    <React.Fragment>
      <h1>View Data Test:</h1>
      <hr />
      <p>isOpen: {isOpen(MODAL_TEST_ID).toString()}</p>
      <p>getConfigs: {JSON.stringify(getConfigs(MODAL_TEST_ID))}</p>
    </React.Fragment>
  )
}
