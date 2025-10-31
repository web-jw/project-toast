import React from 'react';

import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';
import ToastPlaygroundForm from '../ToastPlaygroundForm/ToastPlaygroundForm';
import ToastProvider from '../ToastProvider/ToastProvider';

function ToastPlayground() {
  return (
    <ToastProvider>
      <div className={styles.wrapper}>
        <header>
          <img alt='Cute toast mascot' src='/toast.png' />
          <h1>Toast Playground</h1>
        </header>

        <ToastShelf />

        <ToastPlaygroundForm />
      </div>
    </ToastProvider>
  );
}

export default ToastPlayground;
