import { useItemsStore } from '../stores/itemsStore.js';

const Counter = () => {
  const items = useItemsStore((state) => state.items);
  const numberOfItemsPacked = items.filter(item => item.packed).length;
  const totalNumberOfItems = items.length;

  return (
    <p>
      <b>{numberOfItemsPacked} / {totalNumberOfItems}</b> items packed
    </p>
  );
};

export default Counter;
