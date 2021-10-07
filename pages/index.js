import Link from "next/link";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Raiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Next JS pre-rendering</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  );
}
