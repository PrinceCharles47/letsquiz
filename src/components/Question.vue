<template>
    <v-row>
        <v-col>
            <v-card flat>
                <v-card style="background-color: #714eff;">
                    <v-card-subtitle class="white--text font-weight-bold pb-1 font-italic">Question No.1</v-card-subtitle>
                    <v-card-text class="white--text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam saepe, iure necessitatibus quia
                        aperiam explicabo earum accusantium optio maiores facere corrupti laboriosam veniam officiis harum
                        vel modi rem corporis et?
                    </v-card-text>
                </v-card>

                <v-radio-group class="mb-0 py-0">
                    <div class="d-flex align-center mx-4 mb-2 pa-2 choice-container">
                        <v-radio class="ma-0" />
                        <v-card-text class="py-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</v-card-text>
                    </div>

                    <div class="d-flex align-center mx-4 mb-2 pa-2 choice-container">
                        <v-radio class="ma-0" />
                        <v-card-text class="py-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</v-card-text>
                    </div>

                    <div class="d-flex align-center mx-4 mb-2 pa-2 choice-container">
                        <v-radio class="ma-0" />
                        <v-card-text class="py-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</v-card-text>
                    </div>

                    <div class="d-flex align-center mx-4 mb-2 pa-2 choice-container">
                        <v-radio class="ma-0" />
                        <v-card-text class="py-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</v-card-text>
                    </div>
                </v-radio-group>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import ChoiceInput from './ChoiceInput.vue'

export default {
    name: 'Question',
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
.choice-container {
    border: 1px solid #d9d9d9;
    border-radius: 5px;
}

</style>