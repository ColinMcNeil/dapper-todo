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
          :key="item.id"
          :class="{checked: item.checked}"
          @click="item.checked = !item.checked">
          {{ item.text }}
          <button @click="remove(item.id)">X</button>
        </li>
      </ol>
      <div class="bar lower">
        <button @click="clear">Clear All</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data: () => ({ addText: '', items: [] }),
  watch: {
    items() {
      this.$cookies.set('list', this.items)
    }
  },
  mounted() {
    let list = this.$cookies.get('list') || []
    this.items = list
  },
  methods: {
    append() {
      this.items.push({
        text: this.addText,
        id: this.items.length,
        checked: false
      })
      this.addText = ''
    },
    remove(id) {
      for (const index in this.items) {
        if (this.items[index].id === id) return this.items.splice(index, 1)
      }
    },
    clear() {
      this.items = []
    }
  }
}
</script>

<style>
button {
  transition: ease 0.2s all;
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

.bar.lower {
  align-self: flex-end;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4em;
}

.bar.lower button {
  border: none;
  padding: 0.5em;
}

.list {
  text-align: left;
  font-size: 1.5em;
  color: white;
  list-style: none; /* Remove default numbering */
  counter-reset: li;
}

.list li {
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 4px 4px 4px 0;
  background-color: rgb(66, 147, 201);
  transition: ease 0.2s all;
  cursor: pointer;
}

.list li::before {
  content: counter(li);
  counter-increment: li;
  left: -0.2em;
  position: absolute;
  margin-top: -0.5em;
  background: #87ceeb;
  height: 2em;
  width: 2.4em;
  text-align: center;
  font-weight: bold;
  border-radius: 4px 0 0 4px;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.66);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.66);
  transition: all 0.2s ease;
}

.list li:hover::before {
  height: 2.45em;
  width: 2.59em;
  left: -0.3em;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.list li:hover {
  background: #87ceeb;
}

.list li button {
  background-color: rgb(236, 78, 78);
  cursor: pointer;
  padding: 7px;
}

.list li button:hover {
  background-color: rgb(250, 101, 101);
}

.list li.checked::before {
  background: green;
}

li.checked {
  background-color: green;
  text-decoration: line-through;
}

li.checked:hover {
  background-color: green;
}
@media only screen and (max-width: 700px) {
  .centerBox {
    width: 90%;
    min-width: 300px;
  }
}
</style>
