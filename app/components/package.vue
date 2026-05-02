<template>
    <section class="py-16 bg-background overflow-hidden">
        <div class="max-w-6xl mx-auto px-4">
            <!-- Section Header with Fade In -->
            <div class="transition-all duration-1000 delay-100 transform translate-y-0 opacity-100">
                <h2 class="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-4">
                    Our Packages
                </h2>
                <p class="text-border text-center max-w-xl mx-auto mb-12">
                    Stay, explore, and experience more with curated travel bundles that combine top destinations and
                    seamless planning.
                </p>
            </div>

            <UiCardLoader v-if="!data" />

            <!-- Grid with Staggered Card Animation -->
            <div class="grid md:grid-cols-3 gap-8" v-else>
                <div v-for="(trip, index) in data" :key="index"
                    class="transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl"
                    :style="{ transitionDelay: `${index * 150}ms` }">
                    <UiTripCard :trip="trip" />
                </div>
            </div>

            <!-- Pulse Animation on the button -->
            <div class="w-full text-center my-10">
                <nuxt-link to="/packages"
                    class="inline-block font-medium rounded-xl text-center border-2 border-[#082852] p-3 transition-all duration-300 hover:bg-[#082852] hover:text-white active:scale-95">
                    See all packages
                </nuxt-link>
            </div>
        </div>

        <!-- BUILD YOUR PACKAGE HERO -->
        <div class="my-16 bg-background">
            <section
                class="relative bg-primary-foreground overflow-hidden py-16 md:py-24 px-8 rounded-[3rem] mx-4 shadow-xl">

                <!-- Animated Decorative planes -->
                <Plane class="absolute top-8 left-12 w-8 h-8 text-[#CCCCCC] -rotate-45 animate-float-slow" />
                <Plane class="absolute bottom-8 right-1/3 w-8 h-8 text-[#CCCCCC] rotate-45 animate-float" />

                <!-- Dotted circles with rotating animation -->
                <div
                    class="absolute text-[#CCCCCC] top-12 left-16 w-40 h-40 border border-dashed border-secondary-foreground/20 rounded-full animate-spin-slow" />
                <div
                    class="absolute text-[#CCCCCC] bottom-4 right-1/3 w-32 h-32 border border-dashed border-secondary-foreground/20 rounded-full animate-reverse-spin" />

                <div
                    class="max-w-7xl text-[#CCCCCC] mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">

                    <!-- LEFT TEXT with Slide-in -->
                    <div class="flex-1 text-center lg:text-left">
                        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in-up">
                            Build Your Package
                        </h1>

                        <p
                            class="text-white text-sm md:text-base max-w-md mx-auto lg:mx-0 mb-8 opacity-90 animate-fade-in-up delay-200">
                            Choose how many days you want, explore available trips, and create your perfect package in
                            minutes.
                        </p>

                        <nuxt-link to="/buildpackage"
                            class="inline-block bg-primary-danger text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-red-600 active:scale-95 animate-bounce-subtle">
                            Let's Build Your Package
                        </nuxt-link>
                    </div>

                    <!-- RIGHT IMAGES with Floating effect -->
                    <div class="flex-1 flex items-center justify-center gap-4 group">
                        <div
                            class="relative overflow-hidden rounded-3xl transition-all duration-700 transform group-hover:scale-105 shadow-2xl">
                            <img :src="bacakge" alt="Package building"
                                class="max-w-full h-auto object-cover transition-transform duration-1000 group-hover:rotate-2">
                            <!-- Glassmorphism overlay on hover -->
                            <div
                                class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>
<script setup>import {
    MapPin,
    Calendar,
    Building,
    Bus,
    Smartphone,
    Ship,
    Landmark,
    Star, Plane

} from "lucide-vue-next";
import bacakge from "@/assets/images/bacakge.png"
import { getItems } from "~/services/trips";
onMounted(() => {
    getTrips()
})
const data = ref()
const getTrips = async () => {
    try {
        const res = await getItems('trip')
        const trips = res.data?.data
        console.log(trips)
        console.log(res.data)
        data.value = trips.filter(item => item.tripType?.id === 1)

        console.log(data.value)
    } catch (err) { }
}
</script>
<style scoped>
/* Plane Floating Animation */
@keyframes float {
    0% {
        transform: translateY(0px) rotate(45deg);
    }

    50% {
        transform: translateY(-20px) rotate(40deg);
    }

    100% {
        transform: translateY(0px) rotate(45deg);
    }
}

@keyframes float-slow {
    0% {
        transform: translateY(0px) rotate(-45deg);
    }

    50% {
        transform: translateY(15px) rotate(-50deg);
    }

    100% {
        transform: translateY(0px) rotate(-45deg);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
}

/* Rotating Dashed Circles */
@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spin-slow 20s linear infinite;
}

.animate-reverse-spin {
    animation: spin-slow 15s linear infinite reverse;
}

/* Subtle button bounce */
@keyframes bounce-subtle {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }
}

.animate-bounce-subtle {
    animation: bounce-subtle 4s ease-in-out infinite;
}

/* Entrance Animations */
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>