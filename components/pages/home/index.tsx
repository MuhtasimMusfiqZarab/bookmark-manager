import React, { useEffect, useRef, useState } from 'react';
import { Modal, Input } from 'components/general';
import Head from 'next/head';
import styles from './styles.module.scss';

export default function Home() {
  let [modalIsOpen, setIsOpen] = useState<boolean>(true);
  let [titleText, setTitleText] = useState();
  let [urlText, setUrlText] = useState();
  let [category, setCategory] = useState();

  return (
    <div>
      <Head>
        <title>Bookmark Manager</title>
        <meta property="og:search" content="Search" key="search" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <div>
        {/* two components with  */}
        <div className={styles.title}>
          <div>Bookmark Manager</div>
          <div>Button</div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <div className={styles.items}>
          <div className={styles.title}>Add Bookmark</div>

          <Input setInputText={setTitleText} inputText={titleText} placeholder="Title" />
          <Input setInputText={setUrlText} inputText={urlText} placeholder="Url" />
          <Input setInputText={setCategory} inputText={category} placeholder="Category" />
        </div>
      </Modal>
    </div>
  );
}
