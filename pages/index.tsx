import Head from 'next/head'
import FixedHeader from '../components/fixedHeader';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Static Web Client</title>
      </Head>
      <main>
        <h1>Hello, world!</h1>
        <FixedHeader />
      </main>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
      <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
    </div>
  );
}
