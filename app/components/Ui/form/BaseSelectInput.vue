<template>
    <div class="my-2"><label :for="id" class="text-gray-400 font-medium">{{ label }}</label>
        <div id="input" @click="toggle()"
            class="w-full flex justify-between align-cetner border text-gray-400 cursor-pointer py-2 border-primary border-xl bg-gray-200 mt-2  px-2 rounded-xl">
            <span>{{
                selectedValue || placeholder
            }}</span> <svg class="w-4 h-4 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clip-rule="evenodd" />
            </svg>
        </div>
        <template v-if="open">
            <div id="selectOptions" @click="changeModel(option)" v-for="option in selectOptions" :key="option.id"
                class="w-full border text-gray-400 cursor-pointer py-2 border-primary border-xl bg-gray-50 mt-2  px-2 rounded-xl">
                {{ option.value }}
            </div>
        </template>
        <p class="text-danger text-sm h-2 font-sm mb-4 my-1" v-show="error"> {{ error }}</p>
    </div>
</template>
<script setup lang="ts">
import { useToggle } from "@vueuse/core"
const [open, toggle] = useToggle(false)
const model = defineModel()
const selectedValue = ref<string>()
interface Props {
    id: string
    label: string
    error: any
    placeholder: string
    disabled: boolean
    required: boolean
    selectOptions: Record<string, string | number>[]
}
defineProps<Props>()
const changeModel = (optoin: any) => {
    model.value = optoin.id
    selectedValue.value = optoin.value
}
</script>