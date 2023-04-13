<template>
    <v-row>
        <v-col>
            <v-card flat>
                <v-card style="background-color: #714eff;">
                    <v-card-subtitle class="white--text font-weight-bold pb-1 font-italic">Question No.1</v-card-subtitle>
                    <v-text-field outlined dark dense class="mx-4"></v-text-field>
                </v-card>

                <v-radio-group class="my-0 py-0">
                    <v-card-subtitle class="font-weight-bold pb-1 font-italic">Choices</v-card-subtitle>
                    <choice-input v-for="count in counts" />

                    <v-card-actions class="pb-0">
                        <v-btn text color="red" class="ml-auto">Delete Question</v-btn>
                        <v-btn outlined class="mr-2" color="#714eff" @click="addNewChoice()">Add New Choice</v-btn>
                    </v-card-actions>

                </v-radio-group>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import ChoiceInput from './ChoiceInput.vue'

export default {
    name: 'NewQuestion',
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