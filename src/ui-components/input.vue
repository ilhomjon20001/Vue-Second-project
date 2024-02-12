<template>
<div class="form-floating" >
    <input :type="type" class="form-control mt-3" :placeholder="placeholder">
    <label >{{ label }}</label>
</div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        label: String,
        type: String,
        placeholder: String,
        
    },
}
</script>

<style>

</style>
