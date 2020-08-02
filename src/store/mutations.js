const addOneItem = (state, todoItem) => {
  let obj = {item: todoItem, completed: false};
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};
const removeOneItem = (state, index) => {
  let targetItem = state.todoItems[index];
  localStorage.removeItem(targetItem.item);
  state.todoItems.splice(index, 1);
};
const toggleOneItem = (state, index) => {
  let targetItem = state.todoItems[index];
  targetItem.completed = !targetItem.completed;
  localStorage.setItem(targetItem.item, JSON.stringify(targetItem));
};
const clearAllItems = (state) => {
  state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };