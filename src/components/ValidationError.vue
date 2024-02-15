<template >
    <ul class="list-group">
        <li class="list-group-item text-danger mt-2" v-for="errorMessage in errorMessages" :key="errorMessage">
            {{ errorMessage }}
        </li>
    </ul>
</template>
<script>

export default {
    props: {
        validater: {
            type: Object,
            required: true
        }
    },
    computed: {
        errorMessages() {
            return Object.keys(this.validater).map(name => {
                const msg = this.validater[name].join(', ')
                return  `${name},${msg}`
            })
        }
    }
}
</script>
<style >
    
</style>