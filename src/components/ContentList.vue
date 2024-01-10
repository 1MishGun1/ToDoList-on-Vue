<template>
  <main class="main">
    <div class="container">
      <h3 class="main-title">count tasts:</h3>
      <ul class="main-items">
        <li class="item">
          <br />
          <button class="btn-deleteNote">Delete Note</button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      newNotes: [],
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

h3 {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.main-title {
  margin-top: 50px;
  text-align: center;
  text-transform: uppercase;
}

.container {
  max-width: calc(100% - 500px);
  margin: 0 auto;
}

.item {
  display: flex;
  width: 350px;
  height: 100px;
  border: 1px solid rgb(139, 139, 139);
  border-radius: 10px;
}

.btn-deleteNote {
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
