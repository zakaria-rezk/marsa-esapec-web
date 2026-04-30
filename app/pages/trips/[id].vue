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
                        {{ data?.overview }}
                    </p>
                </div>

                <!-- Highlights -->
                <div>
                    <h2 class="text-2xl font-bold text-primary-foreground mb-4">Tour Highlights</h2>

                    <ul class="space-y-3">
                        <li class="flex items-center gap-3 text-primary-foreground" v-for="p in data?.places">
                            <Landmark class="w-5 h-5 text-[#666666]" />
                            {{ p }}
                        </li>
                    </ul>
                </div>

                <!-- Itinerary -->
                <div>
                    <h2 class="text-2xl font-bold text-primary-foreground mb-6">Itinerary</h2>

                    <!-- Day 1 -->
                    <div class="flex gap-4 mb-8" v-for="(d, index) in data?.days">
                        <div class="flex flex-col items-center">
                            <div
                                class="w-8 h-8 rounded-full bg-[#5EA3D5] text-white flex items-center justify-center text-xs font-bold">
                                0 {{ ++index }}
                            </div>

                        </div>

                        <div>


                            <p class="font-semibold text-primary-foreground mb-1">Morning:</p>
                            <ul class="text-[#666666] mb-3 space-y-1 text-sm">
                                <li v-for="m in d?.morning">• {{ m }}</li>

                            </ul>

                            <p class="font-semibold text-primary-foreground italic mb-1">Afternoon Tour:</p>
                            <ul class="text-[#666666] mb-3 space-y-1 text-sm">
                                <li v-for="f in d?.afternoon">• {{ f }}</li>

                            </ul>

                            <p class="font-semibold text-primary-foreground mb-1">Evening:</p>
                            <ul class="text-[#666666] mb-3 space-y-1 text-sm">
                                <li v-for="e in d?.evining">• {{ e }}</li>

                            </ul>
                        </div>
                    </div>
                    <div>
                        <!-- Included -->
                        <div>
                            <h2 class="text-2xl font-bold text-foreground mb-4">Included</h2>
                            <ul class="space-y-3">
                                <li v-for="item in data?.included" :key="item"
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
                                <li v-for="item in data?.excluded" :key="item"
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

                    <h3 class="text-xl font-bold text-primary-foreground mb-1">
                        Book This Tour
                    </h3>

                    <p class="mb-5">
                        <span class="text-[#666666]">From </span>
                        <span class="text-primary-danger font-bold text-xl">
                            ${{ data?.price }}
                        </span>
                        <span class="text-[#666666] text-sm"> /person</span>
                    </p>

                    <h4 class="text-primary-foreground font-bold mb-3">Trip Details</h4>

                    <!-- Date -->
                    <label class="text-sm font-semibold mb-1 block">Date</label>
                    <div class="flex items-center gap-2 border rounded-lg px-4 py-3 mb-4">
                        <Calendar class="w-5 h-5" />
                        <input type="date" v-model="form.date" class="bg-transparent outline-none text-sm flex-1" />


                    </div>
                    <p v-if="errors.date" class="text-red-500 text-xs mt-1">
                        {{ errors.date }}
                    </p>

                    <!-- Guests -->
                    <label class="text-sm font-semibold mb-1 block">Guest</label>
                    <div class="flex items-center gap-2 border rounded-lg px-4 py-3 mb-4">
                        <Users class="w-5 h-5" />
                        <input type="number" min="1" v-model="form.peopleCount"
                            class="bg-transparent outline-none text-sm flex-1" />
                    </div>
                    <p v-if="errors.peopleCount" class="text-red-500 text-xs mt-1">
                        {{ errors.peopleCount }}
                    </p>

                    <!-- Hotel -->
                    <label class="text-sm font-semibold mb-1 block">Hotel</label>
                    <div class="flex items-center gap-2 border rounded-lg px-4 py-3 mb-4">
                        <Hotel class="w-5 h-5" />
                        <input v-model="form.hotel" type="text" placeholder="Enter Your Hotel Name"
                            class="bg-transparent outline-none text-sm flex-1" />
                    </div>
                    <p v-if="errors.hotel" class="text-red-500 text-xs mt-1">
                        {{ errors.hotel }}
                    </p>

                    <!-- Room -->
                    <label class="text-sm font-semibold mb-1 block">Room Number</label>
                    <div class="flex items-center gap-2 border rounded-lg px-4 py-3 mb-4">
                        <Phone class="w-5 h-5" />
                        <input v-model="form.roomNumber" type="number" placeholder="Enter Your Room Number"
                            class="bg-transparent outline-none text-sm flex-1" />
                    </div>
                    <p v-if="errors.roomNumber" class="text-red-500 text-xs mt-1">
                        {{ errors.roomNumber }}
                    </p>

                    <!-- Name -->
                    <label class="text-sm font-semibold mb-1 block">Full Name</label>
                    <div class="flex items-center gap-2 border rounded-lg px-4 py-3 mb-4">
                        <User class="w-5 h-5" />
                        <input v-model="form.name" type="text" placeholder="Enter your full name"
                            class="bg-transparent outline-none text-sm flex-1" />
                    </div>
                    <p v-if="errors.name" class="text-red-500 text-xs mt-1">
                        {{ errors.name }}
                    </p>

                    <!-- WhatsApp -->
                    <label class="text-sm font-semibold mb-1 block">WhatsApp Number</label>
                    <div class="flex items-center gap-2 border rounded-lg px-4 py-3 mb-4">
                        <MessageCircle class="w-5 h-5" />
                        <input v-model="form.phone" type="text" placeholder="Enter Your WhatsApp Number"
                            class="bg-transparent outline-none text-sm flex-1" />

                    </div>
                    <p v-if="errors.phone" class="text-red-500 text-xs mt-1">
                        {{ errors.phone }}
                    </p>

                    <!-- Special Request -->
                    <label class="text-sm font-semibold mb-1 block">Special Request</label>
                    <textarea v-model="form.specialRequest"
                        class="w-full border rounded-lg px-4 py-3 mb-6 text-sm h-28 resize-none bg-transparent" />

                    <!-- Total -->
                    <div class="text-center mb-4">
                        <p class="text-[#666666] font-bold">Total Price</p>
                        <p class="text-primary-danger font-bold text-2xl">
                            ${{ data?.price * form?.peopleCount }}
                        </p>
                    </div>

                    <!-- Button -->
                    <button @click="submitBooking"
                        class="w-full bg-primary-danger text-white font-semibold py-3 rounded-full hover:opacity-90 transition">
                        Request Booking
                    </button>

                    <p class="text-[#666666] text-xs text-center mt-3">
                        This is a booking request. our team will contact you to confirm availability.
                    </p>

                </div>
            </div>

        </div>
        <div class="bg-background">
            <section class="py-12 md:py-20 px-4">
                <div class="max-w-7xl mx-auto">

                    <h2 class="text-xl md:text-3xl font-bold text-primary-foreground mb-8 md:mb-10">
                        Reviews
                    </h2>

                    <div class="divide-y divide-border">
                        <div v-for="(r, i) in data?.reviews" :key="i"
                            class="py-6 flex flex-col md:flex-row gap-4 md:gap-6">
                            <!-- Avatar -->
                            <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-muted-foreground/20 flex-shrink-0" />

                            <!-- Content Wrapper -->
                            <div class="flex flex-col md:flex-row gap-3 md:gap-6 w-full">

                                <!-- Left -->
                                <div class="md:w-44 flex-shrink-0">

                                    <!-- Stars -->
                                    <div class="flex gap-0.5 mb-1">
                                        <Star v-for="j in 5" :key="j" class="w-3.5 h-3.5" :class="j <= r.rating
                                            ? 'text-yellow-400 fill-current'
                                            : 'text-muted-foreground/30'" fill="currentColor" />
                                    </div>

                                    <!-- Name -->
                                    <div class="flex items-center gap-1.5">
                                        <span class="text-sm font-semibold text-[#666666]">
                                            {{ r.userName }}
                                        </span>

                                    </div>

                                    <!-- Date -->
                                    <p class="text-xs text-muted-foreground mt-0.5">
                                        {{ r.date }}
                                    </p>
                                </div>

                                <!-- Right -->
                                <div class="flex-1">
                                    <h3 class="font-bold text-primary-foreground text-sm md:text-base mb-1">
                                        {{ r.comment }}
                                    </h3>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="max-w-7xl mx-auto">

                        <h2 class="text-xl md:text-3xl font-bold text-primary-foreground  mb-4">
                            Related tours
                        </h2>
                        <div class="grid md:grid-cols-3 gap-8  py-10 lg:pt-20 pb-10 px-12">
                            <div v-for="(trip, index) in relatetTrips" :key="index"
                                class="bg-background border border-[#999999]  rounded-2xl overflow-hidden shadow-sm">
                                <!-- IMAGE -->
                                <div class="relative h-56 bg-muted flex items-center justify-center text-[#999999]">
                                    IMG

                                    <span
                                        class="absolute top-3 left-3 bg-[#D1E3FA] text-black text-xs font-semibold px-3 py-1 rounded-full">
                                        {{ trip?.discount }}
                                    </span>

                                    <div
                                        class="absolute bottom-3 right-3 bg-background rounded-full px-3 py-1 flex items-center gap-1 text-xs shadow">
                                        <Star class="w-3 h-3 text-primary fill-primary" />
                                        <span class="font-semibold text-foreground">
                                            {{ trip?.rating }}
                                        </span>
                                        <!-- <span class="text-[#999999]">
                                    ({{ trip }} reviews)
                                </span> -->
                                    </div>
                                </div>

                                <div class="p-5">
                                    <h3 class="text-base font-bold text-[#082852] mb-2">
                                        {{ trip?.name }}
                                    </h3>

                                    <div class="flex items-center gap-1 text-[#999999] text-sm mb-1">
                                        <MapPin class="w-3.5 h-3.5" />
                                        {{ trip?.places[0] }}
                                    </div>

                                    <div class="flex items-center gap-1 text-[#999999] text-sm mb-4">
                                        <Calendar class="w-3.5 h-3.5" />
                                        {{ trip?.days?.length + "days" }}
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">

                                            <span class="text-primary-danger text-xl font-bold">
                                                {{ trip?.price + '$' }}
                                            </span>
                                            <span class="text-[#999999] text-sm">/Person</span>
                                        </div>
                                    </div>
                                    <NuxtLink :to="`/trips/${trip.id}`"
                                        class="mt-4 inline-block bg-primary-danger text-white font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
                                        View Details
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="py-16 md:py-12 px-4">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-2xl md:text-4xl font-bold text-primary-foreground  mb-12">
                    Frequently Asked Question
                </h2>
                <div class="space-y-4">
                    <div v-for="(faq, i) in faqs" :key="i"
                        class="border border-[#999999] rounded-xl transition-all duration-300">
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


