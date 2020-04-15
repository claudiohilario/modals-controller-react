import React from 'react';
import { useModalController } from 'modals-controller-reactjs';

import { MODAL_TEST_ID } from './constants'
export default function ModalActions() {
  const { open, close, updateConfig } = useModalController();
  return (
    <React.Fragment>
      <h1>Modal Actions:</h1>
      <hr />
      <p>
        <button onClick={() => {
          open(MODAL_TEST_ID, { foo: 'bar' });
        }}>
          open(MODAL_TEST_ID, {`{foo: 'bar'}`})
        </button>
      </p>

      <p>
        <button onClick={() => {
          close(MODAL_TEST_ID);
        }}>
          close(MODAL_TEST_ID)
        </button>
      </p>

      <p>
        <button onClick={() => {
          updateConfig(MODAL_TEST_ID, { aaa: 'bbb' });
        }}>
          updateConfig(MODAL_TEST_ID, {`{aaa: 'bbb'}`})
        </button>
      </p>

    </React.Fragment>
  )
}
