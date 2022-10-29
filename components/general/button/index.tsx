import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

export const Button: FC<Props> = ({ children, onClick }: Props): JSX.Element => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};
