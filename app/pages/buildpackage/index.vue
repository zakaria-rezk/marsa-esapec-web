<template>
    <div class="overflow-hidden">
        <div class="px-4 sm:px-8 lg:px-24 pt-8">
            <nav class="flex items-center gap-2 text-sm text-primary-foreground-foreground mb-8">
                <nuxt-link to="/" class="hover:text-foreground">
                    Home
                </nuxt-link>
                >
                <ChevronRight class="w-4 h-4" />
                <span class="text-foreground font-medium">build your package</span>
            </nav>
        </div>
        <!-- Steps -->
        <div class="flex items-center  justify-center mb-12">
            <div v-for="(step, i) in steps" :key="i" class="flex items-center"
                :class="{ 'flex-1 max-w-sm ': i < steps.length - 1 }"> <!-- 'flex-1' allows lines to grow/shrink -->

                <div class="flex flex-col items-center">
                    <!-- Circle: Reduced size slightly for mobile (w-7 h-7) and scaled back up for sm+ -->
                    <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium border-2 transition-all duration-500 relative"
                        :class="{
                            'bg-primary-foreground text-white border-primary-foreground scale-110 shadow-md': getStepState(i) === 'active',
                            'bg-primary-foreground text-white border-primary-foreground': getStepState(i) === 'completed',
                            'border-[#D9D9D9] text-muted-foreground': getStepState(i) === 'upcoming'
                        }">

                        <!-- Active Step "Pulse" -->
                        <span v-if="getStepState(i) === 'active'"
                            class="absolute inset-0 rounded-full bg-primary-foreground animate-ping opacity-20">
                        </span>

                        <Check v-if="getStepState(i) === 'completed'"
                            class="w-3 h-3 sm:w-4 sm:h-4 animate-in zoom-in duration-300" />
                        <span v-else>{{ i + 1 }}</span>
                    </div>

                    <!-- Label: Added 'whitespace-nowrap' and hidden on tiny screens if names are long -->
                    <span class="text-[10px] sm:text-xs mt-2 transition-colors duration-500 text-center px-1"
                        :class="getStepState(i) === 'upcoming' ? 'text-muted-foreground' : 'text-primary-foreground font-semibold'">
                        {{ step.label }}
                    </span>
                </div>

                <!-- Progress Line: Removed fixed width (w-24), added 'flex-1' to fill space between circles -->
                <div v-if="i < steps.length - 1"
                    class="flex-1 h-0.5 min-w-[20px] mx-1 sm:mx-2 mb-7 bg-muted-foreground/20 relative overflow-hidden">
                    <div class="absolute top-0 left-0 h-full bg-primary-foreground transition-all duration-700 ease-in-out"
                        :style="{ width: stepNumber > i + 1 ? '100%' : '0%' }">
                    </div>
                </div>
            </div>
        </div>
        <div v-if="stepNumber === 1">
            <h2 class="text-2xl my-1 md:text-4xl font-bold text-primary-foreground-foreground px-4 sm:px-8 lg:px-24">
                choose your trip
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-5  pb-10 px-4 md:px-12">
                <div class="grid md:grid-cols-2 gap-2 py-2 px-4 col-span-2">
                    <div v-for="pkg in data" :key="pkg.id" @click="toggleTrip(pkg)"
                        class="bg-background border rounded-2xl overflow-hidden shadow-sm cursor-pointer transition-all relative"
                        :class="selectedTripIds.includes(pkg.id)
                            ? 'border-primary-danger ring-2 ring-primary/30'
                            : 'border-[#999999] hover:border-primary/50'">
                        <!-- Selected Badge -->
                        <div v-if="selectedTripIds.includes(pkg.id)"
                            class="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                            Selected
                        </div>

                        <!-- IMAGE -->
                        <div class="relative h-56 bg-muted flex items-center justify-center text-[#999999]">
                            <img :src="getImageUrl(pkg?.images[0]?.url)" alt="trip image"
                                class="w-full h-full object-cover" />
                        </div>

                        <div class="p-5">
                            <h3 class="text-base font-bold mb-2 text-primary-foreground">
                                {{ pkg.title }}
                            </h3>

                            <div class="flex items-center gap-1 text-[#666666] text-sm mb-1">
                                <MapPin class="w-3.5 h-3.5" />
                                {{ pkg.places?.join(' , ') }}
                            </div>

                            <div class="flex items-center gap-1 text-[#666666] text-sm mb-4">
                                <Calendar class="w-3.5 h-3.5" />
                                {{ pkg.days?.length + ' days' }}
                            </div>

                            <span class="font-bold text-[#666666]">From</span>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <span class="text-primary-danger text-xl font-bold">
                                        {{ pkg.price }} $
                                    </span>
                                    <span class="text-border text-sm">/Person</span>
                                </div>
                            </div>
                        </div> <button @click.stop="toggleTrip(pkg)"
                            class=" mb-2 mx-3 rounded-2xl px-4 py-2 rounded-lg font-semibold text-sm transition-all"
                            :class="selectedTripIds.includes(pkg.id)
                                ? 'bg-green-500 text-white hover:opacity-90'
                                : 'bg-primary-danger text-white hover:opacity-90'">
                            {{ selectedTripIds.includes(pkg.id) ? 'Selected' : 'Select' }}
                        </button>
                    </div>
                </div>

                <!-- Summary -->
                <div class="bg-background rounded-2xl  p-6 md:p-8 md:max-w-md w-full">
                    <h2 class="text-xl md:text-2xl font-bold text-primary-foreground-foreground mb-1">
                        Package Summary
                    </h2>

                    <p class="text-muted-foreground text-sm mb-6">
                        Your Selected Trip
                    </p>

                    <!-- Trips -->
                    <TransitionGroup tag="div" class="flex flex-col divide-y divide-border" name="list">
                        <div v-for="(trip, i) in selectedTrips" :key="trip.id"
                            class="flex items-center justify-between py-4">
                            <div class="flex items-center gap-3">
                                <CheckCircle class="w-5 h-5 text-[#7BBCB0]" />
                                <span class="text-foreground font-medium text-sm">
                                    {{ trip.name }}
                                </span>
                            </div>

                            <div class="flex items-center gap-3">
                                <span class="text-primary-foreground-foreground font-semibold text-sm">
                                    {{ trip.price }} $
                                </span>

                                <button @click.stop="removeTrip(trip.id)"
                                    class="flex items-center gap-1 text-primary-danger text-sm hover:text-primary-foreground-danger/80">
                                    <Trash2 class="w-4 h-4" />
                                    Remove
                                </button>
                            </div>
                        </div>
                    </TransitionGroup>
                    <!-- Remaining -->
                    <!-- Totals -->
                    <div class="border-t border-[#E6E6E6] pt-4 space-y-2 mt-4">
                        <div class="flex justify-between text-sm">
                            <span>Sub Total</span>
                            <span>{{ subTotal }} $</span>
                        </div>

                        <div class="flex justify-between pt-2 border-t">
                            <span class="font-bold">Total</span>
                            <span class="font-bold">{{ total }} $</span>
                        </div>
                    </div>

                    <button @click="changeStepNumber"
                        class="w-full mt-6 bg-primary-danger text-white py-3 rounded-full">
                        Continue Booking
                    </button>
                </div>
            </div>
        </div>
        <div v-if="stepNumber === 2">
            <div class="min-h-screen bg-background">
                <div class="md:max-w-7xl flex flex-col md:flex-row gap-8 mx-auto px-4 pt-8 pb-16">
                    <!-- FORM -->
                    <div class="flex-1 border border-[#E6E6E6] rounded-xl p-6 md:p-8">
                        <h2 class="text-xl md:text-2xl font-bold text-primary-foreground mb-6">
                            Booking Information
                        </h2>
                        <div class="space-y-5">
                            <!-- Name -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">Full Name</label>
                                <div class="relative">
                                    <User class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input v-model="form.name" type="text" placeholder="Enter your full name"
                                        class="w-full border rounded-lg pl-10 pr-4 py-3 text-sm bg-background focus:outline-none"
                                        :class="errors.name ? 'border-red-500' : 'border-[#E6E6E6]'" />
                                </div>
                                <p v-if="errors.name" class="text-red-500 text-xs mt-1">
                                    {{ errors.name }}
                                </p>
                            </div>

                            <!-- Phone -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">WhatsApp Number</label>
                                <div class="relative">
                                    <Phone class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input v-model="form.phone" type="tel" placeholder="Enter your number"
                                        class="w-full border rounded-lg pl-10 pr-4 py-3 text-sm bg-background focus:outline-none"
                                        :class="errors.phone ? 'border-red-500' : 'border-[#E6E6E6]'" />
                                </div>
                                <p v-if="errors.phone" class="text-red-500 text-xs mt-1">
                                    {{ errors.phone }}
                                </p>
                            </div>

                            <!-- Date -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">Date</label>
                                <div class="relative">
                                    <CalendarIcon
                                        class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input v-model="form.date" type="date"
                                        class="w-full border rounded-lg pl-10 pr-4 py-3 text-sm bg-background focus:outline-none"
                                        :class="errors.date ? 'border-red-500' : 'border-[#E6E6E6]'" />
                                </div>
                                <p v-if="errors.date" class="text-red-500 text-xs mt-1">
                                    {{ errors.date }}
                                </p>
                            </div>

                            <!-- Guests -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">Guest</label>
                                <div class="relative">
                                    <Users class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input v-model="form.peopleCount" type="number" min="1"
                                        class="w-full border rounded-lg pl-10 pr-4 py-3 text-sm bg-background focus:outline-none"
                                        :class="errors.peopleCount ? 'border-red-500' : 'border-[#E6E6E6]'" />
                                </div>
                                <p v-if="errors.peopleCount" class="text-red-500 text-xs mt-1">
                                    {{ errors.peopleCount }}
                                </p>
                            </div>

                            <!-- Hotel -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">Hotel</label>
                                <div class="relative">
                                    <Building class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input v-model="form.hotel" type="text" placeholder="Hotel name"
                                        class="w-full border rounded-lg pl-10 pr-4 py-3 text-sm bg-background focus:outline-none"
                                        :class="errors.hotel ? 'border-red-500' : 'border-[#E6E6E6]'" />
                                </div>
                                <p v-if="errors.hotel" class="text-red-500 text-xs mt-1">
                                    {{ errors.hotel }}
                                </p>
                            </div>

                            <!-- Room Number -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">Room Number</label>
                                <input v-model="form.roomNumber" type="text"
                                    class="w-full border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none"
                                    :class="errors.roomNumber ? 'border-red-500' : 'border-[#E6E6E6]'" />
                                <p v-if="errors.roomNumber" class="text-red-500 text-xs mt-1">
                                    {{ errors.roomNumber }}
                                </p>
                            </div>

                            <!-- Special Request (full width) -->
                            <div class="md:col-span-2">
                                <label class="text-sm font-semibold mb-2 block">Special Request</label>
                                <textarea v-model="form.specialRequest" rows="4" placeholder="Any special notes..."
                                    class="w-full border border-[#E6E6E6] rounded-lg px-4 py-3 text-sm bg-background focus:outline-none resize-none" />
                            </div>
                        </div>
                        <!-- CTA -->
                        <button @click="submitBooking" :disabled="loading"
                            class="w-full bg-primary-danger text-white font-semibold py-3 rounded-full transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-90">
                            <svg v-if="loading" class="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4" />
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                            </svg>

                            <span>
                                {{ loading ? 'Processing...' : 'Request Booking' }}
                            </span>
                        </button>
                    </div>
                    <!-- SUMMARY -->
                    <div class="w-full lg:w-80 text-primary-foreground">
                        <div class="border border-[#E6E6E6] rounded-xl p-6 sticky top-8">
                            <h3 class="text-lg font-bold mb-1">Package Summary</h3>

                            <div class="flex flex-col divide-y">
                                <div v-for="(trip, i) in selectedTrips" :key="i" class="flex justify-between py-3">
                                    <div class="flex gap-2">
                                        <CheckCircle class="w-4 h-4 text-primary-foreground/60" />
                                        <span>{{ trip.name }} </span>
                                    </div>
                                    <span>{{ trip.price }} $</span>
                                </div>
                            </div>

                            <div class="mt-4 space-y-2 text-primary-foreground">
                                <div class="flex justify-between border-t pt-2">
                                    <span class="font-bold">Total</span>
                                    <span class="font-bold"> {{ total }} $</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div v-if="stepNumber === 3">
            <div class="min-h-screen bg-background">

                <div class="max-w-4xl mx-auto px-4 pt-8">
                    <Transition name="fade-up" appear>
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
                                    Thank You! our team will contact you shortly to confirm your trip details and pickup
                                    time.
                                </p>
                            </div>
                            <!-- Summary -->

                            <div class="max-w-xl mx-auto border border-border rounded-lg p-6 mb-8">
                                <!-- Trip Items -->
                                <div>
                                    <h3 class="font-medium text-primary-foreground">package summary</h3>
                                    <div v-for="(item, i) in selectedTrips" :key="i"
                                        class="flex items-center gap-3 py-3 border-b border-border last:border-b-0">
                                        <CheckCircle class="w-4 h-4 text-green-500" />
                                        <span class="text-sm text-primary-foreground">{{ item.name }}</span>
                                    </div>
                                </div>
                                <!-- Booking Info -->
                                <h2 class="font-bold text-primary-foreground mt-6 mb-3">
                                    Booking Information
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
                                    <span class="font-bold text-primary-foreground">{{ total * form.peopleCount
                                    }} $</span>
                                </div>
                            </div>
                        </div>
                    </Transition>

                    <!-- CTA -->
                    <div class="flex justify-center pb-12">
                        <nuxt-link to="/buildpackage"
                            class="bg-primary-danger text-white  px-8 py-3 rounded-full font-medium hover:bg-primary-danger/90 transition-colors">
                            Build new package
                        </nuxt-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { MapPin, Calendar, Check, CheckCircle, Trash2 } from "lucide-vue-next";
