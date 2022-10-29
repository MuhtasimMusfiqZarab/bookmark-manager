import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  inputText: string;
  setInputText: any;
  placeholder: string;
}

export const Input: FC<Props> = ({ inputText, setInputText, placeholder }: Props): JSX.Element => {
  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder={placeholder}
          value={inputText ?? ''}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
    </>
  );
};
