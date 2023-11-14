import React, {useState} from "react";
import Compteur from "./components/Compteur";
import Variables from "./components/Variables";
import Navbar from "./components/likes/Navbar";
import Posts from "./components/likes/Posts";

export default function App() {
  const age = 20;
  const joker = "JOKA";
  const nom = "Ange";
  const [posts, setPosts] = useState([
    {
      userId: 1,
      liker: false,
      description: "molestiae ut ut quas totam\nnostrum rerum est autem sunt",
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      liker: false,
      description: "molestiae ut ut quas totam\nnostrum rerum est autem sunt",
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      liker: false,
      description: "molestiae ut ut quas totam\nnostrum rerum est autem sunt",
      id: 3,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor que nisi nulla",
    },
    {
      userId: 1,
      liker: false,
      description: "molestiae ut ut quas totam\nnostrum rerum est autem sunt",
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
  ]);

const liker = (data)=> {
  console.log(data.id)
  const donneeCopier = [...posts];
}

  return (
    <>
      <div className="invisible">
        <Variables nom={(joker, nom)} age={age} />
        <Compteur />
      </div>

      <div className="mt-4 p-8">
        <Navbar />
        {posts.map((p) => (
          <Posts data={p} key={p.id} liker={liker} />
        ))}
      </div>
    </>
  );
}
