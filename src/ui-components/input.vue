<template>
<div class="form-floating" >
    <input 
    :type="type" 
    class="form-control mt-3" 
    :id="placeholder"
    :placeholder="placeholder"
    @input="inputHandler"
    :value="modelValue"
    >
    <label :for="placeholder" >{{ label }}</label>
</div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        label: String,
        type: String,
        placeholder: String,
        modelValue: [String , Number]
    },
    methods: {
        inputHandler(e){
            this.$emit("update:modelValue", e.target.value)
        }
    }
}
</script>

<style>

</style>
