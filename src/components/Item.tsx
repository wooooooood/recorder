import moment from "moment";

export interface ItemProps {
  time: Date;
  content: string;
}

const Item = ({ time, content }: ItemProps) => {
  return (
    <div className="flex items-center space-x-2">
      <p className="text-gray-400">{moment(time).format("HH:mm:ss")}</p>
      <p>{content}</p>
    </div>
  );
};

export default Item;
