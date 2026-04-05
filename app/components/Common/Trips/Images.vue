<template>
    <section class="p-4 space-y-4">
        <div class="flex justify-end">
            <label class="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/90">
                ➕ إضافة صورة
                <input type="file" class="hidden" multiple @change="addImg" />
            </label>
        </div>
        <!-- Empty State -->
        <div v-if="!images?.length" class="text-center text-gray-400 py-10">
            لا توجد صور
        </div>

        <div v-if="images?.length" class="grid grid-cols-2 gap-3">
            <div v-for="(img, index) in fullImages" :key="index" class="relative">
                <img :src="img.url" @click="selectedImage = img.url"
                    class="w-full h-60 object-fill rounded-xl border transition" :class="selectedImage === img.url
                        ? 'border-primary scale-105'
                        : 'border-border hover:border-gray-300'" />
                <button @click.stop="emits('deleteImage', img.id)"
                    class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg hover:bg-red-600">
                    <font-awesome-icon :icon="faClose" />
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

import { faClose } from '@fortawesome/free-solid-svg-icons';
import { emit } from 'node:cluster';
const props = defineProps<{
    id: number
    images: string[]
}>();
const emits = defineEmits<{
    deleteImage(id: number): void;
    addImage(formData: any): void;
}>()
const BASE_URL = 'https://captivating-emotion-production-cee2.up.railway.app'
const fullImages = computed(() => {
    return images.value.map(img => {
        return {
            url: `${BASE_URL}${img.url}`,
            id: img.id
        }
    })
})
const test = ref("")
const { images } = toRefs(props)
const selectedImage = ref<string>('');
const formData = ref<FormData>(new FormData());
const addImg = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (!target.files?.length) return
    Array.from(target.files).forEach((file) => {
        formData.value.append(`images`, file)
    })
    emits('addImage', formData.value)
}

</script>