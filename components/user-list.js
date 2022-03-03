import React from "react";

const UserList = ({user}) => {
  return (
    <>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
    </>
  );
};

export default UserList;
