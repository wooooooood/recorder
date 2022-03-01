import moment from "moment";
import { useEffect, useState } from "react";
import { ItemProps } from "./Item";

export interface SummaryProps {
  list: Array<ItemProps>;
}

interface ProcessedItemProps {
  content: string;
  totalSpentSecs: number;
  //TODO: retro?
  //TODO: tag
}

const Summary = ({ list }: SummaryProps) => {
  const [processedList, setProcessedList] = useState<Array<ProcessedItemProps>>(
    []
  );

  useEffect(() => {
    console.log("processed");

    let processed: Array<ProcessedItemProps> = [];

    list.forEach((l) => {
      if (processed.find((x) => x.content === l.content)) {
        processed = processed.map((p) =>
          p.content === l.content
            ? {
                ...p,
                totalSpentSecs:
                  p.totalSpentSecs +
                  moment(l.newTime).diff(moment(l.time), "second"),
              }
            : p
        );
      } else {
        processed.push({
          content: l.content,
          totalSpentSecs: moment(l.newTime).diff(moment(l.time), "second"),
        });
      }
    });

    setProcessedList(processed.filter((p) => p.totalSpentSecs > 60));
  }, [list.length]);

  const totalMinutesToFormattedText = (totalMinutes: number) => {
    var hours =
      Math.floor(totalMinutes / 60) === 0
        ? ""
        : `${Math.floor(totalMinutes / 60)}hour`;
    var minutes = totalMinutes % 60 === 0 ? "" : `${totalMinutes % 60}min`;

    return hours ? `${hours} ${minutes}` : minutes;
  };

  return (
    <div className="bg-gray-100 rounded-xl p-5 space-y-1 text-left">
      <h3 className="font-bold text-lg">Today I ..</h3>
      {list.length > 0 && (
        <p>{`Switched between tasks for ${list.length - 1} times in total ${
          new Set(list.map((l) => l.content)).size
        } tasks`}</p>
      )}

      {processedList.length > 0 ? (
        processedList.map((x) => (
          <p>{`${x.content} for ${totalMinutesToFormattedText(
            Math.floor(x.totalSpentSecs / 60)
          )}`}</p>
        ))
      ) : (
        <p>Did nth 🥳</p>
      )}
    </div>
  );
};

export default Summary;
