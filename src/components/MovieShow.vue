<template>
    <div class="container">
        <div class="bg-black h-96 text-white p-10 flex">
            
            <div>
                <div class="grid grid-col-2 gap-1">
                    <h1 class="text-3xl font-bold">{{ movie.title }}</h1>
                    <p>{{ movie.date }}</p>
                </div><br>
                <hr class="w-96 mb-2">
                <div class="block">
                    <div class="block flex">
                        <h2 class="text-2xl font-bold mt-3">METASCORE</h2>
                        <img class="h-14 ml-20" src="https://www.metacritic.com/images/icons/mc-mustsee.svg" alt="">
                        <p class="text-3xl ml-12 font-bold
                        px-2
                        py-3
                        bg-green-500
                        text-white
                        rounded-md">
                            {{ movie.rate }}
                        </p>
                    </div>
                </div>
                <hr class="w-96 mt-2">
                <div class="block mt-2">
                    <div class="block flex">
                        <h2 class="text-2xl font-bold mt-3">USER SCORE</h2>
                        <img class="h-14 ml-20" src="https://www.metacritic.com/images/icons/mc-mustsee.svg" alt="">
                        <p class="text-3xl ml-12 mt-1 font-bold
                        px-1
                        py-2
                        bg-green-500
                        text-white
                        rounded-full">
                            {{ movie.user }}
                        </p>
                    </div>
                </div>
                <hr class="w-96 mt-2">
            </div>
            <video class="ml-20" width="420" height="381" controls>
                <source :src="movie.video" type="video/mp4">
            </video>
        </div>
        <div class="mx-auto w-22">
            <p class="m-4 text-xl text-success text-center">   
            Positive Reviews: {{ Object.keys(movie.reviews).length + 2}}
            </p>
        </div>
        <div class="grid grid-cols-2 mx-auto w-1/2 gap-x-40">
            <div class="m-4 w-60">
                <div class="flex">
                    <p class="text-xl font-bold
                        px-3
                        py-3
                        bg-green-500
                        text-white
                        rounded-md">
                        {{ movie.rate }}
                    </p>                
                    <h2 class="text-2xl ml-6 font-semibold">TV Guide Magazine</h2>

                </div>
                <p> {{ movie.reviews.review }} </p>
            </div>
            <div class="m-4 w-60">
                <div class="flex">
                    <p class="text-xl font-bold
                        px-3
                        py-3
                        bg-green-500
                        text-white
                        rounded-md">
                        {{ movie.rate}}
                    </p>  
                    <h2 class="text-2xl ml-6 font-semibold">Los Angeles Times</h2><br>

                </div>
                <p>{{ movie.reviews.review }}</p>
            </div>
            <div class="m-4 w-60">
                <div class="flex">
                    <p class="text-xl font-bold
                        px-3
                        py-3
                        bg-green-500
                        text-white
                        rounded-md">
                        {{ movie.rate }}
                    </p>  
                    <h2 class="text-2xl ml-6 font-semibold">New York Times</h2><br>

                </div>
                <p> {{ movie.reviews.review2 }} </p>
            </div>
            <div class="m-4 w-60">
                <div class="flex">
                    <p class="text-xl font-bold
                        px-3
                        py-3
                        bg-green-500
                        text-white
                        rounded-md">
                        {{ movie.rate }}
                    </p>  
                    <h2 class="text-2xl ml-6 font-semibold">Chicago Tribune</h2><br>

                </div>
                <p> {{ movie.reviews.review2 }} </p>
            </div>
        </div>
    </div>
</template>
<script>
import sourceData from '../../db.json'
export default{
    computed:{
        movieId(){
            return parseInt(this.$route.params.id)
        },
        movie(){
            return sourceData.movies.find(movie => movie.id === this.movieId)
        }
    }

}
</script>
