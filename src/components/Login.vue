<template>
    <main class="form-signin w-25 m-auto pt-5">
        <form>
            <img class="mb-4" src="./img/logo.svg" alt="" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">Login</h1>
            <Input :label="'Email address'" :type="'email'"  :placeholder="'name@example.com'"  />
            <Input :label="'Password'" :type="'password'"  :placeholder="'Password'" />
            <Button type="submit">Sign in</Button>
        </form>
    </main>
</template>

<script>
export default {

}
</script>

<style>

</style>
