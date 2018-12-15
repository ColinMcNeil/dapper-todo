<template>
  <section class="container">
    <div class="centerBox">
      <div class="bar">
        <input
          v-model="addText"
          type="text"
          placeholder="New Item"/>
        <button @click="append">+</button>
      </div>
      <ol class="list">
        <li
          v-for="item in items"
          :key="item.id">
          {{ item.text }}
          <button @click="remove(item.id)">X</button>
        </li>
      </ol>
    </div>

  </section>
</template>

<script>
export default {
  components: {},
  data: () => ({ addText: '', items: [] }),
  methods: {
    append() {
      this.items.push({
        text: this.addText,
        id: this.items.length
      })
      this.addText = ''
    },
    remove(id) {
      for (const index in this.items) {
        if (this.items[index].id === id) return this.items.splice(index, 1)
      }
    }
  }
}
</script>

<style>
button {
  transition: ease 0.3s all;
  border: none;
  outline: none;
}
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.centerBox {
  width: 50%;
  height: 50%;
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: rgb(165, 154, 228);
}

.bar {
  background-color: rgb(69, 152, 207);
  top: 50px;
  padding: 1em;
  display: flex;
}
.bar input {
  background-color: rgb(60, 133, 182);
  outline: none;
  border: none;
  padding: 1em;
  color: white;
  flex-basis: 100%;
}
.bar button {
  color: white;
  background-color: rgb(60, 133, 182);
  font-size: 1.5em;
  border-left: solid rgb(89, 82, 179) 2px;
  cursor: pointer;
}
.bar button:hover {
  background-color: rgb(79, 161, 216);
}
.list {
  text-align: left;
  font-size: 1.5em;
  color: white;
}
.list li {
  width: 100%;
}
.list li button {
  background-color: rgb(236, 78, 78);
  cursor: pointer;
  padding: 7px;
}
.list li button:hover {
  background-color: rgb(250, 101, 101);
}
</style>
