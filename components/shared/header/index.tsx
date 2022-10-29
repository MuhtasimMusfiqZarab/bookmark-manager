import React, { useState } from 'react';
import Link from 'next/link';
import { Logo, LogoText } from 'components/_icons';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.site_header}>
      <div className={styles.container}>
        <div className={styles.brand_logo}>
          <Link href="/" className={styles.iconsContainer}>
            <Logo width={50} height={50} />
            <LogoText width={100} height={100} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
