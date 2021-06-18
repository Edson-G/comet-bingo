import "./App.css";
import Itemize from "itemizejs";
import { useEffect, useRef } from "react";
import { hololiveData, animeData } from "./data.js";

function App() {
  const bingoRef = useRef();
  const bingo = useRef([...animeData]);
  const list = useRef([...animeData]);

  const bingoManager = new Itemize();
  const listManager = new Itemize();

  useEffect(() => {
    bingoManager.apply(".bingo-container", { dragAndDrop: true });
  });
  const updateBingo = () => {
    const bingoItems = [...bingoRef.current.children];
    if (bingoItems.length > 0) {
      bingoItems.pop();
      bingo.current = [...bingoItems].map((child) => {
        return {
          name: child.children[0].alt,
          url: child.children[0].src,
          personalRank: child.children[0].rank,
        };
      });
    }
  };

  const updateList = () => {
    const listItems = [...listManager.containers[0].children];
    if (listItems.length > 0) {
      listItems.pop();
      list.current = [...listItems].map((child, index) => {
        return {
          name: child.children[1].alt,
          url: child.children[1].src,
          personalRank: index + 1,
        };
      });
    }
  };
  return (
    <div className="content">
      <div
        ref={bingoRef}
        className="bingo-container"
        onDrop={(e) => {
          updateBingo();
        }}
      >
        {bingo.current.map((item, index) => (
          <div
            key={`bingo-item-${index}`}
            className="item bingo-item"
            onDragStart={(e) => e.preventDefault()}
          >
            <img
              className="bingo-image"
              src={item.url}
              alt={item.name}
              rank={item.personalRank}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      <div
        className="list-container"
        onDrop={(e) => {
          updateList();
        }}
      >
        {list.current
          .sort((a, b) => a.personalRank - b.personalRank)
          .map((item, index) => (
            <div
              key={`list-item-${index}`}
              className="item list-item"
              onDragStart={(e) => e.preventDefault()}
            >
              <div className="list-item-rank">{item.personalRank}</div>
              <img
                className="list-image"
                src={item.url}
                alt={item.name}
                onDragStart={(e) => e.preventDefault()}
              />
              <div className="list-item-name">{item.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
