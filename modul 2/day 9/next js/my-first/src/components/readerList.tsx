interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function Client() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const Response = await fetch("https://jsonplaceholder.typicode.com/users");
    const Users = await Response.json();

    console.log(Users);
    return (
      <table className="text-sm w-full">
        <thead>
          {" "}
          <tr className="grid grid-cols-3">
            <th className=" text-start">Name</th>
            <th className=" text-start">UserName</th>
            <th className=" text-start">Email</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {Users.map((user: User) => (
            <tr className="grid grid-cols-3 py-3" key={user.id}>
              <td>{user.name}</td>
              <td>@{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } catch (error) {
    console.error(error);
  }
}
