import React, { useEffect, useRef, useState } from 'react';
import { Modal, Input, Button } from 'components/general';
import Head from 'next/head';
import Header from '../../shared/header';
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
      <Header />
      <div className={styles.main}>
        <div className={styles.titleItems}>
          <div className={styles.title}>Bookmark Manager</div>
          {/* <div className={styles.addNew} onClick={() => setIsOpen(!modalIsOpen)}>
            Button
          </div> */}
        </div>
      </div>
      <Modal isOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <div className={styles.items}>
          <div style={{ display: 'flex' }}>
            <div className={styles.title}>Add Bookmark</div>
            <div className={styles.close} onClick={() => setIsOpen(!modalIsOpen)}>
              X
            </div>
          </div>
          <Input setInputText={setTitleText} inputText={titleText} placeholder="Title" />
          <Input setInputText={setUrlText} inputText={urlText} placeholder="Url" />
          <Input setInputText={setCategory} inputText={category} placeholder="Category" />

          <div className={styles.buttonGroup}>
            <div style={{ flex: 1 }}>
              <Button onClick={() => setIsOpen(!modalIsOpen)}>Close</Button>
            </div>

            <Button onClick={() => setIsOpen(!modalIsOpen)}>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