import { ChevronRight, User, Phone, CalendarIcon, Users, Building, Hash } from "lucide-vue-next";
import { getItems } from "~/services/trips";
const maxTrips = 5;
const loading = ref(false)
// DAT
const data = ref([]);

// Selected IDs (single source of truth)
const selectedTripIds = ref([]);

// FETCH
onMounted(async () => {
    const res = await getItems("trip");
    try {
        data.value = res.data?.data.filter(item => item.tripType?.id === 1);
    }
    catch (err) {
    }
});

// TOGGLE
const toggleTrip = (pkg) => {
    const exists = selectedTripIds.value.includes(pkg.id);

    if (exists) {
        selectedTripIds.value = selectedTripIds.value.filter(id => id !== pkg.id);
    } else {
        if (selectedTripIds.value.length >= maxTrips) return;
        selectedTripIds.value.push(pkg.id);
    }
};

// REMOVE
const removeTrip = (id) => {
    selectedTripIds.value = selectedTripIds.value.filter(tid => tid !== id);
};

// DERIVED STATE (🔥 best practice)
const selectedTrips = computed(() =>
    data.value.filter(pkg => selectedTripIds.value.includes(pkg.id))
);

const subTotal = computed(() =>
    selectedTrips.value.reduce((sum, t) => sum + t.price, 0)
);

