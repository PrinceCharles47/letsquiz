<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="8" md="6" class="mx-auto mb-4">
                <v-btn block dark class="mb-4" color="#714eff">Save Quiz</v-btn>

                <v-card flat class="mb-4">
                    <v-card-subtitle class="font-weight-bold pb-1 font-italic" id="quiz-name">Quiz Name</v-card-subtitle>
                    <v-text-field outlined dense class="mx-4"></v-text-field>
                </v-card>

                <v-card-subtitle class="font-weight-bold py-2 px-0" style="color: #714eff;">
                    Questions
                    <p class="text-body-2 black--text"><span class="font-weight-bold">NOTE:</span> Click on one of the
                        answers to mark it as the correct one.</p>
                </v-card-subtitle>

                <new-question v-for="count in counts" />
                <v-btn dark class="float-right mt-4" color="#714eff" @click="addNewQuestion">Add New Question</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import NewQuestion from '@/components/NewQuestion.vue';

export default {
    name: 'CreateQuiz',
    components: {
        NewQuestion
    },
    data: () => ({
        counts: 1
    }),
    methods: {
        addNewQuestion: function () {
            this.counts++;
        }
    }
}
</script>

<style scoped>

#quiz-name {
    border-top: 5px solid #714eff;
}

</style>