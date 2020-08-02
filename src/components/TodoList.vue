<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="index" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">
          {{ todoItem.item }}
        </span>
        <span class="removeBtn">
          <i class="fas fa-trash-alt" v-on:click="removeTodo(todoItem, index)"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TodoList",
    data() {
      return {
        todoItems: []
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
    methods: {
      removeTodo(todoItem, index) {
        localStorage.removeItem(todoItem);
        this.todoItems.splice(index, 1);
      },
      toggleComplete(todoItem) {
        todoItem.completed = !todoItem.completed;
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .checkBtnCompleted {
    color: #b3adad;
  }

  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
</style>