<template>
<main class="form-signin w-25 m-auto pt-5">
    <form>
        <img class="mb-4" src="../img/logo.svg" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">Register</h1>

        <ValidationErrorVue v-if="validaterror"   :validater="validaterror" />

        <Input :label="'Name'" :type="'text'" :placeholder="'Name'" v-model="user" />
        <Input :label="'Email address'" :type="'email'" :placeholder="'name@example.com'" v-model="emeil" />
        <Input :label="'Password'" :type="'password'" :placeholder="'Password'" v-model="password" />
        <Button type="submit"  :disabled="isloading" @click="submitHandler">Sign in</Button>
        <p class="mt-3 mb-3 text-body-secondary">2024</p>
    </form>
</main>
</template>

<script>
import ValidationErrorVue from './ValidationError.vue'
export default {
    data() {
        return {
            user: '',
            emeil: '',
            password: ''
        }
    },
    components: {
        ValidationErrorVue,
    },
    computed: {
        isloading() {
            return this.$store.state.auth.isloading
        },
        validaterror() {
            return this.$store.state.auth.errors
        }
    },
    methods: {
        submitHandler(e) {
            e.preventDefault();
            const data = {
                username: this.user,
                email: this.emeil,
                password: this.password
            }
            this.$store.dispatch("register", data)
            .then(user => {
                console.log('USER', user)
                this.$router.push({name: 'Home'})
            })
            .catch(err => {
                console.log('ERROR', err)
            })
        }
    }
}
</script>

<style>

</style>
