<template>
<div class="col">
    <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
            <!-- <text x="50%" y="50%" fill="#eceeef" dy=".3em">{{ articl.title }}</text> -->
        </svg>
        <div class="card-body">
            <p class="card-title fw-bold">{{ articl.title }}</p>
            <p class="card-text">{{ articl.description }}</p>
            <div class="d-flex justify-content-between align-items-center card-footer">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Read articl</button>
                    <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
                </div>
                <small class="text-body-secondary">{{ new Date(articl.createdAt).toLocaleDateString('us') }}</small>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        articl: {
            type: Object,
            required: true
        }
    }
}
</script>

<style >

</style>
