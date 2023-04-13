<template>
    <v-btn :block="isBlock">Create Quiz</v-btn>
</template>
  
<script>

export default {
    name: 'ButtonMain',
    props: {
        isBlock: Boolean,
        label: String,
    },
    data: () => ({

    }),
    methods: {

    }
};
</script>
  
<style>
/* #navbar {
    background: transparent;
} */
</style>
  