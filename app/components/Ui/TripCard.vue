<template>
    <div>

        <div class="bg-background border border-[#999999]  rounded-2xl overflow-hidden shadow-sm">
            <!-- IMAGE -->
            <div class="relative h-56 bg-muted flex items-center justify-center text-[#999999]">
                <img :src="getImageUrl(trip?.images[0]?.url)" alt="trip image" class="w-full h-full object-cover" />

                <div
                    class="absolute bottom-3 right-3 bg-background rounded-full px-3 py-1 flex items-center gap-1 text-xs shadow">
                    <Star class="w-3 h-3 text-primary fill-primary" />
                    <span class="font-semibold text-foreground">
                        {{ trip?.rating }}
                    </span>
                    <!-- <span class="text-[#999999]">
                                    ({{ trip }} reviews)
                                </span> -->
                </div>
            </div>

            <div class="p-5">
                <h3 class="text-base font-bold text-[#082852] mb-2">
                    {{ trip?.name }}
                </h3>

                <div class="flex items-center gap-1 text-[#999999] text-sm mb-1">
                    <MapPin class="w-3.5 h-3.5" />
                    {{ trip?.places[0] }}
                </div>

                <div class="flex items-center gap-1 text-[#999999] text-sm mb-4">
                    <Calendar class="w-3.5 h-3.5" />
                    {{ trip?.days?.length + "days" }}
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">

                        <span class="text-primary-danger text-xl font-bold">
                            {{ trip?.price + '$' }}
                        </span>
                        <span class="text-[#999999] text-sm">/Person</span>
                    </div>
                </div>
                <button @click="goToTrip(trip.id)"
                    class="mt-4 bg-primary-danger text-white font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
                    View Details
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const goToTrip = (id: number) => {
    router.push(`/trips/${id}`)
}
interface Porps {
    trip: {
        id: number,
        immages: { url: string }[],
        name: string,
        price: number,
        rating: number,
        discount: string,
        places: string[],
        days?: string[],
    }
}
defineProps<Porps>();
import { getImageUrl } from '@/utils/image'
</script>