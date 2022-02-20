import moment from "moment";

export interface ItemProps {
  time: Date;
  content: string;
  newTime?: Date;
}

const Item = ({ time, content, newTime }: ItemProps) => {
  return (
    <div className="flex items-center space-x-2">
      <p className="text-gray-400">{moment(time).format("HH:mm:ss")}</p>
      <p>{content}</p>
      <p className="text-red-400">
        {newTime && `(${moment(newTime).diff(moment(time), "minute")}min)`}
      </p>
    </div>
  );
};

export default Item;
