import React from 'react';
import Header from '../../shared/header';
import styles from './styles.module.scss';

const HomeLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.container}>
        <div className={styles.container__element}>{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default HomeLayout;
