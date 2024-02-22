<template>
<header class="header">
    <div class="container">
        <div class="box d-flex justify-content-between align-items-center">
            <div class="box_div">
                <p @click="Homehendler" class="box_div_paragrf">Ilhomjon</p>
            </div>
            <template v-if="inloged">
                <div class="d-flex gap-5">
                    <div>{{ user.username }}</div>
                    <a @click="logautHandler" href="#" class="text-dark text-decoration-none">Logout</a>
                </div>
            </template>
            <template v-else-if="isAnonymous">
                <div class="box_btn">
                <RouterLink class="up" :to="{name: 'Login'}">Login</RouterLink>
                <RouterLink class="in" :to="{name: 'Register'}">Registir</RouterLink>
                </div>
            </template>
        </div>
    </div>
</header>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
import { gettertyps } from "../moduls/type"
export default {
    methods:{
        Homehendler() {
            return this.$router.push('/')
        },
        logautHandler() {
             this.$store.dispatch('logAut')
        }
    },
    computed: {
        // ...mapState({
        //     user: state => state.auth.user,
        //     inloged: state => state.auth.inloged,
        // }),
        ...mapGetters({
            user: gettertyps.currentUser,
            inloged: gettertyps.inloged,
            isAnonymous: gettertyps.isAnonymous
        }),
    }
}
</script>

<style>
header {
    background: linear-gradient(179.59deg, #EDEDED 0.35%, rgba(255, 255, 255, 0.0001) 99.63%);
    border-bottom: 1px solid gainsboro;
}

header .box a {
    text-decoration: none;
}

header .box_div_paragrf {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 28px;
    color: #173A56;
    cursor: pointer;
}

.header {
    padding: 10px 0px;
}

.header .box_btn {
    display: block;
    display: flex;
    gap: 24px;
}

.header .box_btn .in {
    padding: 10px 24px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border-radius: 4px;
    transition: 1s;
    border: 1px solid #BCD0E5;
    color: #173A56;
}

.header .box_btn .in:hover {
    color: #FFFFFF;
    background: #a9b5b3;
}

.header .box_btn .up {
    padding: 10px 24px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border-radius: 4px;
    transition: 1s;
    color: #161616;
    background: #81a68a;
}

.header .box_btn .up:hover {
    color: #173A56;
    background: #e0eaee;
}
</style>
