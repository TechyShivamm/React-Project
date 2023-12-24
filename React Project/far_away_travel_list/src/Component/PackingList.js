import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  item,
  onDeleteItem,
  onHandleToggleItem,
  OnclearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  // console.log(item, sortBy);
  let sortedItems;

  if (sortBy === "input") sortedItems = item;

  if (sortBy === "description")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {item.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onHandleToggleItem={onHandleToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={OnclearList}>Clear List</button>
      </div>
    </div>
  );
}
