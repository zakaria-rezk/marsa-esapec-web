<template>
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-4">
                Our Services
            </h2>

            <p class="text-border text-center max-w-xl mx-auto mb-12">
                Everything you need to plan, explore, and enjoy your trip with ease. Smart services designed to make
                your travel experience simple from start to finish.
            </p>

            <div class="grid md:grid-cols-2 gap-8">
                <div v-for="(service, index) in services" :key="index"
                    class="flex flex-col lg:flex-row gap-6 bg-background border border-border rounded-2xl p-6 shadow-sm">
                    <!-- Image -->
                    <img :src="service.img" alt="">

                    <div class="flex  text-primary-foreground flex-col justify-center">
                        <h3 class="text-xl font-bold text-secondary mb-2">
                            {{ service.title }}
                        </h3>

                        <p class="text-sm mb-4 text-[#666666]">
                            {{ service.description }}
                        </p>

                        <ul class="space-y-2 mb-5">
                            <li v-for="(feature, i) in service.features" :key="i"
                                class="flex items-center gap-2 text-sm text-[#666666]">
                                <CheckCircle class="w-4 h-4 text-primary" />
                                {{ feature }}
                            </li>
                        </ul>

                        <button
                            class="bg-primary-danger text-white font-semibold px-5 py-2 rounded-lg text-sm w-fit hover:opacity-90 transition-opacity">
                            View Service
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script setup>import {

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
        features: ["Stay Connected In Egypt", "Fast Activation", "Tourist-Friendly Plans"],
    },
];
</script>