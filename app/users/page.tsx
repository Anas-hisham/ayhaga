import React from "react";
// TYpescript because user might be any and that wrong typescript slve this problem

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const req = await fetch("https://jsonplaceholder.typicode.com/users", {
  //  cache: "no-store",
     next: { revalidate: 10 },
  });

  // Cashing just working with fetch if you use axious it will not work

  //   cache: "no-store"  to disable chaching and it's useful if data will change frequently
  //   next: { revalidate: 10 } nextjs will run backgound job and get fresh data from backend every 10 second

  const users: User[] = await req.json();

  return (
    <>
      <h1>Users</h1>

      {/*
      It's Static Page and page render when reqest time
      you should make npm run build
      */}

{/*       <p>{new Date().toLocaleTimeString()}</p> */}
      <table className="table table-bordered mt-10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserPage;