const discount = computed(() =>
    selectedTrips.value.length >= 3 ? 120 : 0
);

const total = computed(() => subTotal.value);
// STEPS
const stepNumber = ref(1)


const steps = [
    { label: "Customize Trip" },
    { label: "Booking Details" },
    { label: "Confirmation" },
]
const getStepState = (index) => {
    if (stepNumber.value > index + 1) return 'completed'
    if (stepNumber.value === index + 1) return 'active'
    return 'upcoming'
}
const changeStepNumber = () => {

    if (stepNumber.value === 1 && selectedTripIds.value.length === 0) {
        addToast('Please select at least one trip to continue', 'error')
        return
    }
    if (stepNumber.value < steps.length) {
        stepNumber.value++
    }

};
const form = reactive({
    date: '',
    peopleCount: 2,
    hotel: '',
    roomNumber: 143,
    name: '',
    phone: '',
    specialRequest: ''
});
const errors = reactive({
    date: '',
    peopleCount: '',
    hotel: '',
    roomNumber: '',
    name: '',
    phone: ''
});
const validateForm = () => {
    let isValid = true

    // reset errors
    Object.keys(errors).forEach((key) => {
        errors[key] = ''
    })

    if (!form.date) {
        errors.date = 'Date is required'
        isValid = false
    }

    if (!form.peopleCount || form.peopleCount < 1) {
        errors.peopleCount = 'At least 1 guest is required'
        isValid = false
    }

    if (!form.hotel) {
        errors.hotel = 'Hotel name is required'
        isValid = false
    }

    if (!form.roomNumber) {
        errors.roomNumber = 'Room number is required'
        isValid = false
    }

    if (!form.name) {
        errors.name = 'Full name is required'
        isValid = false
    }

    if (!form.phone) {
        errors.phone = 'WhatsApp number is required'
        isValid = false
    }

    return isValid
};
import { addItem } from "@/services/trips"
import { getImageUrl } from '@/utils/image'
import { useToast } from "@/composables/useToast";
const { addToast } = useToast()
const submitBooking = async () => {
    if (!validateForm()) {
        addToast('Please fill required faild correctly', 'error')
        return
    }
    loading.value = true
    try {
        const payload = {
            tripIds: selectedTripIds.value,
            ...form,
        }
        const res = await addItem('packagereservation', payload)
        stepNumber.value++


    } catch (er) {

    } finally {
        loading.value = false
    }


}
const bookingInfo = computed(() => {
    if (!form) return []

    return [
        ["Date", form.date],
        ["Guest", `${form.peopleCount} Guest`],
        ["Hotel Name", form.hotel],
        ["Room Number", form.roomNumber],
        ["Phone", form.phone],

    ]
})
</script>
<style scoped>
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* 2. Transition speed and style */
.list-enter-active,
.list-leave-active {
    transition: all 0.4s ease;
}

/* 3. Ensure items slide up smoothly when a sibling is removed */
.list-leave-active {
    position: absolute;
    /* Required for the move transition to work */
    width: 100%;
}

.list-move {
    transition: transform 0.4s ease;
}

@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-4px);
    }

    75% {
        transform: translateX(4px);
    }
}

.animate-shake {
    animation: shake 0.2s ease-in-out 0s 2;
}
</style>