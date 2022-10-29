import Head from 'next/head';
import HomeLayout from 'components/layouts/home';
import Home from 'components/pages/home';

export default function index() {
  return (
    <div>
      <Head>
        <title>Bookmark Manager</title>
        <meta name="description" content="bookmark manager" />
        <link rel="icon" href="/bookmark.svg" />
      </Head>
      <main>
        <HomeLayout>
          <Home />
        </HomeLayout>
      </main>
    </div>
  );
}
