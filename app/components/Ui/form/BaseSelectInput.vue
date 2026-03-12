<template>
    <div class="my-2"><label :for="id" class="text-gray-400 font-medium">{{ label }}</label>
        <div id="input" @click="toggle()"
            class="w-full border text-gray-400 cursor-pointer py-2 border-primary border-xl bg-gray-200 mt-2  px-2 rounded-xl">
            {{
                selectedValue || placeholder
            }}</div>
        <template v-if="open">
            <div id="selectOptions" @click="changeModel(option.id as number)" v-for="option in selectOptions"
                :key="option.id"
                class="w-full border text-gray-400 cursor-pointer py-2 border-primary border-xl bg-gray-50 mt-2  px-2 rounded-xl">
                {{ option.value }}
            </div>
        </template>
    </div>
</template>
<script setup lang="ts">
import { useToggle } from "@vueuse/core"
const [open, toggle] = useToggle(false)
const model = defineModel()
interface Props {
    id: string
    label: string
    selectedValue: string
    placeholder: string
    selectOptions: Record<string, string | number>[]
}
defineProps<Props>()
const changeModel = (id: number) => {
    model.value = id
}
</script>