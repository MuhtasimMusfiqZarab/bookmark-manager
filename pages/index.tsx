import Head from 'next/head';
import Home from 'components/pages/home';

export default function index() {
  return (
    <div>
      <Head>
        <title>Bookmark Manager</title>
        <meta name="description" content="bookmark manager" />
        <link rel="icon" href="/bookmark.svg" />
      </Head>
      <Home />
    </div>
  );
}
