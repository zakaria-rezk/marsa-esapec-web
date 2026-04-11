<template>
    <div></div>
    <div class="min-h-screen w-full bg-muted">

        <!-- Hero Image -->
        <div class="w-full h-[350px] bg-secondary/80" />

        <!-- Content -->
        <div class="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-5 gap-8">

            <!-- Left -->
            <div class="lg:col-span-3 space-y-8">

                <!-- Overview -->
                <div>
                    <h2 class="text-2xl font-bold text-primary-foreground mb-3">Overview</h2>
                    <p class="text-[#666666] leading-relaxed">
                        Experience the timeless beauty of luxor on a 3-day immersive journey through ancient
                        temples, royal tombs, and authentic local life. from the majestic karnak temple to a magical
                        sunrise hot air balloon ride, this tour blends history, adventure, and relaxation along the
                        Nile.
                    </p>
                </div>

                <!-- Highlights -->
                <div>
                    <h2 class="text-2xl font-bold text-primary-foreground mb-4">Tour Highlights</h2>

                    <ul class="space-y-3">
                        <li class="flex items-center gap-3 text-primary-foreground">
                            <Landmark class="w-5 h-5 text-[#666666]" />
                            Karnak Temple Complex
                        </li>

                        <li class="flex items-center gap-3 text-primary-foreground">
                            <Ship class="w-5 h-5 text-[#666666]" />
                            Nile Felucca Ride
                        </li>

                        <li class="flex items-center gap-3 text-primary-foreground">
                            <Sun class="w-5 h-5 text-[#666666]" />
                            Hot Air Balloon at sunrise
                        </li>

                        <li class="flex items-center gap-3 text-primary-foreground">
                            <Crown class="w-5 h-5 text-[#666666]" />
                            Hatshepsut Temple
                        </li>
                    </ul>
                </div>

                <!-- Itinerary -->
                <div>
                    <h2 class="text-2xl font-bold text-primary-foreground mb-6">Itinerary</h2>

                    <!-- Day 1 -->
                    <div class="flex gap-4 mb-8">
                        <div class="flex flex-col items-center">
                            <div
                                class="w-8 h-8 rounded-full bg-[#5EA3D5] text-white flex items-center justify-center text-xs font-bold">
                                01
                            </div>

                        </div>

                        <div>
                            <h3 class="text-lg font-bold text-primary-foreground  mb-3">
                                Day 1 – Arrival & East Bank Exploration
                            </h3>

                            <p class="font-semibold text-primary-foreground mb-1">Morning:</p>
                            <ul class="text-[#666666] mb-3 space-y-1 text-sm">
                                <li>• Meet & assist at luxor airport or train station</li>
                                <li>• Private transfer to hotel – check-in</li>
                                <li>• Lunch at a local restaurant</li>
                            </ul>

                            <p class="font-semibold text-primary-foreground italic mb-1">Afternoon Tour:</p>
                            <ul class="text-[#666666] mb-3 space-y-1 text-sm">
                                <li>• explore karnak temple complex</li>
                                <li>• visit luxor temple</li>
                            </ul>

                            <p class="font-semibold text-primary-foreground mb-1">Evening:</p>
                            <ul class="text-[#666666] space-y-1 text-sm">
                                <li>• free time or optional sound & light show at karnak</li>
                                <li>• overnight in luxor</li>
                            </ul>
                        </div>
                    </div>




                    <div>
                        <!-- Included -->
                        <div>
                            <h2 class="text-2xl font-bold text-foreground mb-4">Included</h2>
                            <ul class="space-y-3">
                                <li v-for="item in included" :key="item"
                                    class="flex items-center gap-3 text-foreground text-sm">
                                    <span
                                        class="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">
                                        <includeduicon />
                                    </span>
                                    {{ item }}
                                </li>
                            </ul>
                        </div>

                        <!-- Not Included -->
                        <div class="mt-8">
                            <h2 class="text-2xl font-bold text-foreground mb-4">Not Included</h2>
                            <ul class="space-y-3">
                                <li v-for="item in notIncluded" :key="item"
                                    class="flex items-center gap-3 text-foreground text-sm">
                                    <span
                                        class="w-5 h-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-xs">
                                        <notincludeduicon />
                                    </span>
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right -->
            <div class="lg:col-span-2">
                <div class="bg-background rounded-2xl shadow-lg p-6 sticky top-8">

                    <h3 class="text-xl font-bold text-primary-foreground mb-1">Book This Tour</h3>

                    <p class="mb-5">
                        <span class="text-[#666666]">From </span>
                        <span class="text-primary-danger font-bold text-xl">$700</span>
                        <span class="text-[#666666] text-sm"> /person</span>
                    </p>

                    <h4 class="text-primary-foreground  font-bold mb-3">Trip Details</h4>

                    <!-- Date -->
                    <label class="text-primary-foreground  font-semibold text-sm mb-1.5 block">Date</label>
                    <div class="flex items-center gap-2 border border-[#999999] rounded-lg px-4 py-3 mb-4">
                        <Calendar class="w-5 h-5 text-[#666666]" />
                        <span class="text-[#666666] text-sm flex-1">select date</span>
                    </div>

                    <!-- Guest -->
                    <label class="text-primary-foreground  font-semibold text-sm mb-1.5 block">Guest</label>
                    <div class="flex items-center gap-2 border border-[#999999] rounded-lg px-4 py-3 mb-4">
                        <Users class="w-5 h-5 text-[#666666]" />
                        <span class="text-[#666666] text-sm flex-1">2 guest</span>
                    </div>

                    <!-- Hotel -->
                    <label class="text-primary-foreground  font-semibold text-sm mb-1.5 block">Hotel</label>
                    <div class="flex items-center gap-2 border border-[#999999] rounded-lg px-4 py-3 mb-4">
                        <Hotel class="w-5 h-5 text-muted-foreground" />
                        <input type="text" placeholder="Enter Your Hotel Name"
                            class="bg-transparent outline-none text-sm flex-1" />
                    </div>

                    <!-- Room -->
                    <label class="text-primary-foreground  font-semibold text-sm mb-1.5 block">Room Number</label>
                    <div class="flex items-center gap-2 border border-[#999999] rounded-lg px-4 py-3 mb-4">
                        <Phone class="w-5 h-5 text-muted-foreground" />
                        <input type="text" placeholder="Enter Your Room Number"
                            class="bg-transparent outline-none text-sm flex-1" />
                    </div>

                    <!-- Name -->
                    <label class="text-primary-foreground  font-semibold text-sm mb-1.5 block">Full Name</label>
                    <div class="flex items-center gap-2 border border-[#999999] rounded-lg px-4 py-3 mb-4">
                        <User class="w-5 h-5 text-muted-foreground" />
                        <input type="text" placeholder="Enter your full name"
                            class="bg-transparent outline-none text-sm flex-1" />
                    </div>

                    <!-- WhatsApp -->
                    <label class="text-primary-foreground  font-semibold text-sm mb-1.5 block">WhatsApp Number</label>
                    <div class="flex items-center gap-2 border border-[#999999] rounded-lg px-4 py-3 mb-4">
                        <MessageCircle class="w-5 h-5 text-muted-foreground" />
                        <input type="text" placeholder="Enter Your WhatsApp Number"
                            class="bg-transparent outline-none text-sm flex-1" />
                    </div>

                    <!-- Special Request -->
                    <label class="text-primary-foreground  font-semibold text-sm mb-1.5 block">Special Request</label>
                    <textarea
                        class="w-full border border-[#999999] rounded-lg px-4 py-3 mb-6 text-sm h-28 resize-none bg-transparent"></textarea>

                    <!-- Total -->
                    <div class="text-center mb-4">
                        <p class="text-[#666666] font-bold">Total Price</p>
                        <p class="text-primary-danger font-bold text-2xl">$1400</p>
                    </div>

                    <!-- Button -->
                    <button class="w-full bg-primary-danger text-white font-semibold py-3 rounded-full">
                        Request Booking
                    </button>

                    <p class="text-[#666666] text-xs text-center mt-3">
                        This is a booking request. our team will contact you to confirm availability.
                    </p>

                </div>
            </div>

        </div>
        <div class="min-h-screen bg-background">
            <section class="py-16 md:py-24 px-4">
                <div class="max-w-4xl mx-auto">

                    <h2 class="text-2xl md:text-3xl font-bold text-secondary mb-10">
                        Reviews
                    </h2>

                    <div class="divide-y divide-border">
                        <div v-for="(r, i) in reviews" :key="i" class="py-6 flex gap-4 md:gap-6">
                            <!-- Avatar -->
                            <div class="w-14 h-14 rounded-full bg-muted-foreground/20 flex-shrink-0" />

                            <!-- Left -->
                            <div class="flex-shrink-0 w-36 md:w-44">

                                <!-- Stars -->
                                <div class="flex gap-0.5 mb-1">
                                    <Star v-for="j in 5" :key="j" class="w-3.5 h-3.5" :class="j <= r.rating
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-muted-foreground/30'" fill="currentColor" />
                                </div>

                                <!-- Name -->
                                <div class="flex items-center gap-1.5">
                                    <span class="text-sm font-semibold text-foreground">
                                        {{ r.name }}
                                    </span>
                                    <CheckCheck class="w-4 h-4 text-primary" />
                                </div>

                                <!-- Date -->
                                <p class="text-xs text-muted-foreground mt-0.5">
                                    {{ r.date }}
                                </p>
                            </div>

                            <!-- Right -->
                            <div class="flex-1 min-w-0">
                                <h3 class="font-bold text-secondary text-sm md:text-base mb-1">
                                    {{ r.title }}
                                </h3>
                                <p class="text-muted-foreground text-sm leading-relaxed">
                                    {{ r.text }}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
        <section class="py-16 md:py-24 px-4">
            <div class="max-w-3xl mx-auto">

                <h2 class="text-2xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
                    Frequently Asked Question
                </h2>

                <div class="space-y-4">
                    <div v-for="(faq, i) in faqs" :key="i"
                        class="border border-border rounded-xl transition-all duration-300">
                        <!-- Question -->
                        <div @click="toggle(i)"
                            class="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-muted/50">
                            <span class="text-foreground text-sm md:text-base font-medium">
                                {{ faq.question }}
                            </span>

                            <ChevronDown class="w-5 h-5 text-muted-foreground transition-transform duration-300"
                                :class="{ 'rotate-180': activeIndex === i }" />
                        </div>

                        <!-- Answer -->
                        <div v-show="activeIndex === i" class="px-6 pb-4 text-muted-foreground text-sm leading-relaxed">
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>


