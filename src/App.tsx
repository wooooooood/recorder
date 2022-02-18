import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Item, { ItemProps } from "./components/Item";

function App() {
  const [list, setList] = useState<Array<ItemProps>>([]);

  const Enter = (content: string) => {
    setList([...list, { time: new Date(), content }]);
  };

  return (
    <div className="App">
      <Input onInput={Enter} />
      {(list || []).map((x, key) => (
        <Item key={key} time={x.time} content={x.content} />
      ))}
    </div>
  );
}

export default App;
