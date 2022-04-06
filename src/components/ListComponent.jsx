import ListItem from './ListItem';
import { useState, useEffect } from 'react';

const ListComponent = () => {
  const [listItems, setListItems] = useState([]);
  const [item, setItem] = useState('');

  useEffect(() => {
    setListItems([
      { id: 1, text: 'Ir a Ámsterdam y paises aledaños' },
      { id: 2, text: 'Tour gastronómico por Laureles' },
      { id: 3, text: 'Cocinar algo bien pro' },
    ]);
  }, []);

  const handleMarkClick = (item) => {
    const newItems = [...listItems];
    const index = listItems.indexOf(item);
    newItems[index] = { ...listItems[index] };
    newItems[index].marked = !newItems[index].marked;
    setListItems(newItems);
  };

  const handleItemSubmit = (e) => {
    e.preventDefault();
    const lastElementId = listItems.slice(-1)[0].id;
    setListItems([...listItems, { id: lastElementId + 1, text: item }]);
    setItem('');
  };

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div className='ml-2 mr-2'>
      <form
        className='max-w-2xl mx-auto mt-2 mb-2 flex justify-center'
        onSubmit={handleItemSubmit}
      >
        <label>
          <input
            className='px-2 w-60 md:w-96 py-2 rounded-md'
            type='text'
            value={item}
            onChange={handleItemChange}
            name='name'
          />
        </label>
        <input
          className='bg-gray-300 ml-2 px-3 rounded text-semibold opacity-60 hover:opacity-100 hover:cursor-pointer'
          type='submit'
          value='Añadir'
        />
      </form>
      <div className='max-w-2xl mx-auto mt-3 mb-3 rounded px-2 py-3 bg-gray-600'>
        {listItems.map((e) => (
          <ListItem key={e.id} item={e} onMarkClick={handleMarkClick} />
        ))}
      </div>
    </div>
  );
};

export default ListComponent;
