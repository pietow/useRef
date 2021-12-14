import { useState, useRef } from "react";

export default function CatFriends() {
  const [index, setIndex] = useState(0);

  const listRef = useRef(null);

  return (
    <>
      <nav>
        <button
          onClick={() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
              listRef.current.children[index + 1].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
              });
            } else {
              setIndex(0);
              listRef.current.children[0].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
              });
            }
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul ref={listRef}>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i
  });
}
