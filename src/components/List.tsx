import React, { CSSProperties } from "react";
import { withWelcomeMessage } from "../hoc/withWelcomeMessage";

interface ListProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  testId: string;
  style?: CSSProperties;
}

interface IdObj {
  id: string | number;
}

export const List = withWelcomeMessage<ListProps<any>>(function List<
  T extends IdObj
>({ renderItem, data, testId, style }: ListProps<T>) {
  return (
    <ul data-testid={`${testId}`} style={style}>
      {data.map((dataItem) => {
        return <li key={dataItem.id}>{renderItem(dataItem)}</li>;
      })}
    </ul>
  );
});
