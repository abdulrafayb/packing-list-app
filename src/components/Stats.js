export default function Stats({ items }) {
  /* in the case when there are no items in the array then there is no need to perform all the calculations below so do an early return conditional rendering */
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  /* we could have calculated all these values up there but then we would have to pass them all as props but it is better to just pass the item and calculate all the other values here */
  const numItems = items.length; // derived state
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
