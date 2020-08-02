<template>
  <div>
    <input type="text" v-model="newTodoItem">
    <button v-on:click="addTodo">add</button>
  </div>
</template>

<script>
  export default {
    name: "TodoInput",
    data() {
      return {
        newTodoItem: ""
      }
    },
    methods: {
      addTodo() {
        localStorage.setItem('newTodoItem', this.newTodoItem);
        this.newTodoItem = "";
      }
    }
  }
</script>

<style scoped>

</style>