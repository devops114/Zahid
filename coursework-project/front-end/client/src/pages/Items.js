
import React, { useEffect, useState } from 'react';
import { fetchItems, createItem, updateItem, deleteItem } from '../services/itemService';

const Items = () => {
   const [items, setItems] = useState([]);
   const [newItem, setNewItem] = useState({ name: '', description: '' });
   const [editingItem, setEditingItem] = useState(null);

   useEffect(() => {
       loadItems();
   }, []);

   const loadItems = async () => {
       const data = await fetchItems();
       setItems(data);
   };

   const handleCreate = async () => {
       await createItem(newItem);
       setNewItem({ name: '', description: '' });
       loadItems();
   };

   const handleUpdate = async (id) => {
       await updateItem(id, editingItem);
       setEditingItem(null);
       loadItems();
   };

   const handleDelete = async (id) => {
       await deleteItem(id);
       loadItems();
   };

   return (
       <div>
           <h1>Items</h1>
           <div>
               <input
                   type="text"
                   placeholder="Name"
                   value={newItem.name}
                   onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
               />
               <input
                   type="text"
                   placeholder="Description"
                   value={newItem.description}
                   onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
               />
               <button onClick={handleCreate}>Add Item</button>
           </div>
           <ul>
               {items.map((item) => (
                   <li key={item._id}>
                       {editingItem && editingItem._id === item._id ? (
                           <>
                               <input
                                   type="text"
                                   value={editingItem.name}
                                   onChange={(e) =>
                                       setEditingItem({ ...editingItem, name: e.target.value })
                                   }
                               />
                               <input
                                   type="text"
                                   value={editingItem.description}
                                   onChange={(e) =>
                                       setEditingItem({ ...editingItem, description: e.target.value })
                                   }
                               />
                               <button onClick={() => handleUpdate(item._id)}>Save</button>
                           </>
                       ) : (
                           <>
                               <span>{item.name}: {item.description}</span>
                               <button onClick={() => setEditingItem(item)}>Edit</button>
                               <button onClick={() => handleDelete(item._id)}>Delete</button>
                           </>
                       )}
                   </li>
               ))}
           </ul>
       </div>
   );
};

export default Items;

