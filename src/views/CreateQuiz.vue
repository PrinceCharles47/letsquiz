<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="8" md="6" class="mx-auto">
                <!-- <v-btn block>Save Quiz</v-btn> -->
                <new-quiz/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import NewQuiz from '@/components/NewQuiz.vue';

export default {
    name: 'CreateQuiz',
    components: {
        NewQuiz
    },
    data: () => ({

    })
}
</script>

<style>
    
</style>