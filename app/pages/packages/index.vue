<template>
    <div>
        <div id="hero" class=" w-full bg-hero bg-cover bg-no-repeat bg-center "
            :style="{ backgroundImage: `url(${packagesimg})` }">

            <section
                class="relative h-[70vh] min-h-[500px] text-white flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 bg-secondary/90"></div>
                <div class="relative z-10 text-center px-4 max-w-3xl animate-in slide-in-from-bottom-8">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold -tight mb-6">
                        Our Packages
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

                        <button
                            class="bg-primary-danger text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
                            <Search class="w-4 h-4" />
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
            <UiCardLoader v-if="loading" />
            <!-- Data exists -->
            <div v-else-if="data?.length" class="grid md:grid-cols-3 gap-8 mt-20 py-10 lg:pt-20 pb-10 px-12">
                <UiTripCard v-for="(trip, index) in data" :key="trip.id || index" :trip="trip" />
            </div>
            <!-- Empty state -->
            <div v-else class="flex flex-col items-center justify-center py-20 text-center">
                <p class="text-lg font-semibold text-muted-foreground">
                    No trips found
                </p>
                <p class="text-sm text-muted-foreground mt-2">
                    Try adjusting your search or filters
                </p>
            </div>
            <div class="w-full text-center my-10">
                <button @click="getTrips(search, data.length + 10)"
                    class="font-medium rounded-xl  text-center border border-[#082852] border-5 p-3 ">
                    load more
                </button>
            </div>
        
        <section class="w-full border-1 border-border rounded-2xl my-12 py-12 md:py-16 px-6 md:px-12 lg:px-16">
            <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                <!-- Left -->
                <div class="flex-1">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3">
                        Build Your Package
                    </h2>

                    <p class="text-[#666666] text-sm md:text-base max-w-md mb-8">
                        Choose how many days you want, explore available trips, and create your
                        perfect package in minutes.
                    </p>

                    <!-- Steps -->
                    <div class="flex flex-col gap-5 mb-8">
                        <div v-for="(step, i) in steps" :key="i" class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <component :is="step.icon" class="w-5 h-5 text-primary-foreground" />
                            </div>

                            <span class="font-semibold text-primary-foreground text-sm md:text-base">
                                {{ step.label }}
                            </span>
                        </div>
                    </div>

                    <!-- Button -->
                    <NuxtLink to="/buildpackage"
                        class="inline-block bg-primary-danger text-white font-semibold px-8 py-3 rounded-full  transition-colors text-sm md:text-base">
                        Let's Build Your Package
                    </NuxtLink>
                </div>

                <!-- Right -->
                <div class="">
                    <img :src="buildbackage" alt="">
                </div>

            </div>
        </section>

    </div>
</template>
<script setup>
import packagesimg from "@/assets/images/packages.png"
import {
    MapPin,
    Calendar,
    BadgePercent, MessageSquare
} from "lucide-vue-next";
import buildbackage from "@/assets/images/buildpackage.png"
import { getItems } from "~/services/trips";
const steps = [
    { icon: Calendar, label: "Choose Number Of Days" },
    { icon: MapPin, label: "Pick Your Trips" },
    { icon: BadgePercent, label: "Get Instant Discount" },
    { icon: MessageSquare, label: "Send Booking Request" },
];
onMounted(() => {
    getTrips()
})
const data = ref()
const getTrips = async () => {
    try {
        const res = await getItems('trip')
        data.value = res.data?.data
        data.value = data.value.filter(item => item.tripType?.id === 1)

    } catch (err) { }
}
</script>