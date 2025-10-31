import React from 'react';

import styles from './Textarea.module.css';

function Textarea({ label, value, setValue, className, ...delegated }) {
  const id = React.useId();
  const idApplied = delegated.id || id;
  const textareaClass = `${className || ''} ${styles.messageInput}`;

  return (
    <>
      {label && (
        <label htmlFor={idApplied} className={styles.label} style={{ alignSelf: 'baseline' }}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <textarea
          {...delegated}
          id={idApplied}
          className={textareaClass}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </>
  );
}

export default React.memo(Textarea);
