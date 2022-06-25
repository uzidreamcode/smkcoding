<template>
    <div>
        <h1>Ini About {{ currentRouteName }} Page</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            about: '',
        }
    },
    computed: {
        currentRouteName() {
            return this.$route.params.id
        }
    },  
}
</script>

<style>

</style>