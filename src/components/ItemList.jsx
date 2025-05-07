import { useMemo, useState } from 'react';
import Select from 'react-select';
import EmptyView from './EmptyView.jsx';
import { SORTING_VALUES, SORTING_OPTIONS } from '../lib/constants.js';
import { useItemsStore } from '../stores/itemsStore.js';

const ItemList = () => {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const [sortBy, setSortBy] = useState(SORTING_VALUES.default);

  const sortedItems = useMemo(() => [...items].sort((a, b) =>{
    if (sortBy === SORTING_VALUES.packed) {
      return b.packed - a.packed;
    }

    if (sortBy === SORTING_VALUES.unpacked) {
      return a.packed - b.packed;
    }

    return;
  }), [items, sortBy]);

  return (
    <ul className='item-list'>
      {items.length === 0 ? <EmptyView /> : null}
      {items.length > 0 ? (
        <section className='sorting'>
          <Select
            onChange={option => setSortBy(option.value)}
            options={SORTING_OPTIONS}
            defaultValue={SORTING_OPTIONS[0]}
          />
        </section>
      ) : null}
      {sortedItems.map(item => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className='item'>
      <label>
        <input
          checked={item.packed}
          type='checkbox'
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default ItemList;
