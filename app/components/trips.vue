<script setup>
import { getItems } from "~/services/trips";
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
onMounted(() => {
    getTrips()
})
const data = ref()
const getTrips = async () => {
    try {
        const res = await getItems('trip')
        const trips = res.data?.data

        data.value = trips.slice(0, 3)

        console.log(data.value)
    } catch (err) { }
}

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

                            <button
                                class="mt-4 bg-primary-danger text-white font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full  text-center my-10 ">
                    <nuxt-link to="/trips"
                        class="font-medium rounded-xl  text-center border border-[#082852] border-5 p-3 ">
                        See all trips
                    </nuxt-link>
                </div>
            </div>

        </section>



    </div>
</template>