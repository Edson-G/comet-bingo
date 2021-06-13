import "./App.css";
import Itemize from "itemizejs";
import { useEffect, useRef } from "react";
import bingoData from "./data.js";

function App() {
  const bingoRef = useRef();
  const listRef = useRef();
  const bingo = useRef();
  const list = useRef();

  bingo.current = bingoData;
  list.current = bingoData;

  useEffect(() => {
    const itemManager = new Itemize();
    itemManager.apply(".bingo-container", { dragAndDrop: true });
    itemManager.apply(".list-container", { dragAndDrop: true });
  }, []);

  const updateBingo = () => {
    const bingoItems = [...bingoRef.current.children];
    if (bingoItems.length > 0) {
      bingoItems.pop();
      bingo.current = [...bingoItems].map((child) => {
        return { name: child.children[0].alt, url: child.children[0].src };
      });
    }
    console.log(bingo.current);
  };

  const updateList = () => {
    const listItems = [...listRef.current.children];
    if (listItems.length > 0) {
      listItems.pop();
      list.current = [...listItems].map((child) => {
        return { name: child.children[0].alt, url: child.children[0].src };
      });
    }
    console.log(list.current);
  };
  return (
    <div className="content">
      <div
        ref={bingoRef}
        className="bingo-container"
        onMouseOver={(e) => {
          e.preventDefault();
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
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      <div
        ref={listRef}
        className="list-container"
        onMouseOver={(e) => {
          e.preventDefault();
          updateList();
        }}
      >
        {list.current.map((item, index) => (
          <div
            key={`list-item-${index}`}
            className="item list-item"
            onDragStart={(e) => e.preventDefault()}
          >
            <div className="list-item-rank">{index + 1}</div>
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
