import { useState } from "react";

export interface InputProps {
  onInput: (content: string) => void;
}

const Input = ({ onInput }: InputProps) => {
  const [content, setContent] = useState("");

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onInput(content);
      setContent("");
    }
  };

  const onChange = (event: { target: HTMLInputElement }) => {
    setContent(event.target.value);
  };

  return (
    <div className="bg-gray-100 m-2 p-2">
      <input onKeyUp={onEnter} value={content} onChange={onChange} />
    </div>
  );
};

export default Input;
