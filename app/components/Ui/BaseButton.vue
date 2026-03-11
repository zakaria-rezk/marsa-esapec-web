<template>
    <button @click="handleClick" :disabled="loading"
        class="w-full bg-danger py-2 rounded-3xl mt-2 text-white flex items-center justify-center gap-2 disabled:opacity-60">
        <!-- Spinner -->
        <svg v-if="loading" class="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="white" stroke-width="4" />
            <path class="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>

        <span>
            {{ loading ? "جارٍ الحفظ..." : "حفظ" }}
        </span>
    </button>
</template>

<script setup lang="ts">
const loading = ref(false)
interface Props {
    loading: boolean
}
defineProps<Props>()
const emits = defineEmits<{
    (e: 'save'): void
}>()
async function handleClick() {
    emits('save')
}
</script>