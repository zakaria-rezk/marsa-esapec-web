<template>
    <section class="py-16 bg-background">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-4">
                Our Packages
            </h2>

            <p class="text-border text-center max-w-xl mx-auto mb-12">
                Stay, explore, and experience more with curated travel bundles that combine top destinations and
                seamless planning.
            </p>

        <UiCardLoader v-if="!data" />
                <div class="grid md:grid-cols-3 gap-8" v-else>
                    <div v-for="(trip, index) in data" :key="index" :trip="trip">
                        <UiTripCard :trip="trip" />
                    </div>
                </div>
            <div class="w-full  text-center my-10 ">
                <nuxt-link to="/packages"
                    class="font-medium rounded-xl  text-center border border-[#082852] border-5 p-3 ">
                    See all backages
                </nuxt-link>
            </div>
        </div>
        <div class=" my-16  bg-background">

            <!-- HERO SECTION -->
            <section class="relative bg-primary-foreground overflow-hidden pb-16 md:pb-24  px-8">

                <!-- Decorative planes -->
                <Plane class="absolute top-8 left-12 w-8 h-8 text-[#CCCCCC] -rotate-45" />
                <Plane class="absolute bottom-8 right-1/3 w-8 h-8 text-[#CCCCCC] rotate-45" />

                <!-- Dotted circles -->
                <div
                    class="absolute text-[#CCCCCC] top-12 left-16 w-40 h-40 border border-dashed border-secondary-foreground/10 rounded-full" />
                <div
                    class="absolute text-[#CCCCCC] bottom-4 right-1/3 w-32 h-32 border border-dashed border-secondary-foreground/10 rounded-full" />

                <div class="max-w-7xl text-[#CCCCCC] mx-auto flex flex-col lg:flex-row items-center gap-12">

                    <!-- LEFT TEXT -->
                    <div class="flex-1 text-center ">
                        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Build Your Package
                        </h1>

                        <p class=" text-white text-sm md:text-base max-w-md mx-auto  mb-8">
                            Choose how many days you want, explore available trips, and create your perfect package in
                            minutes.
                        </p>

                        <RouterLink to="#"
                            class="inline-block bg-primary-danger text-white font-semibold px-8 py-3 rounded-3xl mx-auto  transition-colors">
                            Let's Build Your Package
                        </RouterLink>
                    </div>

                    <!-- RIGHT IMAGES -->
                    <div class="flex-1 flex items-center justify-center gap-4">

                        <!-- Large image -->


                        <!-- stacked images -->
                        <div class="flex flex-col gap-4">
                            <img :src="bacakge" alt="">

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