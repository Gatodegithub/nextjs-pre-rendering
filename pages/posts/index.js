import Link from "next/link";
import Head from 'next/head'

const PostList = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          {/* Cuando tengo un hijo que no es un anchor tag debo poner el passHref */}
          <Link href={`posts/${post.id}`} passHref>
            <h2>
              {post.id} {post.title}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}

export default PostList;
