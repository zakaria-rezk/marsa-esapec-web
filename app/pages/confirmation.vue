<template>
    <div class="min-h-screen bg-background">

        <div class="max-w-4xl mx-auto px-4 pt-8">

            <!-- Breadcrumb -->
            <nav class="flex items-center gap-2 text-sm text-primary-foreground mb-8">
                <RouterLink to="/" class="hover:text-foreground">
                    Home
                </RouterLink>

                <ChevronRight class="w-4 h-4" />
                <span>Build Your Package</span>

                <ChevronRight class="w-4 h-4" />
                <span class="text-foreground font-medium">Confirmation</span>
            </nav>

            <!-- Stepper -->
            <div class="flex items-center justify-center mb-12">
                <div v-for="(step, i) in steps" :key="i" class="flex items-center">
                    <div class="flex flex-col items-center">
                        <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium" :class="[
                            step.completed
                                ? 'bg-primary text-primary-foreground'
                                : step.active
                                    ? 'bg-secondary text-secondary-foreground'
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

            <!-- Success -->
            <div class="flex flex-col items-center mb-8">
                <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle class="w-12 h-12 text-green-500" />
                </div>

                <h1 class="text-2xl font-bold text-primary-foreground text mb-2">
                    Booking Request Sent Successfully
                </h1>

                <p class="text-[#666666] text-sm text-center">
                    Thank You! our team will contact you shortly to confirm your trip details and pickup time.
                </p>
            </div>

            <!-- Summary -->
            <div class="max-w-xl mx-auto border border-border rounded-lg p-6 mb-8">

                <h2 class="font-bold text-foreground mb-1">Package Summary</h2>
                <p class="text-primary text-sm mb-4">5-Day Package</p>

                <!-- Trip Items -->
                <div v-for="(item, i) in tripItems" :key="i"
                    class="flex items-center gap-3 py-3 border-b border-border last:border-b-0">
                    <CheckCircle class="w-4 h-4 text-primary/60" />
                    <span class="text-sm text-primary-foreground">{{ item }}</span>
                </div>

                <!-- Booking Info -->
                <h2 class="font-bold text-foreground mt-6 mb-3">
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
                    <span class="font-bold text-foreground">Total Price</span>
                    <span class="font-bold text-foreground">500 $</span>
                </div>
            </div>

            <!-- CTA -->
            <div class="flex justify-center pb-12">
                <RouterLink to="/"
                    class="bg-primary-danger text-white  px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                    Book Another TOUR
                </RouterLink>
            </div>

        </div>
    </div>
</template>
<script setup>
import { CheckCircle, ChevronRight, Check } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

const steps = [
    { label: "Customize Trip", completed: true },
    { label: "Booking Details", active: true },
    { label: "Confirmation", completed: false },
];

const tripItems = [
    "Boat Trip",
    "Island Trip",
    "Snorkeling Trip",
    "Dolphin Trip",
    "Safari Trip",
];

const bookingInfo = [
    ["Date", "3/11/2026"],
    ["Guest", "2 Guest"],
    ["Hotel Name", "Hotel"],
    ["Room Number", "3"],
];
</script>