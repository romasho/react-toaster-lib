# React-Toastify

## Installation

```
$ npm install --save romasho-toast-lib
$ yarn add romasho-toast-lib
```

## Features

- Easy to set up for real, you can make it work in less than 10sec!
- Super easy to customize
- Super easy to use an animation of your choice. 
- Can display a react component inside the toast!
- Define behavior per toast

## The gist

```jsx
  import React from 'react';

  import { toastStore, Toaster, ToastType, AnimationType, ToastPosition } from 'romasho-toast-lib'
  
  function App(){
    const { error } = ToastType;
    const { startX } = AnimationType;
    const { bottomRight } = ToastPosition;  

    const notify = () => toastStore.addToast({
                message: 'Hello world!',
                animation: startX,
                type: error,
              });

    return (
      <div>
        <button onClick={notify}>Add toast</button>
        <Toaster position={bottomRight} />
      </div>
    );
  }
```
