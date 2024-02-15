<template>
    <main class="form-signin w-25 m-auto pt-5">
        <form>
            <img class="mb-4" src="../img/logo.svg" alt="" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">Login</h1>
            <ValidationError v-if="validaterror"   :validater="validaterror" />
            <Input 
            :label="'Email address'" :type="'email'" 
            :placeholder="'name@example.com'" 
            v-model="emeil" />
            <Input 
            :label="'Password'" :type="'password'"  
            :placeholder="'Password'" 
            v-model="password"/>
            <Button type="submit" @click="loginhendler">Sign in</Button>
        </form>
    </main>
</template>

<script>
import ValidationError from './ValidationError.vue';
export default {
    data() {
        return {
            emeil: '',
            password: ''
        }
    },
    components: {
    ValidationError,
    },
    computed: {
        validaterror() {
            return this.$store.state.auth.errors
        }
    },
    methods: {
        loginhendler(e) {
            e.preventDefault();
            const data = {
                email: this.emeil,
                password: this.password
            }
            this.$store.dispatch('login', data).then(user => {
                console.log('USER', user);
                this.$router.push({name: 'Home'})
            }).catch(err => {
                console.log('ERROR', err);
            })
        }
    }
}
</script>

<style>

</style>
