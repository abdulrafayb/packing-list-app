export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      {/* now we are gonna transfrom this element into a controlled element meaning the element value will be defined by some state also having an event handler which listens for change and updates the state accordingly */}
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
