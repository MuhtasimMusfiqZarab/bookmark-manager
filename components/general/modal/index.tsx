import React, { useState } from 'react';
import styles from './styles.module.scss';

const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <button className={styles.modal__dismiss} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
          </button>
          <div className={styles.modal__inner}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
