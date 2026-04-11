<template>
    <div>
        <div id="hero" class=" w-full bg-hero bg-cover bg-no-repeat bg-center "
            :style="{ backgroundImage: `url(${hero})` }">

            <section
                class="relative h-[70vh] min-h-[500px] text-white flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 bg-secondary/90"></div>
                <div class="relative z-10 text-center px-4 max-w-3xl">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold -tight mb-6">
                        Discover Unforgettable Adventures In Marsa Alam & Beyond
                    </h1>
                    <p class=" text-base md:text-lg mb-8 max-w-xl mx-auto">
                        Pack your bags and let us redefine your travel experience. Where every journey is a story
                        waiting to
                        be told
                    </p>
                    <button
                        class="bg-white text-[#082852] font-semibold px-8 py-3 rounded-lg hover:bg-muted transition-colors text-base">
                        Explore Trips
                    </button>
                </div>
            </section>
            <div class="w-full absolute -mt-12 z-20 px-4">
                <div class="w-3/4 mx-auto ">
                    <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-end gap-6">

                        <!-- Date -->
                        <div class="flex-1 w-full">
                            <label class="text-foreground font-semibold text-sm mb-2 block">Date</label>
                            <div class="flex items-center gap-2 border border-border rounded-lg px-4 py-3">
                                <Calendar class="w-5 h-5 text-muted-foreground" />
                                <span class="text-muted-foreground text-sm flex-1">select date</span>
                                <ChevronDown class="w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>

                        <!-- Guest -->
                        <div class="flex-1 w-full">
                            <label class="text-foreground font-semibold text-sm mb-2 block">Guest</label>
                            <div class="flex items-center gap-2 border border-border rounded-lg px-4 py-3">
                                <Users class="w-5 h-5 text-muted-foreground" />
                                <span class="text-muted-foreground text-sm flex-1">2 guest</span>
                                <ChevronDown class="w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>

                        <!-- Search Button -->
                        <button
                            class="bg-primary-danger text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
                            <Search class="w-4 h-4" />
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <about />
        <trips />
        <services />
        <package />
        <reviews />
        <faqs />
    </div>
</template>

<script setup>
import { Calendar, Users, Search, ChevronDown, Globe, CheckCircle } from "lucide-vue-next";
import hero from "../../public/camels-walking-each-other-diani-beach-kenya 1.png"

const features = [
    "All-in-one travel services",
    "Easy communication via WhatsApp",
    "Local experts you can trust",
    "Flexible cash payment",
];
</script>