// import { useState, useEffect } from "react";
// import "./App.css";

// interface Post {
//   number: number;
//   name: string;
//   level: string;
// }

// function App() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [title, setTitle] = useState("");
//   const [level, setLevel] = useState("");

//   useEffect(() => {
//     async function getPosts() {
//       try {
//         const response = await fetch("http://localhost:3000/skills");
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     getPosts();
//   }, []);

//   async function deletePost(id: String) {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/skills/${String(id)}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log(response);

//       const updatedPosts = posts.filter((post) => post.id !== Number(id));
//       setPosts(updatedPosts);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async function addPost(event) {
//     try {
//       const newId = Date.now();
//       const response = await fetch("http://localhost:3000/skills", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ id: newId, name: title, level }),
//       });
//       const newPost = await response.json();
//       setPosts([...posts, newPost]);
//       setTitle("");
//       setLevel("");
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className="App">
//       <h1>Posts</h1>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.name}</h2>
//           <p>
//             the level is{" "}
//             <i>
//               <b>{post.level}</b>
//             </i>
//           </p>
//           <button onClick={() => deletePost(post.id)}>Delete</button>
//         </div>
//       ))}
//       <hr />
//       <form
//         onSubmit={addPost}
//         style={{ display: "flex", flexDirection: "column", marginTop: "48px" }}
//       >
//         <label htmlFor="title">Title</label>
//         <input
//           id="title"
//           name="title"
//           type="text"
//           value={title}
//           onChange={(event) => setTitle(event.target.value)}
//         />

//         <label htmlFor="level">Level</label>
//         <input
//           id="level"
//           name="level"
//           type="text"
//           value={level}
//           onChange={(event) => setLevel(event.target.value)}
//         />

//         <button type="submit" style={{ marginTop: "12px" }}>
//           Add Post
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    id: String(Date.now()),
    title: "",
    views: "",
  });

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }

    getPosts();
  }, []);

  async function handleAdd(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      const data = await response.json();
      setPosts([...posts, data]);
      setNewPost({ id: String(Date.now()), title: "", views: 0 });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id) {
    try {
      await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const latestPost = posts.filter((item) => item.id !== id);
      setPosts(latestPost);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {posts.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.views} Views</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}

      <form
        style={{ display: "flex", flexDirection: "column", marginTop: "48px" }}
        onSubmit={(event) => handleAdd(event)}
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          value={newPost.title}
        />

        <label htmlFor="views">Views</label>
        <input
          id="views"
          name="views"
          type="number"
          onChange={(e) => setNewPost({ ...newPost, views: e.target.value })}
          value={newPost.views}
        />

        <button style={{ marginTop: "12px" }} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
