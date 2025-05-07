import Button from './Button.jsx';
import { useRef, useState } from 'react';

const AddItemForm = ({ onAddItem }) => {
  const [itemText, setItemText] = useState('');
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!itemText) {
      alert('Item can\'t be empty');
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(event) => {
          setItemText(event.target.value)
        }}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
