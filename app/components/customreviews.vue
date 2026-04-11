<template>
    <div class="min-h-screen bg-background">
        <section class="py-16 md:py-24 px-4">
            <div class="max-w-4xl mx-auto">

                <h2 class="text-2xl md:text-3xl font-bold text-secondary mb-10">
                    Reviews
                </h2>

                <div class="divide-y divide-border">
                    <div v-for="(r, i) in reviews" :key="i" class="py-6 flex gap-4 md:gap-6">
                        <!-- Avatar -->
                        <div class="w-14 h-14 rounded-full bg-muted-foreground/20 flex-shrink-0" />

                        <!-- Left -->
                        <div class="flex-shrink-0 w-36 md:w-44">

                            <!-- Stars -->
                            <div class="flex gap-0.5 mb-1">
                                <Star v-for="j in 5" :key="j" class="w-3.5 h-3.5" :class="j <= r.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-muted-foreground/30'" fill="currentColor" />
                            </div>

                            <!-- Name -->
                            <div class="flex items-center gap-1.5">
                                <span class="text-sm font-semibold text-foreground">
                                    {{ r.name }}
                                </span>
                                <CheckCheck class="w-4 h-4 text-primary" />
                            </div>

                            <!-- Date -->
                            <p class="text-xs text-muted-foreground mt-0.5">
                                {{ r.date }}
                            </p>
                        </div>

                        <!-- Right -->
                        <div class="flex-1 min-w-0">
                            <h3 class="font-bold text-secondary text-sm md:text-base mb-1">
                                {{ r.title }}
                            </h3>
                            <p class="text-muted-foreground text-sm leading-relaxed">
                                {{ r.text }}
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script setup>
import { Star, CheckCheck } from "lucide-vue-next";

const reviews = [
    {
        name: "Arlene McCoy",
        date: "2 October 2025",
        rating: 4,
        title: "Very Professional Service",
        text: "Booking the taxi was simple and the team contacted us quickly to confirm everything. The driver was friendly and the vehicle was modern",
    },
    {
        name: "Arlene McCoy",
        date: "2 October 2025",
        rating: 4,
        title: "Very Professional Service",
        text: "Booking the taxi was simple and the team contacted us quickly to confirm everything. The driver was friendly and the vehicle was modern",
    },
    {
        name: "Arlene McCoy",
        date: "2 October 2025",
        rating: 4,
        title: "Very Professional Service",
        text: "Booking the taxi was simple and the team contacted us quickly to confirm everything. The driver was friendly and the vehicle was modern",
    },
];
</script>