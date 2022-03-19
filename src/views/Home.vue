<template>
  <div class="container">
    <!-- <test v-bind:transferedData="hello" /> -->
    <!-- <div class="home"></div> -->
    <!-- <p>{{ hello }}</p>
    <div>
      <p v-if="status === 1">first</p>
      <p v-else>second</p>
      <button @click="eventHandler()">click me!</button>
    </div>
    <div v-for="obj in arr" :key="obj.id">
      {{ obj.name }}
    </div>
    <input v-model="inp" type="text">
    <p>{{ inp }}</p>
    <div>
      <first v-if="status === 1" />
      <second v-else />
    </div>
    <button @click="img = 'https://avatars.mds.yandex.net/get-ott/1652588/2a0000017e9baa19c29d7f0044f2af6a1191/220x330'">Change image</button>
    <img :src="img" alt=""> -->
    <!-- <tictac /> -->
    <!-- <space /> -->
    <Movies />

  </div>
</template>

<script>
// import calculator from '@/components/calculator.vue'
// import test from "@/components/test.vue";
// import first from "@/components/first.vue";
// import second from "@/components/second.vue";
// import tictac from '@/components/tictactoe'
// import space from '@/components/space'
import Movies from '@/components/movie-list.vue'

export default {
  name: "Home",
  components: {
    // calculator
    // test,
    // first,
    // second,
    // tictac,
    // space,
    Movies
  },
  data() {
    return {
      hello: "Hello Vue!",
      status: 1,
      img: 'https://www.metacritic.com/images/icons/metacritic-icon.svg',
      inp: '',
      arr: [
        {
          id: 1,
          name: "John",
        },
        {
          id: 2,
          name: "Bob",
        },
      ],
    };
  },
  methods: {
    eventHandler() {
      if (this.status === 1) {
        this.status = 2;
      } else {
        this.status = 1;
      }
    },
  },
};
</script>
