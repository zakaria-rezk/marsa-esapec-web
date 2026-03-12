<template>
    <div class="my-2">
        <label :for="id" class="text-gray-400 font-medium">{{ label }}</label>
        <input v-if="type != 'textarea'"
            class="w-full border py-2 border-primary border-xl bg-gray-200 mt-2  px-2 rounded-xl" v-model="model"
            :type="type" :disabled="disabled" :required="required" :placeholder="placeholder">
        <textarea v-else class="w-full border py-2 border-primary border-xl bg-gray-200 mt-2  px-2 rounded-xl"
            v-model="model" :type="type" :disabled="disabled" :required="required"
            :placeholder="placeholder"></textarea>
        <p class="text-danger text-sm h-2 font-sm mt-1" v-if="error"> {{ error }}</p>
    </div>
</template>
<script setup lang="ts">
const model = defineModel<any>()
interface Props {
    id: string,
    type: string,
    placeholder: string,
    required: boolean,
    disabled: boolean,
    label: string,
    error: any
}
defineProps<Props>()
</script>