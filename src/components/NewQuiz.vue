<template>
    <v-card flat outlined>
        <v-card style="background-color: #714eff;">
            <v-card-subtitle class="white--text font-weight-bold pb-1">Question No. 1</v-card-subtitle>
            <v-text-field outlined dark dense class="mx-4"></v-text-field>
        </v-card>

        <v-radio-group class="my-0 py-0">
            <v-card-subtitle class="font-weight-bold pb-1">Choices</v-card-subtitle>
            <choice-input v-for="count in counts"/>

            <v-card-actions class="py-0">
                <v-btn plain color="#714eff" class="ml-auto" @click="addNewChoice()">Add New Choice</v-btn>
            </v-card-actions>

        </v-radio-group>

    </v-card>
</template>

<script>
import ChoiceInput from './ChoiceInput.vue'

export default {
    name: 'NewQuiz',
    components: {
        ChoiceInput
    },
    data: () => ({
        counts: 1,
    }),
    methods: {
        addNewChoice: function () {
            this.counts += 1;
        }
    }
}

</script>

<style scoped>
/* *{
    border: 1px solid grey;
} */

</style>