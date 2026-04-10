<template>

    <div class="min-h-screen w-full bg-muted">

        <!-- Hero Image -->
        <div class="w-full h-[350px] bg-secondary/80" />

        <!-- Content -->
        <div class="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-5 gap-8">

            <!-- Left -->
            <div class="lg:col-span-3 space-y-8">

                <!-- Overview -->
                <div>
                    <h2 class="text-2xl font-bold text-foreground mb-3">Overview</h2>
                    <p class="text-muted-foreground leading-relaxed">
                        Experience the timeless beauty of luxor on a 3-day immersive journey through ancient
                        temples, royal tombs, and authentic local life. from the majestic karnak temple to a magical
                        sunrise hot air balloon ride, this tour blends history, adventure, and relaxation along the
                        Nile.
                    </p>
                </div>

                <!-- Highlights -->
                <div>
                    <h2 class="text-2xl font-bold text-foreground mb-4">Tour Highlights</h2>

                    <ul class="space-y-3">
                        <li class="flex items-center gap-3 text-foreground">
                            <Landmark class="w-5 h-5 text-muted-foreground" />
                            Karnak Temple Complex
                        </li>

                        <li class="flex items-center gap-3 text-foreground">
                            <Ship class="w-5 h-5 text-muted-foreground" />
                            Nile Felucca Ride
                        </li>

                        <li class="flex items-center gap-3 text-foreground">
                            <Sun class="w-5 h-5 text-muted-foreground" />
                            Hot Air Balloon at sunrise
                        </li>

                        <li class="flex items-center gap-3 text-foreground">
                            <Crown class="w-5 h-5 text-muted-foreground" />
                            Hatshepsut Temple
                        </li>
                    </ul>
                </div>

                <!-- Itinerary -->
                <div>
                    <h2 class="text-2xl font-bold text-foreground mb-6">Itinerary</h2>

                    <!-- Day 1 -->
                    <div class="flex gap-4 mb-8">
                        <div class="flex flex-col items-center">
                            <div
                                class="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold">
                                01
                            </div>
                            <div class="w-0.5 flex-1 bg-border mt-2" />
                        </div>

                        <div>
                            <h3 class="text-lg font-bold text-secondary mb-3">
                                Day 1 – Arrival & East Bank Exploration
                            </h3>

                            <p class="font-semibold text-foreground mb-1">Morning:</p>
                            <ul class="text-muted-foreground mb-3 space-y-1 text-sm">
                                <li>• Meet & assist at luxor airport or train station</li>
                                <li>• Private transfer to hotel – check-in</li>
                                <li>• Lunch at a local restaurant</li>
                            </ul>

                            <p class="font-semibold text-foreground italic mb-1">Afternoon Tour:</p>
                            <ul class="text-muted-foreground mb-3 space-y-1 text-sm">
                                <li>• explore karnak temple complex</li>
                                <li>• visit luxor temple</li>
                            </ul>

                            <p class="font-semibold text-foreground mb-1">Evening:</p>
                            <ul class="text-muted-foreground space-y-1 text-sm">
                                <li>• free time or optional sound & light show at karnak</li>
                                <li>• overnight in luxor</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Day 2 -->
                    <div class="flex gap-4 mb-8">
                        <div class="flex flex-col items-center">
                            <div
                                class="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold">
                                02
                            </div>
                            <div class="w-0.5 flex-1 bg-border mt-2" />
                        </div>

                        <div>
                            <h3 class="text-lg font-bold text-secondary mb-3">
                                Day 2 – West Bank Adventure & Nile Experience
                            </h3>

                            <p class="font-semibold text-foreground italic mb-1">
                                Early Morning (Optional But Recommended):
                            </p>
                            <ul class="text-muted-foreground mb-3 space-y-1 text-sm">
                                <li>• hot air balloon ride at sunrise</li>
                            </ul>

                            <p class="font-semibold text-foreground italic mb-1">After Breakfast:</p>
                            <ul class="text-muted-foreground mb-3 space-y-1 text-sm">
                                <li>• visit valley of the kings (3 royal tombs)</li>
                                <li>• explore temple of queen hatshepsut</li>
                                <li>• photo stop at colossi of memnon</li>
                            </ul>

                            <p class="font-semibold text-foreground mb-1">Sunset:</p>
                            <ul class="text-muted-foreground space-y-1 text-sm">
                                <li>• felucca ride on the nile</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Day 3 -->
                    <div class="flex gap-4">
                        <div class="flex flex-col items-center">
                            <div
                                class="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold">
                                03
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-bold text-secondary mb-3">
                                Day 3 – Culture & Departure
                            </h3>

                            <ul class="text-muted-foreground space-y-1 text-sm">
                                <li>• Breakfast at hotel</li>
                                <li>• Visit luxor museum or mummification museum</li>
                                <li>• Free time for shopping in local bazaar</li>
                                <li>• Transfer to airport / train station</li>
                                <li>• End of tour</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Right -->
            <div class="lg:col-span-2">
                <div class="bg-background rounded-2xl shadow-lg p-6 sticky top-8">

                    <h3 class="text-xl font-bold text-foreground mb-1">Book This Tour</h3>

                    <p class="mb-5">
                        <span class="text-muted-foreground">From </span>
                        <span class="text-primary font-bold text-xl">$700</span>
                        <span class="text-muted-foreground text-sm"> /person</span>
                    </p>

                    <h4 class="text-secondary font-bold mb-3">Trip Details</h4>

                    <!-- Date -->
                    <label class="text-secondary font-semibold text-sm mb-1.5 block">Date</label>
                    <div class="flex items-center gap-2 border border-border rounded-lg px-4 py-3 mb-4">
                        <Calendar class="w-5 h-5 text-muted-foreground" />
                        <span class="text-muted-foreground text-sm flex-1">select date</span>
                    </div>

                    <!-- Guest -->
                    <label class="text-secondary font-semibold text-sm mb-1.5 block">Guest</label>
                    <div class="flex items-center gap-2 border border-border rounded-lg px-4 py-3 mb-4">
                        <Users class="w-5 h-5 text-muted-foreground" />
                        <span class="text-muted-foreground text-sm flex-1">2 guest</span>
                    </div>

                    <!-- Hotel -->
                    <label class="text-secondary font-semibold text-sm mb-1.5 block">Hotel</label>
                    <div class="flex items-center gap-2 border border-border rounded-lg px-4 py-3 mb-4">
                        <Hotel class="w-5 h-5 text-muted-foreground" />
                        <input type="text" placeholder="Enter Your Hotel Name"
                            class="bg-transparent outline-none text-sm flex-1" />
                    </div>

                    <!-- Room -->
                    <label class="text-secondary font-semibold text-sm mb-1.5 block">Room Number</label>
                    <div class="flex items-center gap-2 border border-border rounded-lg px-4 py-3 mb-4">
                        <Phone class="w-5 h-5 text-muted-foreground" />
                        <input type="text" placeholder="Enter Your Room Number"
                            class="bg-transparent outline-none text-sm flex-1" />
                    </div>

                    <!-- Name -->
                    <label class="text-secondary font-semibold text-sm mb-1.5 block">Full Name</label>
                    <div class="flex items-center gap-2 border border-border rounded-lg px-4 py-3 mb-4">
                        <User class="w-5 h-5 text-muted-foreground" />
                        <input type="text" placeholder="Enter your full name"
                            class="bg-transparent outline-none text-sm flex-1" />
                    </div>

                    <!-- WhatsApp -->
                    <label class="text-secondary font-semibold text-sm mb-1.5 block">WhatsApp Number</label>
                    <div class="flex items-center gap-2 border border-border rounded-lg px-4 py-3 mb-4">
                        <MessageCircle class="w-5 h-5 text-muted-foreground" />
                        <input type="text" placeholder="Enter Your WhatsApp Number"
                            class="bg-transparent outline-none text-sm flex-1" />
                    </div>

                    <!-- Special Request -->
                    <label class="text-secondary font-semibold text-sm mb-1.5 block">Special Request</label>
                    <textarea
                        class="w-full border border-border rounded-lg px-4 py-3 mb-6 text-sm h-28 resize-none bg-transparent"></textarea>

                    <!-- Total -->
                    <div class="text-center mb-4">
                        <p class="text-foreground font-bold">Total Price</p>
                        <p class="text-primary font-bold text-2xl">$1400</p>
                    </div>

                    <!-- Button -->
                    <button class="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full">
                        Request Booking
                    </button>

                    <p class="text-muted-foreground text-xs text-center mt-3">
                        This is a booking request. our team will contact you to confirm availability.
                    </p>

                </div>
            </div>

        </div>
    </div>
</template>


<script setup>
import {
    Calendar,
    Users,
    Hotel,
    Phone,
    User,
    MessageCircle,
    Landmark,
    Ship,
    Sun,
    Crown
} from "lucide-vue-next";
</script>