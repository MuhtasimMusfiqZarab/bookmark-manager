import React, { useEffect, useRef, useState } from 'react';
import { Modal, Input, Button } from 'components/general';
import { validateData } from 'components/utils/validation';
import Head from 'next/head';
import Header from '../../shared/header';
import styles from './styles.module.scss';

export default function Home() {
  let [modalIsOpen, setIsOpen] = useState<boolean>(false);
  let [titleText, setTitleText] = useState();
  let [urlText, setUrlText] = useState();
  let [category, setCategory] = useState();
  let [selected, setSelected] = useState(null);
  let [allItems, setAllItems] = useState([]);
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    var retrieved = JSON.parse(localStorage.getItem('data'));
    if (retrieved !== null) {
      setAllItems(retrieved);
    }
  }, []);

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
        setAllItems((oldArray) => {
          localStorage.setItem('data', JSON.stringify([...oldArray, data]));
          return [...oldArray, data];
        });
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
            {allItems && (
              <div className={styles.card}>
                {allItems.map((item: any, index: any) => (
                  <div key={index} className={styles.group}>
                    <div>{item.title}</div>
                    <Button onClick={() => setSelected(item)}>Details</Button>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.card}>
              {selected ? (
                <>
                  <div>Title: {selected.title}</div>
                  <div>URL: {selected.url}</div>
                  <div>Category: {selected.category}</div>
                </>
              ) : (
                <div>Select to display</div>
              )}
            </div>
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

          <div className={styles.group}>
            <Button onClick={() => setIsOpen(!modalIsOpen)}>Close</Button>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
