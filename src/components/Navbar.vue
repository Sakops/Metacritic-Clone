<template>
    <div class="headerMain">
        <div class="container">
            <div class="images">
                <router-link to="/movie">
                    <img src="https://www.metacritic.com/images/icons/metacritic-icon.svg" alt="">
                    <img src="https://www.metacritic.com/images/icons/metacritic-wordmark.svg" alt="">
                </router-link>
            </div>
            <div class="filter">
                <input type="text" placeholder="search...">
                <div class="resultFilter">
                </div>
            </div>
            <div class="links">
                <router-link to="/">Games</router-link>
                <router-link to="/">Movies</router-link>
                <router-link to="/">TV</router-link>
                <router-link to="/">Music</router-link>
                <router-link to="/">Sign In</router-link>
            </div>
        </div>
    </div>
</template>
<script>

</script>