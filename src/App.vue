<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodoItem="removeOneItem"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoInput from './components/TodoInput'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    data() {
      return {
        todoItems: []
      }
    },
    methods: {
      addOneItem(todoItem) {
        let obj = {item: todoItem, completed: false};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
      },
      removeOneItem(item, index) {
        localStorage.removeItem(item);
        this.todoItems.splice(index, 1);
      }
    },
    created() {
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
            let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
            this.todoItems.push(item);
          }
        }
      }
    },
    components: {
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
