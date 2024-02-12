<template>
<main class="form-signin w-25 m-auto pt-5">
    <form>
        <img class="mb-4" src="./img/logo.svg" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">Register</h1>
        <Input :label="'Name'" :type="'text'" :placeholder="'Name'" />
        <Input :label="'Email address'" :type="'email'" :placeholder="'name@example.com'" />
        <Input :label="'Password'" :type="'password'" :placeholder="'Password'" />
        <Button type="submit"  :disabled="isloading" @click="submitHandler">Sign in</Button>
        <p class="mt-3 mb-3 text-body-secondary">2024</p>
    </form>
</main>
</template>

<script>
export default {
    computed: {
        isloading() {
            return this.$store.state.auth.isloading
        },
    },
    methods: {
        submitHandler(e) {
            e.preventDefault();
            const data = {
                username: 'ilhoenfejldd',
                email: 'samrudcdek@cajs.x',
                password: 'djeijecedidi'
            }
            this.$store.dispatch("register",data)
        }
    }
}
</script>

<style>

</style>
