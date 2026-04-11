<template>
    <section id="about-us" class="mt-10">
        <div class=" bg-background">
            <!-- ABOUT SECTION -->
            <section class=" py-16 md:py-24 px-8">
                <div
                    class="max-w-7xl bg-gray-100 mx-auto  rounded-3xl p-8 flex flex-col lg:flex-row items-center gap-12">
                    <!-- LEFT TEXT -->
                    <div class="flex-1 text-[#666666]">
                        <h2 class="text-3xl md:text-4xl font-bold text-[#082852] mb-6">
                            About Us
                        </h2>

                        <p class=" text-sm md:text-base mb-4 max-w-xl">
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
                        <img :src="see" alt="">
                    </div>
                </div>
            </section>
        </div>

    </section>
</template>
<script setup>
import see from "@/assets/images/see-fish.png";
</script>