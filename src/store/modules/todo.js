const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
          arr.push(item);
        }
      }
    }
    return arr;
  }
};

const state = {
  todoItems: storage.fetch()
};

const getters = {
  getTodoItems(state) {
    return state.todoItems;
  }
};

const mutations = {
  addOneItem(state, todoItem) {
    let obj = {item: todoItem, completed: false};
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItem(state, index) {
    let targetItem = state.todoItems[index];
    localStorage.removeItem(targetItem.item);
    state.todoItems.splice(index, 1);
  },
  toggleOneItem(state, index) {
    let targetItem = state.todoItems[index];
    targetItem.completed = !targetItem.completed;
    localStorage.setItem(targetItem.item, JSON.stringify(targetItem));
  },
  clearAllItems(state) {
    state.todoItems = [];
  }
};

export default { state, getters, mutations }