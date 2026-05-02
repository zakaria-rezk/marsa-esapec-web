<template>
    <div>
        <div id="hero" class=" w-full bg-hero bg-cover bg-no-repeat bg-center "
            :style="{ backgroundImage: `url(${trips})` }">

            <section
                class="relative h-[70vh] min-h-[500px] text-white flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 bg-secondary/90"></div>
                <div class="relative z-10 text-center px-4 max-w-3xl animate-in slide-in-from-bottom-8 duration-700">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        All Trips
                    </h1>
                </div>
            </section>

            <div class="absolute -mt-32 md:-mt-12 z-20 left-0 right-0 px-4">
 
                <div class="max-w-5xl mx-auto">
                    <div
                        class="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center md:items-stretch gap-4 border border-slate-50 transition-all duration-500 hover:shadow-2xl">

            
                        <div class="relative flex-1 w-full">
                      
  
      
                            <input v-model="search" type="text" placeholder="Search by trip name..."
                                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 md:py-3 focus:bg-white focus:border-primary-danger focus:ring-4 focus:ring-primary-danger/5 outline-none transition-all text-base text-[#082852] font-medium" />
                        </div>
                        <button @click="getTrips(search)"
                            class="w-full md:w-auto bg-primary-danger text-white font-bold px-8 py-4 md:py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-red-200">
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
            <button @click="getTrips(search, data.length + 10)"
                class="font-medium rounded-xl  text-center border border-[#082852] border-5 p-3 ">
                load more
            </button>
        </div>
    </div>
</template>
<script setup>
import trips from "@/assets/images/concorde-moreen-beach 1.png"
import { getItems } from "~/services/trips"
import { ref, onMounted, watch } from "vue"
import { Search } from "lucide-vue-next"

const data = ref(null)
const search = ref("")
const loading = ref(false)

/* ---------- Fetch Trips ---------- */
const getTrips = async (name = "", perPage = 10) => {
    loading.value = true;
    try {
        const res = await getItems("trip", {

            name: name || undefined,
            perPage: perPage || 10

        })

        data.value = res.data?.data
    } catch (err) {
        console.error(err)
    } finally {
        loading.value = false
    }
}

/* ---------- Initial Load ---------- */
onMounted(() => {
    getTrips()
})

/* ---------- Debounce ---------- */
let timeout = null

watch(search, (val) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
        getTrips(val)
    }, 500)
})
</script>