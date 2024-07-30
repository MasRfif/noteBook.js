import { resolve } from "path/posix";

export default async function Page() {
  try {
    const Response = await fetch("https://randomuser.me/api");
    const Users = await Response.json();

    console.log(Users);
    return (
      <div className="rounded-xl bg-orange-300" style={{ padding: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Welcome,
          {`${Users.results[0].name.first} ${Users.results[0].name.last}`}!
        </h1>

        <p style={{ color: "#333", fontSize: "16px" }}>
          I am Naufal Rafif Nurqodri, a passionate software engineer with a love
          for creating innovative and user-friendly applications. I am currently
          working as a senior software engineer at a tech company, where I
          contribute to the development of cutting-edge applications.
        </p>
        <p style={{ color: "#333", fontSize: "16px" }}>
          I have a strong foundation in programming languages such as
          JavaScript, TypeScript, React, and Node.js. I am proficient in both
          front-end and back-end development, and I have a deep understanding of
          algorithms and data structures.
        </p>
        <br />
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}