<script setup>
import { Star, CheckCheck, ChevronDown } from "lucide-vue-next";
import { addItem } from "@/services/trips"
import { getItems } from "~/services/trips";
import { useRoute } from "vue-router";
const route = useRoute();
const activeIndex = ref();
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
onMounted(() => {
    getTrips()
})
const data = ref();
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
import { useToast } from "@/composables/useToast";
const { addToast } = useToast()
const submitBooking = async () => {
    console.log('Booking:', "payload")
    console.log(validateForm())
    if (!validateForm()) return
    try {

        const payload = {
            tripId: +route.params?.id,
            ...form,

        }
        await addItem('reservations', payload)
        addToast('Booking Request Sent Successfully', 'success')
        addToast('Thank you! Our team will contact you shortly to confirm your trip details and pickup time.', 'success')

    } catch (er) {

    }

}
const relatetTrips = ref();
const faqs = ref()
const getTrips = async () => {
    const id = route.params.id
    try {
        const res = await getItems(`trip/${id}`)
        data.value = res.data
        const res2 = await getItems(`trip`)
        relatetTrips.value = res2.data?.data?.splice(0, 3);
        const res3 = await getItems(`faqs`);
        faqs.value = res3.data
    } catch (err) { }
}

import {
    Calendar,
    Users,
    Hotel,
    Phone,
    User,
    MessageCircle,
    Landmark,

} from "lucide-vue-next";
import includeduicon from "@/assets/svgs/included.svg";
import notincludeduicon from "@/assets/svgs/noincluded.svg";




</script>