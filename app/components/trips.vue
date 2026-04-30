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
import { getItems } from "~/services/trips";
onMounted(() => {
    getTrips()
})
const data = ref(null)
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
                <UiCardLoader v-if="!data" />
                <div class="grid md:grid-cols-3 gap-8" v-else>
                    <div v-for="(trip, index) in data" :key="index" :trip="trip">
                        <UiTripCard :trip="trip" />
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