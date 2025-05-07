import { useItemsStore } from '../stores/itemsStore.js';
import AddItemForm from './AddItemForm.jsx';
import ButtonGroup from './ButtonGroup.jsx';

const Sidebar = () => {
  const addItem = useItemsStore((state) => state.addItem);

  return (
    <div className='sidebar'>
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
