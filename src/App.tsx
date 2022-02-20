import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Item, { ItemProps } from "./components/Item";

function App() {
  const [list, setList] = useState<Array<ItemProps>>([]);

  useEffect(() => {
    setList([
      ...list.map((x, idx) => {
        if (idx === list.length - 1) return x;
        return { ...x, newTime: list[idx + 1].time };
      }),
    ]);
  }, [list.length]);

  const Enter = (content: string) => {
    const now = new Date();
    setList([...list, { time: now, content }]);
  };

  return (
    <div className="App">
      <Input onInput={Enter} />
      {(list || []).map((x, key) => (
        <Item key={key} time={x.time} content={x.content} newTime={x.newTime} />
      ))}
    </div>
  );
}

export default App;
