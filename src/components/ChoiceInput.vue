<template>
    <div class="d-flex align-center mx-4 mb-2 pa-3 choice-container">
        <v-radio class="ma-0"/>
        <input type="text" placeholder="Type here..." style="width: 100%;">
        <v-icon color="red">mdi-close</v-icon>
    </div>
</template>

<script>
export default {
    name: 'ChoiceInput',
    data: () => ({

    })
}
</script>
<style scoped>

/* *{
    border: 1px solid gray;
} */
.choice-container {
    border: 1px solid #d9d9d9;
    border-radius: 5px;
}
</style>