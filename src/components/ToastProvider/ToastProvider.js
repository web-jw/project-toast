import React from 'react';
import useKeydown from '../../hooks/useKeydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleKeydown = React.useCallback(() => setToasts([]), []);
  const keydownItems = React.useMemo(() => ['Escape'], []);

  useKeydown(handleKeydown, keydownItems);

  function addToast({ message, variant }) {
    const id = crypto.randomUUID();
    setToasts((toasts) => [...toasts, { message, variant, id }]);
  }

  function removeToast(id) {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }

  const value = React.useMemo(() => ({ toasts, addToast, removeToast }), [toasts]);

  return <ToastContext value={value}>{children}</ToastContext>;
}

export default ToastProvider;
