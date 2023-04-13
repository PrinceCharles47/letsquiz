<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="8" md="6" class="mx-auto mb-4">

                <p id="quiz-title" class="pa-4 white--text text-h6">LATEST TRENDS IN ICT</p>

                <v-card flat outlined id="score-summary" class="mb-4">
                    <v-row>
                    <v-col class="d-flex flex-column align-center py-4">
                        <p class="text-h5 mb-0 mt-3 font-weight-bold scores">12</p>
                        <v-card-subtitle class="pa-0 mb-3">Correct</v-card-subtitle>
                    </v-col>

                    <v-col class="d-flex flex-column align-center py-4">
                        <p class="text-h5 mb-0 mt-3 font-weight-bold scores">3</p>
                        <v-card-subtitle class="pa-0 mb-3">Incorrect</v-card-subtitle>
                    </v-col>

                    <v-col class="d-flex flex-column align-center py-4">
                        <p class="text-h5 mb-0 mt-3 font-weight-bold scores">25</p>
                        <v-card-subtitle class="pa-0 mb-3">Remaining</v-card-subtitle>
                    </v-col>
                </v-row>
                </v-card>

                <question />
                <v-btn dark class="float-right mt-4" :color="backgroundColor" @click="addNewQuestion">Submit</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Question from '@/components/Question.vue';

export default {
    name: 'TakeQuiz',
    components: {
        Question
    },

    data: () => ({
        backgroundColor: '#714EFF'
    }),
}

</script>

<style scoped>
/* *{
    border: 1px solid grey;
} */

#quiz-title{
    background-color: #714EFF;
    border-radius: 5px;
}

#score-summary{
    /* background-color: white; */
    border: 1px solid #714EFF;
    /* border-radius: 5px; */
}

.scores{
    color: #714EFF;
}

</style>
