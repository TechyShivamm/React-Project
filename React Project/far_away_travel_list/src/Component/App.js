import { useState } from "react";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";
import Logo from "./Logo";
// import { Item } from "./Item";

function App() {
  const [item, setIteam] = useState([]);

  function handleDeleteitem(id) {
    setIteam((items) => items.filter((item) => item.id !== id));
  }
  function handleAddItem(item) {
    setIteam((items) => [...items, item]);
  }
  function handleToggleItem(id) {
    setIteam((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you shour to delete all items");
    if (confirmed) setIteam([]);
  }
  return (
    <div>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        item={item}
        onDeleteItem={handleDeleteitem}
        onHandleToggleItem={handleToggleItem}
        OnclearList={handleClearList}
      />
      <Stats items={item} />
    </div>
  );
}
export default App;
