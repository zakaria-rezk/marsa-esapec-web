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

            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="(pkg, index) in data" :key="index"
                    class="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
                    <!-- IMAGE -->
                    <div class="relative h-56 bg-muted flex items-center justify-center text-muted-foreground">
                        IMG

                        <!-- <div
                            class="absolute bottom-3 right-3 bg-background rounded-full px-3 py-1 flex items-center gap-1 text-xs shadow">
                            <Star class="w-3 h-3 text-primary fill-primary" />
                            <span class="font-semibold text-foreground">
                                {{ pkg.rating }}
                            </span>
                            <span class="text-muted-foreground">
                                ({{ pkg.reviews }} reviews)
                            </span>
                        </div> -->
                    </div>

                    <div class="p-5">
                        <h3 class="text-base font-bold  mb-2 text-primary-foreground">
                            {{ pkg.title }}
                        </h3>

                        <div class="flex items-center gap-1 text-[#666666] text-sm mb-1">
                            <MapPin class="w-3.5 h-3.5" />
                            {{ pkg.places.join(' , ') }}
                        </div>

                        <div class="flex items-center gap-1 text-[#666666] text-sm mb-4">
                            <Calendar class="w-3.5 h-3.5" />
                            {{ pkg.days?.length + ' days' }}
                        </div>

                        <div class="flex items-center justify-between border-t border-border pt-4 mb-4">
                            <div v-for="(amenity, i) in pkg.amenities" :key="i"
                                class="flex flex-col items-center gap-1">
                                <component :is="pkg.amenityIcons[i]" class="w-4 h-4 text-[#666666]" />
                                <span class="text-[11px] text-[#666666]">
                                    {{ amenity }}
                                </span>
                            </div>
                        </div>
                       <span class="font-bold text-[#666666]">From</span> 
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">

                                <span class="text-primary-danger text-xl font-bold">
                                    {{ pkg.price + ' $' }}
                                </span>
                                <span class="text-border text-sm">/Person</span>
                            </div>
                        </div>
                        <button
                            class="mt-4 bg-primary-danger text-white font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
                            View Package
                        </button>
                    </div>
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
                            class="inline-block bg-primary-danger text-white font-semibold px-8 py-3 rounded-3xl mx-auto hover:bg-primary/90 transition-colors">
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

        data.value = trips.filter(item => item.tripType?.id === 1)

        console.log(data.value)
    } catch (err) { }
}
</script>