<template>
  <div>
    <div id="hero" class=" w-full bg-hero bg-cover bg-no-repeat bg-center "
      :style="{ backgroundImage: `url(${packagesimg})` }">

      <section class="relative h-[70vh] min-h-[500px] text-white flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-secondary/90"></div>
        <div class="relative z-10 text-center px-4 max-w-3xl animate-in slide-in-from-bottom-8">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold -tight mb-6">
            Our Packages
          </h1>
        </div>
      </section>
<div class="w-full absolute -mt-32 md:-mt-12 z-20 px-4 left-0">
    <!-- 
      Changed w-3/4 to w-full on mobile, and max-w-5xl for large screens
    -->
    <div class="w-full max-w-5xl mx-auto">
      <div class="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 border border-slate-50">
        
        <!-- Input Container -->
        <div class="flex-1 w-full space-y-2">
          <!-- Added a label for better UX, hidden visually but accessible -->
          <label class="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 md:hidden">
            Find your adventure
          </label>
          <div class="relative group">
            <input 
              v-model="search" 
              type="text" 
              placeholder="Search by trip name..."
              class="w-full items-center gap-2 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none rounded-xl px-4 py-3.5 md:py-3 transition-all text-base"
            >
          </div>
        </div>

        <!-- Button -->
        <!-- 
          w-full on mobile makes it much easier to tap 
          py-4 on mobile provides a larger "hit" area
        -->
        <button
          class="w-full md:w-auto bg-primary-danger text-white font-bold px-8 py-4 md:py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-opacity-95 active:scale-[0.98] transition-all whitespace-nowrap shadow-lg shadow-red-200 md:shadow-none"
        >
          <Search class="w-5 h-5 md:w-4 md:h-4" />
          <span>Search</span>
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
      <button @click="getTrips(search, data?.length + 10)"
        class="font-medium rounded-xl  text-center border border-[#082852] border-5 p-3 ">
        load more
      </button>
    </div>

    <section
      class="w-full border border-border rounded-[2.5rem] my-12 py-12 md:py-16 px-6 md:px-12 lg:px-16 bg-white shadow-sm overflow-hidden">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        <!-- Left Content -->
        <div class="flex-1 transition-all duration-700 animate-fade-in-left">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#082852] mb-4 leading-tight">
            Build Your Package
          </h2>

          <p class="text-slate-500 text-sm md:text-lg max-w-md mb-10 leading-relaxed">
            Choose how many days you want, explore available trips, and create your
            perfect package in minutes.
          </p>

          <!-- Steps with Animated Connectors -->
          <div class="flex flex-col gap-6 mb-10 relative">
            <!-- Optional: Vertical line connector for desktop -->
            <div class="absolute left-5 top-5 bottom-5 w-0.5 bg-slate-100 hidden md:block"></div>

            <div v-for="(step, i) in steps" :key="i"
              class="flex items-center gap-4 group cursor-default transition-all duration-300 hover:translate-x-2"
              :style="{ transitionDelay: `${i * 100}ms` }">

              <div
                class="relative z-10 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <component :is="step.icon" class="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </div>

              <span class="font-bold text-[#082852] text-base md:text-lg group-hover:text-primary transition-colors">
                {{ step.label }}
              </span>
            </div>
          </div>

          <!-- Animated Action Button -->
          <NuxtLink to="/buildpackage"
            class="inline-block bg-primary-danger text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-red-200 hover:shadow-red-300 hover:scale-105 active:scale-95 transition-all duration-300 text-sm md:text-base animate-bounce-subtle">
            Let's Build Your Package
          </NuxtLink>
        </div>

        <!-- Right Image Area -->
        <div class="flex-1 relative animate-fade-in-right">
          <!-- Decorative Background Element -->
          <div
            class="absolute -inset-4 bg-primary/5 rounded-[3rem] rotate-3 -z-10 transition-transform duration-1000 group-hover:-rotate-3">
          </div>

          <div class="relative rounded-[2rem] overflow-hidden shadow-2xl group">
            <img :src="buildbackage"
              class="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
              alt="Build your package illustration">
            <!-- Subtle overlay on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
          </div>

          <!-- Floating Badge -->
          <div
            class="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-float hidden md:flex items-center gap-3 border border-slate-50">
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span class="text-green-600 font-bold">✓</span>
            </div>
            <div class="text-xs font-bold text-slate-700 uppercase tracking-tight">
              Instant <br> Booking
            </div>
          </div>
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
const search = ref("");
let timeout = null
watch(search, (val) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
        getTrips(val)
    }, 500)
})
const getTrips = async (name = "", perPage = 10) => {
  try {
    const res = await getItems('trip', {

      name: name || undefined,
      perPage: perPage || 10

    })
    data.value = res.data?.data
    data.value = data.value.filter(item => item.tripType?.id === 1)

  } catch (err) { }
}
</script>
<style scoped>
/* Floating Animation for the small badge */
@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Subtle button pulse */
@keyframes bounce-subtle {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }
}

.animate-bounce-subtle {
  animation: bounce-subtle 3s ease-in-out infinite;
}

/* Entrance Animations */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
}

/* Custom easing for the button and cards */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>