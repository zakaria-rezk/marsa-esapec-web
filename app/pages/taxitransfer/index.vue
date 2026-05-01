<template>
    <div>
        <div id="hero" class=" w-full bg-hero bg-cover bg-no-repeat bg-center "
            :style="{ backgroundImage: `url(${taxiTransfer})` }">
            <section
                class="relative h-[70vh] min-h-[500px] text-white flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 bg-secondary/90"></div>
                <div class="relative z-10 text-center px-4 max-w-3xl animate-in slide-in-from-bottom-8 duration-700">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Taxi Transfers
                    </h1>
                    <p class="text-lg md:text-xl ">
                        Enjoy safe and convenient taxi transfers with professional drivers available 24/7. we make your
                        journey smooth and stress-free.
                    </p>
                </div>
            </section>
        </div>
        <div class="min-h-screen bg-background">
            <div class="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
                <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <!-- LEFT -->
                    <div class="flex-1 min-w-0">
                        <h1 class="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                            Reliable Taxi Transfers
                        </h1>

                        <div class="space-y-4 text-[#666666] text-sm md:text-base leading-relaxed mb-8">
                            <p>
                                We provide reliable and comfortable taxi transfer services designed to make your travel
                                experience smooth and stress-free. Whether you are arriving at the airport, leaving your
                                hotel, or planning a trip to another destination, our professional drivers are ready to
                                take you safely and on time.
                            </p>
                            <p>
                                Our taxi service is perfect for travelers who want a private and convenient transfer
                                without the hassle of waiting for public transportation. From airport pickups to hotel
                                transfers and trips to popular destinations, we ensure every ride is comfortable, safe,
                                and enjoyable.
                            </p>
                            <p>
                                All our vehicles are modern, clean, and fully air-conditioned, ensuring a pleasant ride
                                even during long journeys. Our experienced drivers know the local area very well,
                                allowing them to choose the best routes and make sure you reach your destination quickly
                                and safely.
                            </p>
                        </div>
                        <!-- Why Choose -->
                        <h2 class="text-xl md:text-2xl font-bold text-primary-foreground mb-4">
                            Why Choose Our Taxi Service
                        </h2>
                        <ul class="space-y-3 mb-8">
                            <li v-for="(item, i) in whyChoose" :key="i" class="flex items-center gap-3">
                                <div
                                    class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <component :is="item.icon" class="w-3.5 h-3.5 text-primary" />
                                </div>

                                <span class="text-[#666666] text-sm md:text-base">
                                    {{ item.text }}
                                </span>
                            </li>
                        </ul>
                        <!-- How to Book -->
                        <h2 class="text-xl md:text-2xl font-bold text-secondary mb-4">
                            How To Book Transfer
                        </h2>
                        <ul class="space-y-3 mb-10">
                            <li v-for="(item, i) in howToBook" :key="i" class="flex items-center gap-3">
                                <div
                                    class="w-7 h-7 rounded-full bg-primary-foreground/90 flex items-center justify-center shrink-0">
                                    <span class="text-white text-xs font-bold">
                                        {{ String(i + 1).padStart(2, '0') }}
                                    </span>
                                </div>
                                <span class="text-[#666666] text-sm md:text-base">
                                    {{ item }}
                                </span>
                            </li>
                        </ul>
                        <!-- Gallery -->
                        <h2 class="text-xl md:text-2xl font-bold text-secondary mb-4">
                            Taxi Gallery
                        </h2>
                        <div class="col-span-2 row-span-2 rounded-xl overflow-hidden">
                            <img :src="taixpic" class="w-full h-full object-cover" />
                        </div>
                    </div>
                    <!-- RIGHT -->
                    <div class="lg:col-span-2">

                        <div class="bg-background rounded-2xl shadow-lg p-6 sticky top-8 text-primary-foreground">
                            <h3 class="text-xl font-bold text-primary-foreground mb-1">
                                Book Transfer
                            </h3>
                            <p class="mb-5">
                                <span class="text-primary-danger font-bold text-xl">
                                    ${{ totalPrice
                                    }}
                                </span>
                                <span class="text-[#666666] text-sm"> </span>
                            </p>
                            <h4 class="text-primary-foreground font-bold mb-3">Trip Details</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <!-- FROM CUSTOM SELECT -->
                                <div class="relative group">
                                    <label
                                        class="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 mb-2 block">
                                        From
                                    </label>

                                    <!-- Toggle Button -->
                                    <button @click="showFrom = !showFrom" type="button"
                                        class="w-full flex items-center justify-between bg-white border-2 border-border rounded-xl px-4 py-3.5 transition-all duration-300 hover:border-primary-danger focus:ring-4 focus:ring-primary-danger/10"
                                        :class="{ 'border-primary-danger ring-4 ring-primary-danger/10': showFrom }">
                                        <div class="flex items-center gap-3">
                                            <MapPin class="w-5 h-5 text-primary-danger" />
                                            <span class="font-semibold text-sm"
                                                :class="!form.from ? 'text-gray-400' : 'text-foreground'">
                                                {{ form.from || 'Select departure' }}
                                            </span>
                                        </div>
                                        <ChevronDown class="w-4 h-4 transition-transform duration-300"
                                            :class="{ 'rotate-180': showFrom }" />
                                    </button>

                                    <!-- Custom Options List -->
                                    <Transition name="dropdown">
                                        <div v-if="showFrom"
                                            class="absolute z-50 w-full mt-2 bg-white border border-border shadow-xl rounded-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                            <div class="max-h-60 overflow-y-auto custom-scrollbar">
                                                <div v-for="from in fromOptions" :key="from"
                                                    @click="form.from = from; showFrom = false; onFromChange()"
                                                    class="flex items-center justify-between px-4 py-3 hover:bg-primary-danger/5 cursor-pointer transition-colors group">
                                                    <span class="text-sm font-medium group-hover:text-primary-danger">{{
                                                        from }}</span>
                                                    <Check v-if="form.from === from"
                                                        class="w-4 h-4 text-primary-danger" />
                                                </div>
                                            </div>
                                        </div>
                                    </Transition>
                                    <p v-if="errors.from" class="text-red-500 text-xs mt-1">
                                        {{ errors.from }}
                                    </p>
                                </div>

                                <!-- TO CUSTOM SELECT -->
                                <div class="relative group" :class="{ 'opacity-50 pointer-events-none': !form.from }">
                                    <label
                                        class="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 mb-2 block">
                                        To
                                    </label>

                                    <button @click="showTo = !showTo" type="button" :disabled="!form.from"
                                        class="w-full flex items-center justify-between bg-white border-2 border-border rounded-xl px-4 py-3.5 transition-all duration-300 hover:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                        :class="{ 'border-blue-500 ring-4 ring-blue-500/10': showTo }">
                                        <div class="flex items-center gap-3">
                                            <Navigation class="w-5 h-5 text-blue-500" />
                                            <span class="font-semibold text-sm"
                                                :class="!form.to ? 'text-gray-400' : 'text-foreground'">
                                                {{ form.to || 'Select destination' }}
                                            </span>
                                        </div>
                                        <ChevronDown class="w-4 h-4 transition-transform duration-300"
                                            :class="{ 'rotate-180': showTo }" />
                                    </button>

                                    <Transition name="dropdown">
                                        <div v-if="showTo"
                                            class="absolute z-50 w-full mt-2 bg-white border border-border shadow-xl rounded-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                            <div class="max-h-60 overflow-y-auto custom-scrollbar">
                                                <div v-for="to in toOptions" :key="to"
                                                    @click="form.to = to; showTo = false"
                                                    class="flex items-center justify-between px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors group">
                                                    <span class="text-sm font-medium group-hover:text-blue-600">{{ to
                                                    }}</span>
                                                    <Check v-if="form.to === to" class="w-4 h-4 text-blue-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </Transition>
                                    <p v-if="errors.to" class="text-red-500 text-xs mt-1">
                                        {{ errors.to }}
                                    </p>
                                </div>
                            </div>
                            <!-- Date -->
                            <label class="text-sm font-semibold mb-1 block">Date</label>
                            <div class="flex items-center gap-2 border rounded-lg px-4 py-3 mb-4">
                                <Calendar class="w-5 h-5" />
                                <input type="date" v-model="form.date"
                                    class="bg-transparent outline-none text-sm flex-1" />


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
                            <div class="relative group">
                                <label
                                    class="text-xs font-bold text-primary-foreground uppercase tracking-widest ml-1 mb-2 block">
                                    Vehicle Type
                                </label>

                                <!-- Dropdown Trigger -->
                                <button @click="showVehicle = !showVehicle" type="button"
                                    class="w-full flex items-center justify-between bg-white border-2 border-border rounded-xl px-4 py-3.5 transition-all duration-300 hover:border-primary-danger focus:ring-4 focus:ring-primary-danger/10"
                                    :class="{ 'border-primary-danger ring-4 ring-primary-danger/10': showVehicle }">
                                    <div class="flex items-center gap-3">
                                        <Car class="w-5 h-5 text-primary-danger" />
                                        <div class="flex flex-col items-start">
                                            <span class="font-semibold text-sm"
                                                :class="!form.carType ? 'text-gray-400' : 'text-foreground'">
                                                {{ form.carType || 'Select a vehicle' }}
                                            </span>
                                        </div>
                                    </div>
                                    <ChevronDown class="w-4 h-4 transition-transform duration-300"
                                        :class="{ 'rotate-180': showVehicle }" />
                                </button>
                                <!-- Custom Options Menu -->
                                <Transition name="dropdown">
                                    <div v-if="showVehicle"
                                        class="absolute z-50 w-full mt-2 bg-white border border-border shadow-xl rounded-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                        <div class="max-h-64 overflow-y-auto">
                                            <!-- Vehicle Options -->
                                            <div v-for="option in vehicleOptions" :key="option.id"
                                                @click="form.carType = option.label; showVehicle = false"
                                                class="flex items-center justify-between px-4 py-4 hover:bg-primary-danger/5 cursor-pointer transition-colors group border-b border-gray-50 last:border-0">

                                                <div class="flex flex-col">
                                                    <span
                                                        class="text-sm font-bold group-hover:text-primary-danger transition-colors">
                                                        {{ option.label }}
                                                    </span>
                                                    <span class="text-xs text-muted-foreground mt-0.5">
                                                        {{ option.description }}
                                                    </span>
                                                </div>

                                                <!-- Checkmark for selected -->
                                                <div class="flex items-center gap-3">
                                                    <span
                                                        class="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase">
                                                        {{ option.seats }}
                                                    </span>
                                                    <Check v-if="form.carType === option.label"
                                                        class="w-4 h-4 text-primary-danger" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                                <p v-if="errors.carType" class="text-red-500 text-xs mt-1">
                                    {{ errors.carType }}
                                </p>
                            </div>
                            <!-- Room -->
                            <label class="text-sm font-semibold mb-1 block">{{ selectedTrip?.isHotel ? 'Room Number' :
                                'Flight Number' }}</label>
                            <div class="flex items-center gap-2 border rounded-lg px-4 py-3 mb-4">
                                <Hotel class="w-5 h-5" />
                                <input v-model="form.flightroomNumber" type="number"
                                    placeholder="Enter Your Room Number"
                                    class="bg-transparent outline-none text-sm flex-1" />
                            </div>
                            <p v-if="errors.flightroomNumber" class="text-red-500 text-xs mt-1">
                                {{ errors.flightroomNumber }}
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
                            <div class="w-full max-w-md mx-auto space-y-4">
                                <!-- Main Wrapper with overflow control to keep things tidy -->
                                <div class="flex flex-col">

                                    <!-- 1. SIM CARD TOGGLE CARD -->
                                    <div @click="form.addSimCard = !form.addSimCard"
                                        class="group relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 z-10"
                                        :class="form.addSimCard ? 'border-primary-danger bg-primary-danger/5 shadow-md' : 'border-border bg-white hover:border-gray-300'">

                                        <div class="flex items-center gap-4">
                                            <!-- Icon with background shift -->
                                            <div class="p-2 rounded-lg transition-colors duration-300"
                                                :class="form.addSimCard ? 'bg-primary-danger text-white' : 'bg-gray-100 text-gray-500'">
                                                <Smartphone class="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 class="text-sm font-bold text-foreground">Local SIM Card</h4>
                                                <p class="text-xs text-muted-foreground">Stay connected with high-speed
                                                    data</p>
                                            </div>
                                        </div>

                                        <!-- Custom Checkbox UI -->
                                        <div class="w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-300"
                                            :class="form.addSimCard ? 'bg-primary-danger border-primary-danger scale-110' : 'border-gray-300 bg-white'">
                                            <Check v-if="form.addSimCard"
                                                class="w-4 h-4 text-white animate-in zoom-in duration-200" />
                                        </div>
                                    </div>

                                    <!-- 2. EXPANDABLE SECTION (The "Shift" Fix) -->
                                    <!-- This grid approach animates height from 0 to 'auto' perfectly -->
                                    <div class="grid transition-all duration-500 ease-in-out opacity-0"
                                        :class="form.addSimCard ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'">

                                        <div class="overflow-hidden">
                                            <div
                                                class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-gray-50/50 border border-dashed border-border ml-2">

                                                <!-- Package Selection -->
                                                <div class="space-y-1.5">
                                                    <label
                                                        class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground ml-1">
                                                        Data Package
                                                    </label>
                                                    <div class="relative">
                                                        <select v-model="form.simCapacity"
                                                            class="w-full bg-white border border-border rounded-lg pl-4 pr-10 py-2.5 appearance-none focus:border-primary-danger focus:ring-2 focus:ring-primary-danger/10 outline-none text-sm font-medium transition-all">
                                                            <option value="" disabled>Choose a plan</option>
                                                            <option :value="item?.capacity" v-for="item in simPackges">
                                                                {{
                                                                    item?.capacity }}</option>

                                                        </select>
                                                        <ChevronDown
                                                            class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                                    </div>
                                                    <p v-if="errors.simCapacity" class="text-red-500 text-xs mt-1">
                                                        {{ errors.simCapacity }}
                                                    </p>
                                                </div>

                                                <!-- SIM Counter -->
                                                <div class="space-y-1.5">
                                                    <label
                                                        class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground ml-1">
                                                        Quantity
                                                    </label>
                                                    <div
                                                        class="flex items-center h-[42px] border border-border rounded-lg bg-white overflow-hidden focus-within:border-primary-danger transition-colors">
                                                        <button
                                                            @click.stop="form.simCards > 1 ? form.simCards-- : form.simCards = 1"
                                                            type="button"
                                                            class="w-12 h-full flex items-center justify-center hover:bg-gray-50 text-primary-danger font-bold transition-colors border-r">
                                                            -
                                                        </button>
                                                        <input v-model.number="form.simCards" type="number" :min="1"
                                                            class="flex-1 w-full text-center text-sm font-bold bg-transparent focus:outline-none" />
                                                        <button @click.stop="form.simCards++" type="button"
                                                            class="w-12 h-full flex items-center justify-center hover:bg-gray-50 text-primary-danger font-bold transition-colors border-l">
                                                            +
                                                        </button>
                                                    </div>
                                                    <p v-if="errors.simCards" class="text-red-500 text-xs mt-1">
                                                        {{ errors.simCards }}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Special Request -->
                            <label class="text-sm font-semibold mb-1 mt-2 block">Special Request</label>
                            <textarea v-model="form.specialRequest"
                                class="w-full border rounded-lg px-4 py-3 mb-6 text-sm h-28 resize-none bg-transparent" />
                            <!-- Button -->
                            <button @click="submitBooking" :disabled="loading"
                                class="w-full bg-primary-danger text-white font-semibold py-3 rounded-full transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-90">
                                <svg v-if="loading" class="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4" />
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                </svg>

                                <span>
                                    {{ loading ? 'Processing...' : 'Request Booking' }}
                                </span>
                            </button>
                            <p class="text-[#666666] text-xs text-center mt-3">
                                This is a booking request. our team will contact you to confirm availability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-background">
            <section class="max-w-7xl mx-auto px-4 md:px-6">
                <div class="max-w-7xl mx-auto">

                    <h2 class="text-xl md:text-3xl font-bold text-primary-foreground mb-8 md:mb-10">
                        Reviews
                    </h2>

                    <div class="divide-y divide-border">

                        <div v-for="r in reviews" :key="r.id" class="py-6 flex flex-col md:flex-row gap-4 md:gap-6">

                            <!-- Avatar (Initials) -->
                            <div
                                class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-foreground  text-white flex items-center justify-center font-bold flex-shrink-0">
                                {{ r.userName?.trim()?.charAt(0)?.toUpperCase() || 'U' }}
                            </div>

                            <!-- Content -->
                            <div class="flex flex-col md:flex-row gap-3 md:gap-6 w-full">

                                <!-- Left -->
                                <div class="md:w-44 flex-shrink-0">

                                    <!-- Stars -->
                                    <div class="flex gap-0.5 mb-1">
                                        <Star v-for="j in 5" :key="j" class="w-3.5 h-3.5" :class="j <= r.rating
                                            ? 'text-yellow-400 fill-yellow-400'
                                            : 'text-muted-foreground/30'" />
                                    </div>

                                    <!-- Name -->
                                    <div class="flex items-center gap-1.5">
                                        <span class="text-sm font-semibold text-[#666666]">
                                            {{ r.userName }}
                                        </span>
                                    </div>

                                    <!-- Date -->
                                    <p class="text-xs text-muted-foreground mt-0.5">
                                        {{ r.date || 'Recently' }}
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

                </div>
            </section>
        </div>
        <section class="py-16 md:py-12 px-4">
            <div class="max-w-7xl mx-auto px-4 md:px-6">
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
<script setup lang="ts">
import taxiTransfer from "@/assets/images/taa.png";
import taixpic from "@/assets/images/taixpic.png";
import { getItems } from "~/services/trips";
import { addItem } from "@/services/trips"
import {
    Users,
    Calendar as CalendarIcon,
    CarFront,
    Plane,
    IdCard,
    Hotel,
    ShieldCheck,
    CloudSnow,
    Clock3,
    User, Smartphone,
    Phone, ChevronDown

} from "lucide-vue-next"
import { useToast } from "@/composables/useToast"; 
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter()
const { addToast } = useToast();
const faqs = ref()
const showFrom = ref(false);
const showTo = ref(false);
const data = ref([
]);
const showVehicle = ref(false);
const activeIndex = ref();
const toggle = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};
const vehicleOptions = [
    {
        id: 1,
        label: 'Small Private Car',
        description: 'Comfortable for individuals or couples',
        seats: '4 Seats'
    },
    {
        id: 2,
        label: 'Large Private Car',
        description: 'Spacious SUV for small families',
        seats: '6 Seats'
    },
    {
        id: 3,
        label: 'Microbus',
        description: 'Perfect for group travel and tours',
        seats: '12-14 Seats'
    }
];

