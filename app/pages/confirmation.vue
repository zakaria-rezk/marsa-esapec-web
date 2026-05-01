<template>
    <div class="min-h-screen bg-background">

        <div class="max-w-4xl mx-auto px-4 pt-8">

            <!-- Breadcrumb -->
            <nav class="flex items-center gap-2 text-sm text-primary-foreground mb-8">
                <nuxt-link to="/" class="hover:text-foreground">
                    Home
                </nuxt-link>

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
                                    <span> trip.price $</span>
                                </div>
                            </div>

                            <div class="mt-4 space-y-2">
                                <div class="flex justify-between text-sm">
                                    <span>Sub Total</span>
                                    <span> subTotal $</span>
                                </div>

                                <div class="flex justify-between text-sm text-primary">
                                    <span>Discount</span>
                                    <span>- discount $</span>
                                </div>

                                <div class="flex justify-between border-t pt-2">
                                    <span class="font-bold">Total</span>
                                    <span class="font-bold"> total $</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            <!-- CTA -->
            <div class="flex justify-center pb-12">
                <nuxt-link to="/"
                    class="bg-primary-danger text-white  px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                    Book Another TOUR
                </nuxt-link>
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