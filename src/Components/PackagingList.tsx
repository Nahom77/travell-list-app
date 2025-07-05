import { useState, type ChangeEvent } from 'react';
import Item from './Item';
import type { Items } from '../types/Item';

interface Props {
  items: Items[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearList: () => void;
}

function PackagingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}: Props) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems: Items[] = items;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleSorting(e: ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value);
  }

  return (
    <div className='list'>
      <ul>
        {sortedItems.map(item => (
          <Item
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            item={item}
            key={item.id}
          />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={handleSorting}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status </option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackagingList;
