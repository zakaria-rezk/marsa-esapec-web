<template>
    <div class="min-h-screen bg-background">
        <div class="px-4 sm:px-8 lg:px-24 pt-8">
            <nav class="flex items-center gap-2 text-sm text-primary-foreground mb-8">
                <nuxt-link to="/" class="hover:text-foreground">
                    Home
                </nuxt-link>

                <ChevronRight class="w-4 h-4" />
                <span>Services</span>

                <ChevronRight class="w-4 h-4" />
                <span class="text-foreground font-medium">sim card</span>
                <ChevronRight class="w-4 h-4" />
                <span class="text-foreground font-medium">request booking confirmation</span>
            </nav>
        </div>
        <div class="max-w-4xl mx-auto px-4 pt-8">
            <!-- Breadcrumb -->
            <Transition name="fade-up" appear v-if="data">
                <div>
                    <!-- Success -->
                    <div class="flex flex-col items-center mb-8 py-10">
                        <div
                            class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-pulse">
                            <CheckCircle class="w-12 h-12 text-green-500" />
                        </div>

                        <h1 class="text-2xl font-bold text-primary-foreground text mb-2">
                            Booking Request Sent Successfully
                        </h1>

                        <p class="text-[#666666] text-sm text-center">
                            Thank You! our team will contact you shortly to confirm your trip details and pickup time.
                        </p>
                    </div>
                    <div class="max-w-xl mx-auto border border-border rounded-lg p-6 mb-8">
                        <h2 class="font-bold text-primary-foreground mt-6 mb-3">
                            SIM Package Summary
                        </h2>
                        <div v-for="(row, i) in packageInfo" :key="i"
                            class="flex justify-between py-2.5 border-b border-border last:border-b-0">
                            <span class="text-sm text-primary-foreground">
                                {{ row[0] }}
                            </span>
                            <span class="text-sm text-primary-foreground font-medium">
                                {{ row[1] }}
                            </span>
                        </div>
                        <!-- Booking Info -->
                        <h2 class="font-bold text-primary-foreground mt-6 mb-3">
                            SIM Package Summary
                        </h2>
                        <div v-for="(row, i) in bookingInfo" :key="i"
                            class="flex justify-between py-2.5 border-b border-border last:border-b-0">
                            <span class="text-sm text-primary-foreground">
                                {{ row[0] }}
                            </span>
                            <span class="text-sm text-primary-foreground font-medium">
                                {{ row[1] }}
                            </span>
                        </div>

                        <!-- Total -->
                        <div class="flex justify-between mt-4 pt-2">
                            <span class="font-bold text-primary-foreground">Total Price</span>
                            <span class="font-bold text-primary-foreground">{{ data.price
                                }} $</span>
                        </div>
                    </div>
                </div>
            </Transition>
            <div v-else>
                <UiConfirmationLoader />
            </div>

            <!-- CTA -->
            <div class="flex justify-center pb-12">
                <nuxt-link to="/simservices"
                    class="bg-primary-danger text-white  px-8 py-3 rounded-full font-medium hover:bg-primary-danger/90 transition-colors">
                    Book Another sim card
                </nuxt-link>
            </div>

        </div>
    </div>
</template>
<script setup>
import { CheckCircle, ChevronRight, Check } from "lucide-vue-next"
import { useRoute } from "vue-router"
import { getItems } from "~/services/trips"

const route = useRoute()
const data = ref(null)

/* ---------- API ---------- */
const getTrips = async () => {
    const id = route.params.id

    try {
        const res = await getItems(`simreservation/${id}`)
        data.value = res.data
        console.log(data.value)
    } catch (err) {
        console.error(err)
    }
}

/* ---------- Computed ---------- */
const tripItems = computed(() => data.value?.trip?.included || [])
const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};
const bookingInfo = computed(() => {
    if (!data.value) return []

    return [
        ["Date", formatDate(data.value.date)],
        ["delivery Location", data.value.deliveryLocation],
        ["Room Number / Flight Number", data.value.roomNumber],



    ]
})
const packageInfo = computed(() => {
    if (!data.value) return []
    return [
        ["Data Package", data.value.simPackage],
        ["Number of SIM cards", data.value.cardsCount],
    ]
})


onMounted(() => {
    getTrips()
})
</script>
<style scoped>
.fade-up-enter-active {
    transition: all 0.6s ease;
}

.fade-up-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.fade-up-enter-to {
    opacity: 1;
    transform: translateY(0);
}
</style>