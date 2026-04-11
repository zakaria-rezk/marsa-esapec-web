<script setup>
import {
    MapPin,
    Calendar,
    Building,
    Bus,
    Smartphone,
    Ship,
    Landmark,
    Star,
    CheckCircle,
} from "lucide-vue-next";


const packages = [
    {
        title: "Marsa Alam 5-Day Explorer",
        location: "Marsa Alam",
        duration: "5 Days 4 Nights",
        rating: 4.96,
        reviews: 672,
        discount: "-20% Off",
        oldPrice: "$900",
        price: "$750",
        amenities: ["Hotel", "Transfer", "Tourist SIM", "Sea Trips"],
        amenityIcons: [Building, Bus, Smartphone, Ship],
    },
    {
        title: "Marsa Alam & Luxor Combo – 6 Days",
        location: "Marsa Alam, Luxor",
        duration: "6 Days 5 Nights",
        rating: 4.96,
        reviews: 672,
        discount: "-20% Off",
        oldPrice: "$900",
        price: "$750",
        amenities: ["Hotel", "Transfer", "Tourist SIM", "Temple Trips"],
        amenityIcons: [Building, Bus, Smartphone, Landmark],
    },
    {
        title: "Red Sea & Cairo Highlights – 7 Days",
        location: "Marsa Alam, Cairo",
        duration: "5 Days 4 Nights",
        rating: 4.96,
        reviews: 672,
        discount: "-20% Off",
        oldPrice: "$900",
        price: "$750",
        amenities: ["Hotel", "Transfer", "Tourist SIM", "Pyramids Visit"],
        amenityIcons: [Building, Bus, Smartphone, Landmark],
    },
];
</script>

<template>
    <div class="min-h-screen bg-background">

        <!-- SERVICES -->
        <section class="py-10 px-4">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold text-[#082852] text-center mb-4">
                    Our Featured trips
                </h2>

                <p class="text-[#999999] text-center max-w-xl mx-auto mb-12">
                    Discover the most exciting activities — from snorkeling and island trips to desert rides and
                    historical excursions.
                </p>
                <div class="grid md:grid-cols-3 gap-8">
                    <div v-for="(pkg, index) in packages" :key="index"
                        class="bg-background border border-[#999999]  rounded-2xl overflow-hidden shadow-sm">
                        <!-- IMAGE -->
                        <div class="relative h-56 bg-muted flex items-center justify-center text-[#999999]">
                            IMG

                            <span
                                class="absolute top-3 left-3 bg-[#D1E3FA] text-black text-xs font-semibold px-3 py-1 rounded-full">
                                {{ pkg.discount }}
                            </span>

                            <div
                                class="absolute bottom-3 right-3 bg-background rounded-full px-3 py-1 flex items-center gap-1 text-xs shadow">
                                <Star class="w-3 h-3 text-primary fill-primary" />
                                <span class="font-semibold text-foreground">
                                    {{ pkg.rating }}
                                </span>
                                <span class="text-[#999999]">
                                    ({{ pkg.reviews }} reviews)
                                </span>
                            </div>
                        </div>

                        <div class="p-5">
                            <h3 class="text-base font-bold text-[#082852] mb-2">
                                {{ pkg.title }}
                            </h3>

                            <div class="flex items-center gap-1 text-[#999999] text-sm mb-1">
                                <MapPin class="w-3.5 h-3.5" />
                                {{ pkg.location }}
                            </div>

                            <div class="flex items-center gap-1 text-[#999999] text-sm mb-4">
                                <Calendar class="w-3.5 h-3.5" />
                                {{ pkg.duration }}
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">

                                    <span class="text-primary-danger text-xl font-bold">
                                        {{ pkg.price }}
                                    </span>
                                    <span class="text-[#999999] text-sm">/Person</span>
                                </div>
                            </div>

                            <button
                                class="mt-4 bg-primary-danger text-white font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full  text-center my-10 ">
                    <nuxt-link to="/" class="font-medium rounded-xl  text-center border border-[#082852] border-5 p-3 ">
                        See all trips
                    </nuxt-link>
                </div>
            </div>

        </section>



    </div>
</template>