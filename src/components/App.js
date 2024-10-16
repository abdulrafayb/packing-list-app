import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

/* by default the input fields of a form element maintain their own state inside the DOM meaning inside the HTML element itself which makes it hard to read their values also leaving the state in the DOM which is not ideal so in react we like to keep the state in just one central place meaning inside the react application and not inside the DOM and in order to do that we use a technique called controlled elements and with this technique it is react who controls and owns the state of input fields of form element and not the DOM */

/* the technique of controlled elements consists of three steps, first we define a piece of state, second we use that piece of state on the element that we want to control forcing the element to always take the value of the state variable, finally we update the state variable by using onchange handler */
