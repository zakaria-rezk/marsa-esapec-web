<template>
    <section class="px-4 py-12" id="services">
        <div class="max-w-6xl mx-auto">
            <!-- Header Animation -->
            <div class="transition-all duration-1000 transform opacity-100 translate-y-0">
                <h2 class="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-4">
                    Our Services
                </h2>

                <p class="text-border text-center max-w-xl mx-auto mb-12">
                    Everything you need to plan, explore, and enjoy your trip with ease. Smart services designed to make
                    your travel experience simple from start to finish.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <div v-for="(service, index) in services" :key="index" class="group flex flex-col lg:flex-row gap-6 bg-background border border-border rounded-2xl p-6 shadow-sm 
                           hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out"
                    :style="{ transitionDelay: `${index * 100}ms` }">

                    <!-- Image with Scale Animation -->
                    <div class="overflow-hidden rounded-xl shrink-0">
                        <img :src="service.img"
                            class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                            alt="">
                    </div>

                    <div class="flex text-primary-foreground flex-col justify-center">
                        <h3
                            class="text-xl font-bold text-secondary mb-2 transition-colors duration-300 group-hover:text-primary">
                            {{ service.title }}
                        </h3>

                        <p class="text-sm mb-4 text-[#666666]">
                            {{ service.description }}
                        </p>

                        <ul class="space-y-2 mb-5">
                            <li v-for="(feature, i) in service.features" :key="i"
                                class="flex items-center gap-2 text-sm text-[#666666] transform transition-all duration-500"
                                :class="`group-hover:translate-x-1`" :style="{ transitionDelay: `${i * 50}ms` }">
                                <CheckCircle class="w-4 h-4 text-primary animate-pulse" />
                                {{ feature }}
                            </li>
                        </ul>

                        <nuxt-link :to="service.to" class="bg-primary-danger text-white font-semibold px-5 py-2 rounded-lg text-sm w-fit 
                                    hover:shadow-lg hover:scale-105 active:scale-95 
                                   transition-all duration-300">
                            View Service
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import {

    CheckCircle,
} from "lucide-vue-next";
import taxitransfer from "@/assets/images/taxitransfer.png";
import simservices from "@/assets/images/simservices.png"

const services = [
    {
        title: "Taxi Transfers",
        description:
            "Comfortable private transfers from marsa alam airport to your hotel and trips between destinations.",
        img: taxitransfer,
        to: "/taxitransfer",
        features: [
            "Pick-Up From Marsa Alam Airport",
            "Private & Group Rides",
            "Easy Booking",
        ],
    },
    {
        title: "Tourist Internet SIM",
        description:
            "Stay connected during your trip with ready-to-use data packages delivered on arrival.",
        img: simservices,
        to: "/simservices",
        features: ["Stay Connected In Egypt", "Fast Activation", "Tourist-Friendly Plans"],
    },
];
</script>
<style scoped>
/* Ensuring smooth rendering of animated images */
img {
    backface-visibility: hidden;
    transform: translateZ(0);
}

/* Custom easing for the card lift */
.hover\:-translate-y-2:hover {
    transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>