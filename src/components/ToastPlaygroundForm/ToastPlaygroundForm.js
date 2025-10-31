import React from 'react';

import Button from '../Button';
import styles from './ToastPlaygroundForm.module.css';
import Textarea from '../Textarea/Textarea';

import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlaygroundForm() {
  const { addToast } = React.useContext(ToastContext);

  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const textareaRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    addToast({ message, variant });
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);

    textareaRef.current.focus();
  }

  return (
    <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <Textarea required label='Message' value={message} setValue={setMessage} ref={textareaRef} />
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          <ToastVariantInputs variants={VARIANT_OPTIONS} variant={variant} setVariant={setVariant} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          <Button>Pop Toast!</Button>
        </div>
      </div>
    </form>
  );
}

function ToastVariantInputs({ variants, variant, setVariant }) {
  if (!Array.isArray(variants)) return;

  return variants?.map((option) => (
    <label htmlFor={`variant-${option}`} key={option}>
      <input
        type='radio'
        name='variant'
        id={`variant-${option}`}
        value={option}
        checked={option === variant}
        onChange={(e) => setVariant(e.target.value)}
      />
      {option}
    </label>
  ));
}

export default ToastPlaygroundForm;
