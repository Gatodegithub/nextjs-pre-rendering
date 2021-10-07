import User from "../components/user";
import Head from "next/head";

const UserList = ({ users }) => {
  return (
    <>
      <Head>
        <title>Usuarios</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>List of users</h1>
      <hr />
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // * Debe retornar un objeto y este debe contener la propiedad props, de lo contrario se retornara un error.
  return {
    props: {
      users: data,
    },
  };
}

export default UserList;
