<template>
    <div class="parameter">parameter</div>
</template>

<script>
export default {
    created () {
        console.log(this.$route.params.id)
    }
}
</script>