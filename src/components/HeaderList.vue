<template>
  <header class="header">
    <div class="container">
      <h2 class="logo">meetanator</h2>
      <div class="header-form">
        <input type="text" class="input-create" placeholder="Add new task" />
        <button class="btn-create">Create task</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  max-width: calc(100% - 500px);
  margin: 0 auto;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  text-transform: uppercase;
}

.header-form {
  display: flex;
  gap: 10px;
  align-items: center;
}

.input-create,
.btn-create {
  border-radius: 10px;
}

.input-create {
  width: 220px;
  height: 40px;
  border: 1px solid rgb(40, 40, 40);
  padding-left: 10px;
}

.btn-create {
  width: 120px;
  height: 40px;
  background-color: white;
  border: 1px solid rgb(40, 40, 40);
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-create:hover {
  background-color: rgb(0, 0, 125);
  border: 1px solid rgb(0, 0, 125);
  color: white;
}
</style>
