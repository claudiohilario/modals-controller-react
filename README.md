# modals-controller-react

> Modals controller with react

[![NPM](https://img.shields.io/npm/v/modals-controller-react.svg)](https://www.npmjs.com/package/modals-controller-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save modals-controller-react
```

## Usage

```tsx
import React, { Component } from 'react'

import * as ModalsController from 'modals-controller-react';

const Example = () => (
  <ModalsController.Provider>
    <ExampleComponent1>
  </ModalsController.Provider>
);
```

```tsx
import { useModalController } from 'modals-controller-react';

const modalId = 'MODAL_TEST_ID';
const {
  isOpen,
  getConfigs,
  open,
  close,
  updateConfig
} = useModalController();

// check if modal is open
const modalIsOpen = isOpen(modalId);

// gets modal config
const modalConfigs = getConfigs(modalId);

// function to open a specific modal
open(modalId, {values: {foo: 'bar'}});

// function to close a specific modal
close(modalId);

// function to update the settings of a modal
updateConfig(modalId, {newValues: {}});

};
```

## License

MIT © [claudiohilario](https://github.com/claudiohilario)
