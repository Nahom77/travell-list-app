import type { Items } from '../types/Item';

interface Props {
  item: Items;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

function Item({ item, onDeleteItem, onToggleItem }: Props) {
  return (
    <li>
      <input
        type='checkbox'
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        X
      </button>
    </li>
  );
}

export default Item;
