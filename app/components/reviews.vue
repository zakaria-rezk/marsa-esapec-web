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
                <div v-for="(t, i) in testimonials" :key="i" class="border border-border rounded-xl p-6 text-left">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-muted-foreground/20" />
                            <div>
                                <p class="font-semibold text-primary-foreground text-sm">{{ t.name }}</p>
                                <p class="text-primary-foreground text-xs">{{ t.location }}</p>
                            </div>
                        </div>

                        <!-- Stars -->
                        <div class="flex gap-0.5">
                            <Star v-for="j in 5" :key="j" class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </div>
                    </div>

                    <p class="text-[#666666] text-sm leading-relaxed">
                        {{ t.text }}
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
<script setup>import { Star  } from "lucide-vue-next";

const testimonials = [
    {
        name: "Sara Mohamed",
        location: "Jakatar",
        text: "I Had An Amazing Experience With This Company. The Service Was Top-Notch, And The Staff Was Incredibly Friendly.",
    },
    {
        name: "Sara Mohamed",
        location: "Jakatar",
        text: "I Had An Amazing Experience With This Company. The Service Was Top-Notch, And The Staff Was Incredibly Friendly.",
    },
    {
        name: "Sara Mohamed",
        location: "Jakatar",
        text: "I Had An Amazing Experience With This Company. The Service Was Top-Notch, And The Staff Was Incredibly Friendly.",
    },
];</script>