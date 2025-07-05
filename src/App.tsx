import { useState } from 'react';
import Logo from './Components/Logo';
import Form from './Components/Form';
import PackagingList from './Components/PackagingList';
import Stats from './Components/Stats';

import type { Items } from './types/Item'; // Importing our type which is Items interface

const App = () => {
  const [items, setItems] = useState<Items[]>([]); // List of items

  // To add elements (We are not mutating our origina item)
  function handleAddItems(item: Items) {
    setItems(items => [...items, item]);
  }

  // To delete an element using id (we will filter out an id which is not the same as deleted item)
  function handleDeleteItem(id: number) {
    setItems(items =>
      items.filter(item => {
        return item.id !== id;
      })
    );
  }

  //  When the check box is checked it will be called
  function handleToggleItem(id: number) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // To clear the entire list
  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you wnat to delete All items'
    );

    if (confirmed) setItems([]);
  }

  return (
    <>
      <div className='app'>
        <Logo />
        <Form onAddItems={handleAddItems}></Form>
        <PackagingList
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
          items={items}
        />
        <Stats items={items} />
      </div>
    </>
  );
};

export default App;
