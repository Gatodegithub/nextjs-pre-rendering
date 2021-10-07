import Head from "next/head";

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>POST - {post.id}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
};

export async function getStaticPaths() {
  // * Le digo a next que postId puede ser 1 - 2 o 3, asi next generara esas paginas
  return {
    paths: [
      {
        params: { postId: '1' }
      },
      {
        params: { postId: '2' }
      },
      {
        params: { postId: '3' }
      },
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}

export default Post;
