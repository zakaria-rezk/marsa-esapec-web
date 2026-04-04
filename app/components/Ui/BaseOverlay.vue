<template>
    <transition name="overlay">
        <div v-if="openModal" class="fixed inset-0 z-40 bg-black/50 flex justify-center items-center">
            <transition name="modal">
                <div class="w-full h-full flex justify-center items-center">
                    <slot></slot>
                </div>
            </transition>
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
/* Overlay fade */
.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.25s ease;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

.overlay-enter-to,
.overlay-leave-from {
    opacity: 1;
}

/* Modal animation */
.modal-enter-active,
.modal-leave-active {
    transition: all 0.25s ease;
}

.modal-enter-from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
}

.modal-enter-to {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.modal-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.modal-leave-to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
}
</style>