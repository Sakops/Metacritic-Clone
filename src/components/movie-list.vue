<template>
  <div class="container mx-auto pt-10">
    <div
      class="py-8 border-b border-gray-400"
      v-for="movie of movies"
      :key="movie.id"
    >
      <div class="flex items-start">
        <div class="relative mr-4">
          <router-link :to="{name: 'movie.show', params: {id: movie.id}}">
            <img :src="movie.img" alt="" />
          </router-link>
          <img
            class="abs"
            v-if="movie.mustSee"
            src="https://www.metacritic.com/images/icons/mc-mustsee-sm.svg"
            alt=""
          />
        </div>
        <div class="info w-full">
          <router-link
            class="font-bold mb-3"
            :to="{name: 'movie.show', params: {id: movie.id}}"
          >
            <span>{{ movie.id }}.</span> {{ movie.title }}
          </router-link>
          <p class="mb-3" style="color: #999">{{ movie.date }}</p>
          <p class="w-full">{{ movie.desc }}</p>
        </div>
        <p
          class="
            mr-0
            text-3xl
            font-bold
            px-1
            py-3
            bg-green-500
            text-white
            rounded-md
          "
        >
          {{ movie.rate }}
        </p>
      </div>
    </div>
    <div>
      <div>
        <form class="mx-auto my-10" action="">
        <h1 class="mx-auto text-center text-3xl font-bold">Insert new data</h1>
        <p class="text-xl font-bold">Enter id</p>
          <select v-model="form.id" name="" id="">
            <option v-for="setID of 100" :key="setID" :value="setID">
              {{ setID }}
            </option>
          </select>
          <p class="text-xl font-bold">Enter Meta Score</p>
          <select v-model="form.meta" name="" id="">
            <option v-for="setID of 100" :key="setID" :value="setID">
              {{ setID }}
            </option>
          </select>
          <p class="text-xl font-bold">Enter User Score</p>
          <select v-model="form.user" name="" id="">
            <option v-for="setID of 100" :key="setID" :value="setID">
              {{ setID }}
            </option>
          </select>
          <input type="text" placeholder="Enter name..." v-model="form.name" />
          <input type="text" placeholder="Enter date..." v-model="form.date" />
          <input
            type="text"
            placeholder="Enter image url..."
            v-model="form.img"
          />
          <p class="text-xl font-bold">Write mustSee values</p>
          <div class="flex items-center">
            <label for="">True</label
            ><input
              class="mx-3 w-max"
              type="radio"
              value="true"
              v-model="form.mustSee"
            />
            <label for="">False</label
            ><input
              class="mx-3 w-max"
              type="radio"
              value="false"
              v-model="form.mustSee"
            />
          </div>
          <textarea placeholder="Enter description..." name="" id="" v-model="form.desc"></textarea>
          <input
            type="text"
            placeholder="Enter video url..."
            v-model="form.video"
          />
          <button class="w-full text-center text-white bg-green-600 rounded-lg p-3 font-bold" @submit.prevent="sendForm()">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Movies",
  data() {
    return {
      setID: 1,
      errors: [],
      movies: [],
      urlMovie: "http://localhost:3001/movies",
      form: {
        id: 0,
        name: "",
        date: "",
        img: "",
        mustSee: true,
        desc: "",
        video: "",
        meta: 0,
        user: 0,
      },
    };
  },
  async mounted() {
    try {
      const takeData = await fetch(this.urlMovie);
      const result = await takeData.json();
      this.movies.push(...result);
      console.log(this.movies);
    } catch (error) {
      this.errors.push(error);
    }
  },
  methods: {
    async sendForm() {
      JSON.parse(this.form.mustSee.toLowerCase());
      try {
        const res = await axios.post(this.urlMovie, {
          name: this.form.name,
          desc: this.form.desc,
          date: this.form.date,
          image: this.form.img,
          mustSee: this.form.mustSee,
          video: this.form.video,
          meta: this.form.meta,
          user: this.form.user,
        });
        this.movies = [...this.movies, res.data];
        this.form.name = "";
        this.$router.push({ path: '/' })
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>