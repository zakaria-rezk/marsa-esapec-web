<template>
    <section class="px-4">
        <div class="max-w-6xl mx-auto text-center">

            <!-- Avatars badge -->
            <div class="flex items-center justify-center gap-2 mb-6">
                <!-- <div class="flex -space-x-2">
                    <div class="w-8 h-8 rounded-full bg-muted-foreground/20 border-2 border-background" />
                    <div class="w-8 h-8 rounded-full bg-muted-foreground/30 border-2 border-background" />
                    <div class="w-8 h-8 rounded-full bg-muted-foreground/40 border-2 border-background" />
                </div> -->
                <span class="text-sm text-primary-foreground font-medium bg-muted px-3 py-1 rounded-full">
                    Testimonials
                </span>
            </div>

            <h2 class="text-2xl md:text-4xl font-bold text-primary-foreground mb-12">
                What Our Clients Are<br />Saying About Us?
            </h2>
            <!-- Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div v-for="(t, i) in data" :key="i" class="border border-[#E6E6E6] rounded-xl p-6 text-left">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-10 bg-primary-foreground h-10 rounded-full flex items-center justify-center text-white font-semibold">
                                {{ t.userName?.charAt(0).toUpperCase() }}
                            </div>
                            <div>
                                <p class="font-semibold text-primary-foreground text-sm">{{ t.userName }}</p>

                            </div>
                        </div>

                        <!-- Stars -->
                        <div class="flex gap-0.5">
                            <Star v-for="j in t.rating" :key="j" class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </div>
                    </div>

                    <p class="text-[#666666] text-sm leading-relaxed">
                        {{ t.comment }}
                    </p>
                </div>
            </div>

            <!-- Dots -->
            <div class="flex justify-center gap-2">
                <div class="w-2 h-2 rounded-full bg-secondary" />
                <div class="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <div class="w-2 h-2 rounded-full bg-muted-foreground/30" />
            </div>
        </div>
    </section>
</template>
<script setup>
import { Star } from "lucide-vue-next";
import { getItems } from "~/services/trips";

onMounted(() => {
    getTrips()
})
const data = ref()
const getTrips = async () => {
    try {
        const res = await getItems('trip-reviews')
        const reviews = res.data?.data

        data.value = reviews.slice(0, 3)


    } catch (err) { }
}
</script>