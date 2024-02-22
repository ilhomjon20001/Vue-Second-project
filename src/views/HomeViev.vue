<template >
    <div class="mt-4">
        <div v-if="isloading" class="offset-md-6" >
            <Loader />
        </div>
        <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <articlesHomVue v-for="articl in data" :key="articl.id" :articl="articl" />
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import articlesHomVue from '@/components/articlesHom.vue';
export default {
    components: {
        articlesHomVue,
    },
    computed: {
        ...mapState({
            data: state => state.articilsmod.data,
            isloading: state => state.articilsmod.isloading,
            error: state => state.articilsmod.error
        })
    },
    mounted() {
        this.$store.dispatch('articles')
    }
}
</script>
<style >
    
</style>