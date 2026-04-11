<template>
    <div>

        <div class="flex items-center justify-center mb-12">
            <div v-for="(step, i) in steps" :key="i" class="flex items-center">
                <div class="flex flex-col items-center">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium" :class="[
                        step.completed
                            ? 'bg-primary text-primary-foreground'
                            : step.active
                                ? 'bg-secondary text-primary-foreground-foreground'
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
        </div>
        <div class="grid md:grid-cols-3 gap-8 mt-20 py-10 lg:pt-20 pb-10 px-12">

            <div class="grid grid-cols-2 gap-2 py-2 px-4 col-span-2">
                <div v-for="(pkg, index) in packages" :key="index"
                    class="bg-background border border-[#999999]  rounded-2xl overflow-hidden shadow-sm">
                    <!-- IMAGE -->
                    <div class="relative h-56 bg-muted flex items-center justify-center text-[#999999]">
                        IMG

                        <span
                            class="absolute top-3 left-3 bg-[#D1E3FA] text-black text-xs font-semibold px-3 py-1 rounded-full">
                            {{ pkg.discount }}
                        </span>

                        <div
                            class="absolute bottom-3 right-3 bg-background rounded-full px-3 py-1 flex items-center gap-1 text-xs shadow">
                            <Star class="w-3 h-3 text-primary fill-primary" />
                            <span class="font-semibold text-foreground">
                                {{ pkg.rating }}
                            </span>
                            <span class="text-[#999999]">
                                ({{ pkg.reviews }} reviews)
                            </span>
                        </div>
                    </div>

                    <div class="p-5">
                        <h3 class="text-base font-bold text-[#082852] mb-2">
                            {{ pkg.title }}
                        </h3>

                        <div class="flex items-center gap-1 text-[#999999] text-sm mb-1">
                            <MapPin class="w-3.5 h-3.5" />
                            {{ pkg.location }}
                        </div>

                        <div class="flex items-center gap-1 text-[#999999] text-sm mb-4">
                            <Calendar class="w-3.5 h-3.5" />
                            {{ pkg.duration }}
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">

                                <span class="text-primary-danger text-xl font-bold">
                                    {{ pkg.price }}
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
            <div class="bg-background min-h-fit rounded-2xl   p-6 md:p-8 max-w-md w-full">

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
                    <div v-for="(trip, i) in selectedTrips" :key="i" class="flex items-center justify-between py-4">
                        <!-- Left -->
                        <div class="flex items-center gap-3">
                            <CheckCircle class="w-5 h-5 text-primary/60" />
                            <span class="text-foreground font-medium text-sm md:text-base">
                                {{ trip.name }}
                            </span>
                        </div>

                        <!-- Right -->
                        <div class="flex items-center gap-3">
                            <span class="text-primary-foreground font-semibold text-sm">
                                {{ trip.price }} $
                            </span>

                            <button @click="removeTrip(i)"
                                class="flex items-center gap-1 text-primary text-sm hover:text-primary/80 transition">
                                <Trash2 class="w-4 h-4" />
                                <span>Remove</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Add More -->
                <button
                    class="flex items-center gap-2 text-foreground text-sm font-medium mt-2 mb-6 hover:text-primary transition">
                    <Plus class="w-4 h-4" />
                    <span>Add {{ remainingTrips }} More Trip</span>
                </button>

                <!-- Totals -->
                <div class="border-t border-border pt-4 space-y-2">
                    <div class="flex justify-between text-sm text-muted-foreground">
                        <span>Sub Total</span>
                        <span class="text-primary-foreground font-medium">{{ subTotal }} $</span>
                    </div>

                    <div class="flex justify-between text-sm text-muted-foreground">
                        <span>Discount</span>
                        <span class="text-primary font-medium">-{{ discount }} $</span>
                    </div>

                    <div class="flex justify-between pt-2 border-t border-border">
                        <span class="text-foreground font-bold text-lg">Total</span>
                        <span class="text-primary-foreground font-bold text-lg">{{ total }} $</span>
                    </div>
                </div>

                <!-- CTA -->
                <button
                    class="w-full mt-6 bg-primary text-primary-foreground font-semibold py-3.5 rounded-full hover:bg-primary/90 transition text-sm md:text-base">
                    Continue Booking
                </button>

            </div>
        </div>
    </div>

</template>
<script setup>
import {
    MapPin,
    Check,
    Calendar,
    Building,
    Bus,
    Smartphone,
    Ship,
    Landmark,
    Star,
    CheckCircle,
} from "lucide-vue-next";
import { Trash2, Plus } from "lucide-vue-next";

const maxTrips = 5;

const selectedTrips = ref([
    { name: "Boat Trip", price: 120 },
    { name: "Dolphin Trip", price: 120 },
    { name: "Safari Trip", price: 120 },
    { name: "Snorkeling Trip", price: 120 },
]);

// Remove trip
const removeTrip = (index) => {
    selectedTrips.value.splice(index, 1);
};

// Computed values
const subTotal = computed(() =>
    selectedTrips.value.reduce((sum, t) => sum + t.price, 0)
);

const discount = computed(() =>
    selectedTrips.value.length >= 3 ? 120 : 0
);

const total = computed(() => subTotal.value - discount.value);

const remainingTrips = computed(
    () => maxTrips - selectedTrips.value.length
);
const packages = [
    {
        title: "Marsa Alam 5-Day Explorer",
        location: "Marsa Alam",
        duration: "5 Days 4 Nights",
        rating: 4.96,
        reviews: 672,
        discount: "-20% Off",
        oldPrice: "$900",
        price: "$750",
        amenities: ["Hotel", "Transfer", "Tourist SIM", "Sea Trips"],
        amenityIcons: [Building, Bus, Smartphone, Ship],
    },
    {
        title: "Marsa Alam & Luxor Combo – 6 Days",
        location: "Marsa Alam, Luxor",
        duration: "6 Days 5 Nights",
        rating: 4.96,
        reviews: 672,
        discount: "-20% Off",
        oldPrice: "$900",
        price: "$750",
        amenities: ["Hotel", "Transfer", "Tourist SIM", "Temple Trips"],
        amenityIcons: [Building, Bus, Smartphone, Landmark],
    },
    {
        title: "Red Sea & Cairo Highlights – 7 Days",
        location: "Marsa Alam, Cairo",
        duration: "5 Days 4 Nights",
        rating: 4.96,
        reviews: 672,
        discount: "-20% Off",
        oldPrice: "$900",
        price: "$750",
        amenities: ["Hotel", "Transfer", "Tourist SIM", "Pyramids Visit"],
        amenityIcons: [Building, Bus, Smartphone, Landmark],
    },
];

const steps = [
    { label: "Customize Trip", completed: true },
    { label: "Booking Details", active: true },
    { label: "Confirmation", completed: false },
];
</script>