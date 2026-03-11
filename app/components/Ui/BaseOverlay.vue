<template>
    <transition name="popup">
        <div v-if="openModal"
            class="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center w-screen h-full m-0 p-0">
            <slot></slot>
        </div>
    </transition>
</template>
<script setup lang="ts">
interface Props {
    openModal: boolean
}
const props = defineProps<Props>()
</script>
<style scoped>
.popup-enter-active,
.popup-leave-active {
    transition: all 0.25s ease;
}

.popup-enter-from {
    opacity: 0;
    transform: translate(50%, -60%) scale(0.95);
}

.popup-enter-to {
    opacity: 1;
    transform: translate(50%, -50%) scale(1);
}

.popup-leave-from {
    opacity: 1;
    transform: translate(50%, -50%) scale(1);
}

.popup-leave-to {
    opacity: 0;
    transform: translate(50%, -60%) scale(0.95);
}
</style>