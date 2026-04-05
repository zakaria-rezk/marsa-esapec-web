<template>
    <section class="p-4 space-y-4">

        <!-- Empty State -->
        <div v-if="!reviews?.length" class="text-center text-gray-500 py-10">
            لا يوجد تقييمات
        </div>

        <!-- Reviews -->
        <div v-for="(review, index) in reviews" :key="index"
            class="bg-white border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition">

            <!-- Header -->
            <div class="flex items-center justify-between mb-3">

                <!-- userName + Avatar -->
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                        {{ review.userName.charAt(0) }}
                    </div>

                    <div>
                        <h3 class="font-semibold text-gray-800">
                            {{ review.userName }}
                        </h3>

                        <!-- Status -->
                        <span class="text-xs px-2 py-1 rounded-full" :class="statusMap[review.status]?.class">
                            {{ statusMap[review.status].label }}
                        </span>
                    </div>
                </div>

                <!-- Rating -->
                <div class="flex items-center gap-1">
                    <span v-for="i in 5" :key="i" class="text-sm"
                        :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'">
                        ★
                    </span>
                </div>

            </div>


            <p class="text-gray-600 text-sm leading-relaxed">
                {{ review.comment }}
            </p>
            <div class="flex items-center justify-end gap-2 mt-3">
                <!-- Accept -->
                <button :disabled="review.status === 'accepted'" class="px-3 py-1 text-sm rounded-lg" :class="review.status == 'accepted'
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-green-500 text-white hover:bg-green-600'"
                    @click="$emit('change-status', { id: review.id, status: 'accepted' })">
                    قبول
                </button>

                <!-- Reject -->
                <button class="px-3 py-1 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                    @click="$emit('change-status', { id: review.id, status: 'rejected' })">
                    رفض
                </button>

            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
interface Review {
    userName: string
    rating: number
    comment: string
    status: 'accepted' | 'rejected' | 'pending'
}
const emit = defineEmits<{
    (e: 'change-status', payload: { id: number; status: string }): void
}>()
const props = defineProps<{
    reviews: Review[]
}>()

const { reviews } = toRefs(props)

const statusMap = {
    accepted: {
        label: 'مؤكد',
        class: 'bg-green-100 text-green-600'
    },
    rejected: {
        label: 'ملغي',
        class: 'bg-red-100 text-red-600'
    },
    pending: {
        label: 'انتظار',
        class: 'bg-yellow-100 text-yellow-600'
    }
}
</script>