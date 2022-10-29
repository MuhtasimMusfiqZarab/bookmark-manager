import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bookmark Manager</title>
        <meta property="og:search" content="Search" key="search" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <div>This is home</div>
    </div>
  );
}
