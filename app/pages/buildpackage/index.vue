<template>
    <div>
        <div class="min-h-screen bg-background">
            <div class="max-w-5xl mx-auto px-4 pt-8 pb-16">

                <!-- Breadcrumb -->
                <nav class="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <NuxtLink to="/" class="hover:text-foreground">Home</NuxtLink>
                    <ChevronRight class="w-4 h-4" />
                    <span>Build Your Package</span>
                    <ChevronRight class="w-4 h-4" />
                    <span class="text-foreground font-medium">Booking Details</span>
                </nav>

                <!-- Main -->
                <div class="flex flex-col lg:flex-row gap-8">

                    <!-- FORM -->
                    <div class="flex-1 border border-border rounded-xl p-6 md:p-8">
                        <h2 class="text-xl md:text-2xl font-bold text-secondary mb-6">
                            Booking Information
                        </h2>

                        <div class="space-y-5">

                            <!-- Name -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">Full Name</label>
                                <div class="relative">
                                    <User class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                                    <input v-model="form.name" type="text" class="input"
                                        placeholder="Enter your full name" />
                                </div>
                            </div>

                            <!-- Phone -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">WhatsApp Number</label>
                                <div class="relative">
                                    <Phone class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                                    <input v-model="form.phone" type="tel" class="input"
                                        placeholder="Enter your number" />
                                </div>
                            </div>

                            <!-- Date -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">Date</label>
                                <div class="relative">
                                    <CalendarIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                                    <input v-model="form.date" type="date" class="input pl-10" />
                                </div>
                            </div>

                            <!-- Guests -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">Guest</label>
                                <div class="relative">
                                    <Users class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                                    <select v-model="form.peopleCount" class="input pl-10">
                                        <option :value="1">1 guest</option>
                                        <option :value="2">2 guest</option>
                                        <option :value="3">3 guest</option>
                                        <option :value="4">4 guest</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Hotel -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">Hotel</label>
                                <div class="relative">
                                    <Building class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                                    <input v-model="form.hotel" type="text" class="input" placeholder="Hotel name" />
                                </div>
                            </div>

                            <!-- Room -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">Room Number</label>
                                <input v-model="form.roomNumber" type="text" class="input" />
                            </div>

                            <!-- Special -->
                            <div>
                                <label class="text-sm font-semibold mb-2 block">Special Request</label>
                                <textarea v-model="form.specialRequest" rows="4" class="input resize-none" />
                            </div>
                        </div>

                        <!-- CTA -->
                        <button @click="submit" class="btn-primary w-full mt-6">
                            Request Booking
                        </button>
                    </div>

                    <!-- SUMMARY -->
                    <div class="w-full lg:w-80">
                        <div class="border border-border rounded-xl p-6 sticky top-8">
                            <h3 class="text-lg font-bold mb-1">Package Summary</h3>

                            <div class="flex flex-col divide-y">
                                <div v-for="(trip, i) in 5" :key="i" class="flex justify-between py-3">
                                    <div class="flex gap-2">
                                        <CheckCircle class="w-4 h-4 text-primary/60" />
                                        <span>trip . name </span>
                                    </div>
                                    <span> trip.price  $</span>
                                </div>
                            </div>

                            <div class="mt-4 space-y-2">
                                <div class="flex justify-between text-sm">
                                    <span>Sub Total</span>
                                    <span> subTotal  $</span>
                                </div>

                                <div class="flex justify-between text-sm text-primary">
                                    <span>Discount</span>
                                    <span>- discount  $</span>
                                </div>

                                <div class="flex justify-between border-t pt-2">
                                    <span class="font-bold">Total</span>
                                    <span class="font-bold"> total  $</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div v-if="firstStep">
            <!-- Steps -->
            <!-- <div class="flex items-center justify-center mb-12">
            <div v-for="(step, i) in steps" :key="i" class="flex items-center">
                <div class="flex flex-col items-center">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium" :class="[
                        step.completed
                            ? 'bg-primary text-white'
                            : step.active
                                ? 'bg-secondary text-white'
                                : 'border-2 border-muted-foreground/30 text-primary-foreground'
                    ]">
                        <Check v-if="step.completed" class="w-4 h-4" />
                    </div>

                    <span class="text-xs mt-2 text-primary-foreground">
                        {{ step.label }}
                    </span>
                </div>

                <div v-if="i < steps.length - 1" class="w-24 sm:w-32 h-0.5 bg-muted-foreground/20 mx-2 mb-5" />
            </div>
        </div> -->
            <h2 class="text-3xl my-5 md:text-4xl font-bold text-primary-foreground text-center mb-4">
                Select your trip duration
            </h2>
            <!-- Layout -->
            <div class="grid md:grid-cols-3 gap-8 my-5 py-10  pb-10 px-12">

                <div class="grid grid-cols-2 gap-2 py-2 px-4 col-span-2">
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
                            IMG
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
                        </div>
                    </div>
                </div>

                <!-- Summary -->
                <div class="bg-background rounded-2xl p-6 md:p-8 max-w-md w-full">
                    <h2 class="text-xl md:text-2xl font-bold text-primary-foreground mb-1">
                        Package Summary
                    </h2>

                    <p class="text-muted-foreground text-sm mb-6">
                        Your Selected Trip
                        <span class="text-primary font-medium">
                            ({{ selectedTrips.length }}/{{ maxTrips }})
                        </span>
                    </p>

                    <!-- Trips -->
                    <div class="flex flex-col divide-y divide-border">
                        <div v-for="(trip, i) in selectedTrips" :key="trip.id"
                            class="flex items-center justify-between py-4">
                            <div class="flex items-center gap-3">
                                <CheckCircle class="w-5 h-5 text-primary/60" />
                                <span class="text-foreground font-medium text-sm">
                                    {{ trip.title }}
                                </span>
                            </div>

                            <div class="flex items-center gap-3">
                                <span class="text-primary-foreground font-semibold text-sm">
                                    {{ trip.price }} $
                                </span>

                                <button @click.stop="removeTrip(trip.id)"
                                    class="flex items-center gap-1 text-primary text-sm hover:text-primary/80">
                                    <Trash2 class="w-4 h-4" />
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Remaining -->
                    <p class="text-sm mt-4 text-muted-foreground">
                        You can add {{ remainingTrips }} more trips
                    </p>

                    <!-- Totals -->
                    <div class="border-t border-border pt-4 space-y-2 mt-4">
                        <div class="flex justify-between text-sm">
                            <span>Sub Total</span>
                            <span>{{ subTotal }} $</span>
                        </div>

                        <div class="flex justify-between pt-2 border-t">
                            <span class="font-bold">Total</span>
                            <span class="font-bold">{{ total }} $</span>
                        </div>
                    </div>

                    <button @click="secondStep" class="w-full mt-6 bg-primary-danger text-white py-3 rounded-full">
                        Continue Booking
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { MapPin, Calendar, Check, CheckCircle, Trash2 } from "lucide-vue-next";
import { getItems } from "~/services/trips";
const formData = ref({
    name:null,
    phone:null,
    peopleCount:null,
    hotel:null,
    roomNumb
})
const maxTrips = 5;
const firstStep = ref(true)
// DATA
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

const total = computed(() => subTotal.value - discount.value);

const remainingTrips = computed(() =>
    maxTrips - selectedTripIds.value.length
);

// STEPS
const steps = [
    { label: "Customize Trip", completed: true },
    { label: "Booking Details", active: true },
    { label: "Confirmation", completed: false },
];
const secondStep = () => {
    firstStep.value = false
}
</script>