<script setup>import { Star, CheckCheck } from "lucide-vue-next";

const reviews = [
    {
        name: "Arlene McCoy",
        date: "2 October 2025",
        rating: 4,
        title: "Very Professional Service",
        text: "Booking the taxi was simple and the team contacted us quickly to confirm everything. The driver was friendly and the vehicle was modern",
    },
    {
        name: "Arlene McCoy",
        date: "2 October 2025",
        rating: 4,
        title: "Very Professional Service",
        text: "Booking the taxi was simple and the team contacted us quickly to confirm everything. The driver was friendly and the vehicle was modern",
    },
    {
        name: "Arlene McCoy",
        date: "2 October 2025",
        rating: 4,
        title: "Very Professional Service",
        text: "Booking the taxi was simple and the team contacted us quickly to confirm everything. The driver was friendly and the vehicle was modern",
    },
];
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
import includeduicon from "@/assets/svgs/included.svg";
import notincludeduicon from "@/assets/svgs/noincluded.svg";
import looo from "@/assets/svgs/line.svg";
const included = [
    "2 Nights Accommodation (4★ Hotel)",
    "Daily Breakfast",
    "Professional Egyptologist Guide",
    "All Transfers In A/C Vehicle",
    "Felucca Ride",
];
const notIncluded = [
    "Hot Air Balloon (Optional Add-On)",
    "Sound & Light Show",
    "Flights Or Train Tickets",
    "Personal Expenses",
    "Tips",
]; import { ref } from "vue";
import { ChevronDown } from "lucide-vue-next";

const activeIndex = ref(null);

const toggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = [
    {
        question: "Where are the best places for snorkeling in Marsa Alam?",
        answer:
            "Some of the best snorkeling spots in Marsa Alam include Abu Dabbab Bay, Marsa Mubarak, and Sataya Reef. These locations offer crystal-clear water and rich marine life.",
    },
    {
        question: "Do you provide airport transfer services?",
        answer:
            "Yes, we offer reliable taxi transfer services from and to Marsa Alam Airport with comfortable vehicles and professional drivers.",
    },
    {
        question: "Can I customize my trip package?",
        answer:
            "Absolutely! You can fully customize your trip including activities, hotel, transportation, and special requests.",
    },
    {
        question: "How can I book a trip?",
        answer:
            "You can book directly through our website by submitting a request form, or contact us via WhatsApp for quick assistance.",
    },
    {
        question: "Is it safe to travel to Marsa Alam?",
        answer:
            "Yes, Marsa Alam is considered a safe destination for tourists, with well-managed resorts and secure travel services.",
    },
];
</script>