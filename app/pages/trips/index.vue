<template>
    <div>
        <div id="hero" class=" w-full bg-hero bg-cover bg-no-repeat bg-center "
            :style="{ backgroundImage: `url(${trips})` }">

            <section
                class="relative h-[70vh] min-h-[500px] text-white flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 bg-secondary/90"></div>
                <div class="relative z-10 text-center px-4 max-w-3xl">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold -tight mb-6">
                        All Trips
                    </h1>
                </div>
            </section>
            <div class="w-full absolute -mt-12 z-20 px-4">
                <div class="w-3/4 mx-auto ">
                    <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-end gap-6">
                        <div class="flex-1 w-full">
                            <div>
                                <input type="text" placeholder="Search by trip name"
                                    class="flex w-full items-center gap-2 border border-border rounded-lg px-4 py-3">
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
        <div class="grid md:grid-cols-3 gap-8 mt-20 py-10 lg:pt-20 pb-10 px-12">
            <div v-for="(trip, index) in data" :key="index"
                class="bg-background border border-[#999999]  rounded-2xl overflow-hidden shadow-sm">
                <!-- IMAGE -->
                <div class="relative h-56 bg-muted flex items-center justify-center text-[#999999]">
                    IMG

                    <span
                        class="absolute top-3 left-3 bg-[#D1E3FA] text-black text-xs font-semibold px-3 py-1 rounded-full">
                        {{ trip.discount }}
                    </span>

                    <div
                        class="absolute bottom-3 right-3 bg-background rounded-full px-3 py-1 flex items-center gap-1 text-xs shadow">
                        <Star class="w-3 h-3 text-primary fill-primary" />
                        <span class="font-semibold text-foreground">
                            {{ trip.rating }}
                        </span>
                        <!-- <span class="text-[#999999]">
                                    ({{ trip }} reviews)
                                </span> -->
                    </div>
                </div>

                <div class="p-5">
                    <h3 class="text-base font-bold text-[#082852] mb-2">
                        {{ trip.name }}
                    </h3>

                    <div class="flex items-center gap-1 text-[#999999] text-sm mb-1">
                        <MapPin class="w-3.5 h-3.5" />
                        {{ trip.places[0] }}
                    </div>

                    <div class="flex items-center gap-1 text-[#999999] text-sm mb-4">
                        <Calendar class="w-3.5 h-3.5" />
                        {{ trip?.days?.length + "days" }}
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">

                            <span class="text-primary-danger text-xl font-bold">
                                {{ trip.price + '$' }}
                            </span>
                            <span class="text-[#999999] text-sm">/Person</span>
                        </div>
                    </div>
                    <NuxtLink :to="`/trips/${trip.id}`"
                        class="mt-4 inline-block bg-primary-danger text-white font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
                        View Details
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="w-full text-center my-10">
            <nuxt-link to="/" class="font-medium rounded-xl  text-center border border-[#082852] border-5 p-3 ">
                load more
            </nuxt-link>
        </div>
    </div>
</template>
<script setup>
import trips from "@/assets/images/concorde-moreen-beach 1.png"

import {
    MapPin,
    Calendar,
    Star,

} from "lucide-vue-next";
import { getItems } from "~/services/trips";
onMounted(() => {
    getTrips()
})
const data = ref()
const getTrips = async () => {
    try {
        const res = await getItems('trip')
        data.value = res.data?.data

    } catch (err) { }
}
</script>