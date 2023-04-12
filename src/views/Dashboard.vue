<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="8" md="6" class="mx-auto">
                <v-btn :block="block">Create Quiz</v-btn>
                <v-card-title class="pl-0">My Quizzes</v-card-title>
                <quiz-card />
                <quiz-card />
                <quiz-card />
                <quiz-card />
                <quiz-card />
                <quiz-card />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import QuizCard from '@/components/QuizCard.vue';

export default {
    name: 'Dashboard',

    data: () => ({
        block: true     
    }),
    components: {
        QuizCard
    }
}
</script>

<style scoped>

/* *{
    border: 1px solid grey;
} */

</style>
