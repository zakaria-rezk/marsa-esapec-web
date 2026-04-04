<template>
    <div
        class="absolute overflow-y-scroll top-50 right-50 bg-white transform  h-3/4 w-3/4 sm:w-1/3 rounded-3xl py-8 md:px-5 px-1">
        <section id="head" class="my-5 flex flex-row justify-between px-4 align-center">
            <h2 class="font-medium text-gray-500">{{ title }}</h2><button @click="fireCloseEmit"
                class="bg-danger/90 rounded-xl px-2 py-1 text-gray-500 ">
                <Close class="w-5 text-white" />
            </button>
        </section>
        <hr class="bg-primary text-xl font-medium mb-5 w-3/4 m-auto" />
        <slot name="form"></slot>
        <slot name="view"></slot>
    </div>

</template>
<script setup lang="ts">
import Close from "@/assets/svgs/close.svg"
interface Props {
    title
    : string
}
defineProps<Props>()
const emits = defineEmits<{
    (e: 'close'): void
}>()
const fireCloseEmit = () => {
    emits('close')
}
</script>
