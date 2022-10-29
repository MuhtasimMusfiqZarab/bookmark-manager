import React, { useEffect, useRef, useState } from 'react';
import { Modal, Input, Button } from 'components/general';
import { validateData } from 'components/utils/validation';
import Head from 'next/head';
import Header from '../../shared/header';
import styles from './styles.module.scss';

export default function Home() {
  let [modalIsOpen, setIsOpen] = useState<boolean>(true);
  let [titleText, setTitleText] = useState();
  let [urlText, setUrlText] = useState();
  let [category, setCategory] = useState();
  let [selected, setSelected] = useState(null);

  const handleSave = () => {
    try {
      const data = {
        title: titleText,
        url: urlText,
        category: category
      };

      if (!validateData(data)) {
        alert('title must be 0-30 characters long and url must be valid');
      } else {
        localStorage.setItem('data', JSON.stringify(data));
        setIsOpen(!modalIsOpen);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Bookmark Manager</title>
        <meta property="og:search" content="Search" key="search" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <Header />
      <div className={styles.main}>
        <div className={styles.pageItems}>
          <div className={styles.title}>Bookmark Manager</div>
          <div className={styles.addBookmark}>
            <Button onClick={() => setIsOpen(!modalIsOpen)}>Add Bookmark</Button>
          </div>

          {/* show two sections for cards */}
          <div className={styles.flexDirection}>
            <div className={styles.card}>Here are the card items</div>
            {selected && <div className={styles.card}>Here are the card details</div>}
          </div>
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

            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
