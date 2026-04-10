<template>
    <div class="min-h-screen bg-background">

        <!-- ABOUT SECTION -->
        <section class="bg-muted py-16 md:py-24 px-8">

            <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                <!-- LEFT TEXT -->
                <div class="flex-1">
                    <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        About Us
                    </h2>

                    <p class="text-muted-foreground text-sm md:text-base mb-4 max-w-xl">
                        We are a local travel company based in Marsa Alam, helping international tourists
                        discover the beauty of Egypt through carefully planned tours and packages.
                    </p>

                    <p class="text-muted-foreground text-sm md:text-base mb-8 max-w-xl">
                        From transportation and tour guides to SIM cards and local support, we take care
                        of every detail to make your trip smooth, comfortable, and unforgettable.
                    </p>

                    <ul class="space-y-4">
                        <li v-for="item in features" :key="item"
                            class="flex items-center gap-3 text-foreground text-sm md:text-base">
                            <CheckCircle class="w-5 h-5 text-primary flex-shrink-0" />
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <!-- RIGHT IMAGE GRID -->
                <div class="flex-1 relative flex justify-end">

                    <!-- top right image -->
                    <div class="w-56 h-64 md:w-64 md:h-72 bg-secondary/20 rounded-lg overflow-hidden shadow-lg z-10">
                        <div
                            class="w-full h-full bg-muted-foreground/10 flex items-center justify-center text-muted-foreground text-xs">
                            IMG
                        </div>
                    </div>

                    <!-- bottom left overlapping -->
                    <div
                        class="absolute bottom-0 left-1/4 lg:left-8 w-52 h-40 md:w-60 md:h-44 bg-secondary/20 rounded-lg overflow-hidden shadow-lg z-20 translate-y-4">
                        <div
                            class="w-full h-full bg-muted-foreground/10 flex items-center justify-center text-muted-foreground text-xs">
                            IMG
                        </div>
                    </div>

                    <!-- right side image -->
                    <div
                        class="absolute top-8 -right-4 w-32 h-56 md:w-36 md:h-64 bg-secondary/20 rounded-lg overflow-hidden shadow-lg z-0 translate-x-4">
                        <div
                            class="w-full h-full bg-muted-foreground/10 flex items-center justify-center text-muted-foreground text-xs">
                            IMG
                        </div>
                    </div>

                </div>

            </div>
        </section>

    </div>
</template>
<script setup>
import { CheckCircle } from "lucide-vue-next";

const features = [
    "All-in-one travel services",
    "Easy communication via WhatsApp",
    "Local experts you can trust",
    "Flexible cash payment",
];
</script>