/* reset TO when FROM changes */
const onFromChange = () => {
    form.to = "";
};
const simPackges = ref([
])
const reviews = ref([
])
const getTrips = async () => {

    try {
        const res = await getItems(`taxi`)

        data.value = res.data?.data
        const res2 = await getItems(`simcards`)
        simPackges.value = res2.data?.data.map((item: any) => ({
            capacity: item.capacity,
            price: item.price
        }))
        const res3 = await getItems(`taxifaqs`);
        faqs.value = res3.data;
        const res4 = await getItems(`taxireviews`);
        reviews.value = res4.data?.filter(
            (r: any) => r.status === 'accepted'
        )
    } catch (err) { }
}
onMounted(() => {
    getTrips()
})
const fromOptions = computed(() => {
    if (!data.value?.length) return [];

    return [...new Set(data.value.map((item) => item?.from))];
});

const toOptions = computed(() => {
    if (!form?.from || !data.value?.length) return [];

    return [
        ...new Set(
            data.value
                .filter((item) => item?.from === form.from)
                .map((item) => item?.to)
        ),
    ];
});

const selectedTrip = computed(() => {
    return data.value.find(
        (item) =>
            item.from === form.from &&
            item.to === form.to
    );
});
const form = reactive({
    from: "",
    to: "",
    carType: '',
    addSimCard: false,
    simCards: 1,
    simCapacity: '',
    totalPrice: 0,
    date: '',
    peopleCount: 2,
    flightroomNumber: 143,
    name: '',
    phone: '',
    taxiId: selectedTrip.value?.id || '',
    specialRequest: ''
});
const errors = reactive({
    from: "",
    to: "",
    date: '',
    peopleCount: '',
    flightroomNumber: '',
    name: '',
    phone: '',
    carType: '',
    simCards: '',
    simCapacity: '',
});
const loading = ref(false);
const tripPrice = computed(() => {
    if (!selectedTrip.value) return 0;

    return form.carType === "Microbus"
        ? Number(selectedTrip.value.HighSprice)
        : Number(selectedTrip.value.sedanPrice);
});
const selectedSimPackage = computed(() => {
    return simPackges.value.find(
        (pkg) => pkg.capacity === form.simCapacity
    );
});
const simTotal = computed(() => {
    if (!form.addSimCard || !selectedSimPackage.value) return 0;

    return Number(selectedSimPackage.value.price) * Number(form.simCards || 0);
});
const totalPrice = computed(() => {
    return tripPrice.value + simTotal.value;
});
const submitBooking = async () => {
    // Reset errors
    errors.date = form.date ? '' : 'Please select a date.';
    errors.to = form.to ? '' : 'Please select a destination.';
    errors.from = form.from ? '' : 'Please select a departure location.';
    errors.carType = form.carType ? '' : 'Please select a vehicle type.';
    errors.peopleCount = form.peopleCount > 0 ? '' : 'Please enter the number of guests.';
    errors.flightroomNumber = form.flightroomNumber ? '' : 'Please the correct room/flight number.';
    errors.name = form.name ? '' : 'Please enter your full name.';
    errors.phone = form.phone ? '' : 'Please enter your WhatsApp number.';
    form.totalPrice = String(totalPrice.value);
    if (form.addSimCard) {
        errors.simCapacity = form.simCapacity ? '' : 'Please select a SIM card data package.';
        errors.simCards = form.simCards > 0 ? '' : 'Please enter the quantity of SIM cards.';

    } else {
        delete form.simCapacity
        delete form.simCards

        errors.simCapacity = '';
        errors.simCards = '';
    }

    if (Object.values(errors).some(error => error)) {
        addToast('Please fix the errors in the form before submitting.', 'error');
        return; // If there are errors, do not proceed
    }
    form.taxiId = selectedTrip.value?.id
    loading.value = true;
    console.log('Booking Details:', { ...form });
    try {
        delete form.to
        delete form.from
        delete form.addSimCard

        const res = await addItem('taxibooking', form)
        router.push(`/taxitransfer/confirmations/${res.data?.id}`)
        // router.push(`/trips/confirmations/${res.data?.id}`)
    }
    catch (err) {
        addToast('An error occurred while submitting your booking. Please try again later.', 'error');
    }
    finally {
        loading.value = false;
    }
    // Simulate API call

    loading.value = false;
    // Reset form
    form.date = '';
    form.peopleCount = 2;
    form.flightroomNumber = 143;
    form.addSimCard = false;
    form.name = '';
    form.phone = '';
    form.specialRequest = '';
    form.simCapacity = '';
    form.simCards = 1;
    form.to = '';
    form.from = '';

    console.log('Booking Details: after', { ...form });
};
/* ---------- Static Data ---------- */
const whyChoose = [
    { icon: CarFront, text: "Private and comfortable vehicles" },
    { icon: Plane, text: "Airport pickup and drop-off services" },
    { icon: IdCard, text: "Professional and experienced drivers" },
    { icon: Hotel, text: "Hotel transfers" },
    { icon: ShieldCheck, text: "safe and reliable transportation" },
    { icon: CloudSnow, text: "Fully air-conditioned cars" },
    { icon: Clock3, text: "Available 24/7 for your convenience" },
];

const howToBook = [
    "Choose pickup location",
    "Enter Booking Details",
    "Send Booking Request",
    "Receive Confirmation",
]
</script>