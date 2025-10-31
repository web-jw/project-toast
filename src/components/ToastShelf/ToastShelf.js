import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  return (
    <ol role='region' aria-live='polite' aria-label='Notification' className={styles.wrapper}>
      {toasts?.map((toast, index) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast variant={toast.variant} hideToast={() => removeToast(toast.id)}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
