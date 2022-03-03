import React from "react";
import UserList from "../components/user-list";

const User = ({users}) => {
  return (
    <div>
      <h1>User List</h1>
      {users?.map((user) => {
        return (
          <div key={user?.id}>
            <UserList user={user} />
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const userData = await response.json();
  return {
    props: {
      users: userData,
    },
  };
};
export default User;
