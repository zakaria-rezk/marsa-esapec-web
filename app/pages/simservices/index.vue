<template>
    <div>
        <div id="hero" class=" w-full bg-hero bg-cover bg-no-repeat bg-center "
            :style="{ backgroundImage: `url(${simhero})` }">
            <section
                class="relative h-[70vh] min-h-[500px] text-white flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 bg-secondary/90"></div>
                <div class="relative z-10 text-center px-4 max-w-3xl animate-in slide-in-from-bottom-8 duration-700">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Sim cards
                    </h1>
                    <p class="text-lg md:text-xl ">
                        Get a local SIM card delivered to you so you can enjoy fast internet during your trip.
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
                            Stay Connected During Your Trip
                        </h1>

                        <div class="space-y-4 text-[#666666] text-sm md:text-base leading-relaxed mb-8">
                            <p>
                                Stay connected throughout your trip in Egypt with a reliable local SIM card. Enjoy fast
                                internet to use maps, contact friends and family, and share your travel moments
                                online. Your SIM card can be delivered directly to the airport or your hotel for a
                                smooth and easy start to your journey.
                            </p>

                        </div>
                        <!-- Why Choose -->
                        <h2 class="text-xl md:text-2xl font-bold text-primary-foreground mb-4">
                            WHY CHOOSE OUR SIM CARDS
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
                            How It Works
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

                    </div>
                    <!-- RIGHT -->
                    <div class="lg:col-span-2">
                        <div class="bg-background rounded-2xl shadow-lg p-6 sticky top-8 text-primary-foreground">
                            <h3 class="text-xl font-bold text-primary-foreground mb-1">
                                Book Sim Card
                            </h3>
                            <p class="mb-5">
                                <span class="text-primary-danger font-bold text-xl">
                                    {{ selectedSimPackagePrice * form.cardsCount }} $
                                </span>
                                <span class="text-[#666666] text-sm"> </span>
                            </p>
                            <h4 class="text-primary-foreground font-bold mb-3">Customize Your Package</h4>

                            <div class="space-y-1.5 my-2">
                                <label
                                    class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground ml-1">
                                    SIM Package
                                </label>
                                <div class="relative">
                                    <select v-model="form.simPackage"
                                        class="w-full bg-white border border-border rounded-lg pl-4 pr-10 py-2.5 appearance-none focus:border-primary-danger focus:ring-2 focus:ring-primary-danger/10 outline-none text-sm font-medium transition-all">
                                        <option value="" disabled>Choose a plan</option>
                                        <option :value="item?.capacity" v-for="item in simPackges">
                                            {{
                                                item?.capacity }}</option>

                                    </select>
                                    <ChevronDown
                                        class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                                <p v-if="errors.simPackage" class="text-red-500 text-xs mt-1">
                                    {{ errors.simPackage }}
                                </p>
                            </div>
                            <label class="text-sm font-semibold mb-1 block">Number of SIM cards</label>
                            <div class="flex items-center gap-2 border rounded-lg px-4 py-3 mb-4">
                                <Users class="w-5 h-5" />
                                <input type="number" min="1" v-model="form.cardsCount"
                                    class="bg-transparent outline-none text-sm flex-1" />
                            </div>
                            <p v-if="errors.cardsCount" class="text-red-500 text-xs mt-1">
                                {{ errors.cardsCount }}
                            </p>
                            <h4 class="text-primary-foreground font-bold mb-3">Delivery Information</h4>
                            <label class="text-sm font-semibold mb-1 block text-uppercase">Delivery Location</label>
                            <div class="flex items-center gap-2 border rounded-lg px-4 py-3 mb-4">
                                <Hotel class="w-5 h-5" />
                                <input type="text" v-model="form.deliveryLocation"
                                    class="bg-transparent outline-none text-sm flex-1" />
                            </div>
                            <p v-if="errors.deliveryLocation" class="text-red-500 text-xs mt-1">
                                {{ errors.deliveryLocation }}
                            </p>
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

                            <!-- Room -->
                            <label class="text-sm font-semibold mb-1 block"> Room Number |
                                Flight Number </label>
                            <div class="flex items-center gap-2 border rounded-lg px-4 py-3 mb-4">
                                <Hotel class="w-5 h-5" />
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
                                <input v-model="form.fullName" type="text" placeholder="Enter your full name"
                                    class="bg-transparent outline-none text-sm flex-1" />
                            </div>
                            <p v-if="errors.fullName" class="text-red-500 text-xs mt-1">
                                {{ errors.fullName }}
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

                            <label class="text-sm font-semibold mb-1 mt-2 block">Special Request</label>
                            <textarea v-model="form.specialRequest"
                                class="w-full border rounded-lg px-4 py-3 mb-6 text-sm h-28 resize-none bg-transparent" />
                            <!-- Button -->
                            <button @click="submit" :disabled="loading"
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
import simhero from "@/assets/images/simhero.png";
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
    ChevronDown, Star

} from "lucide-vue-next"
import { useToast } from "@/composables/useToast";
import { useRoute, useRouter } from "vue-router";
const router = useRouter()
const { addToast } = useToast();
const faqs = ref()
const activeIndex = ref();
const toggle = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};


const simPackges = ref([
])
const reviews = ref([
])
const selectedSimPackagePrice = computed(() => {
    if (!form.simPackage || simPackges.value.length === 0) return 0;
    const selectedPackage = simPackges.value.find((item: any) => item.capacity === form.simPackage);
    return selectedPackage ? selectedPackage.price : 0;
})
const getTrips = async () => {

    try {
        const res2 = await getItems(`simcards`)
        simPackges.value = res2.data?.data.map((item: any) => ({
            capacity: item.capacity,
            price: item.price
        }))
        const res3 = await getItems(`simfaqs`);
        faqs.value = res3.data;
        const res4 = await getItems(`simcardreviews`);
        reviews.value = res4.data?.filter(
            (r: any) => r.status === 'accepted'
        )
    } catch (err) { }
}
onMounted(() => {
    getTrips()
})

const form = reactive({
    simPackage: "",
    cardsCount: 1,
    deliveryLocation: "",
    date: "",
    roomNumber: "",
    fullName: "",
    phone: "",
    price: 0,
    specialRequest: "",
});
const errors = reactive({
    simPackage: "",
    cardsCount: "",
    deliveryLocation: "",
    date: "",
    roomNumber: "",
    fullName: "",
    phone: "",
});
const loading = ref(false);
const validateForm = () => {
    let valid = true;

    // reset errors
    Object.keys(errors).forEach((key) => (errors[key] = ""));

    if (!form.simPackage) {
        errors.simPackage = "Sim package is required";
        valid = false;
    }

    if (!form.cardsCount || form.cardsCount < 1) {
        errors.cardsCount = "Cards count must be at least 1";
        valid = false;
    }

    if (!form.deliveryLocation) {
        errors.deliveryLocation = "Delivery location is required";
        valid = false;
    }

    if (!form.date) {
        errors.date = "Date is required";
        valid = false;
    }

    if (!form.roomNumber) {
        errors.roomNumber = "Room number / Flight number is required";
        valid = false;
    }

    if (!form.fullName) {
        errors.fullName = "Full name is required";
        valid = false;
    }

    if (!form.phone) {
        errors.phone = "Phone is required";
        valid = false;
    }

    return valid;
};

const submit = async () => {
    if (!validateForm()) {
        addToast("Please fix the errors in the form", "error");
        console.log("Validation failed:", { ...errors });
        return
    }
    ;

    loading.value = true;

    try {
        form.price = selectedSimPackagePrice.value * form.cardsCount;
        const payload = {
            ...form,
            roomNumber: Number(form.roomNumber), // 👈 match backend type
        };

        const res = await addItem("simreservation", payload);
        // success handling
        router.push(`/simservices/confirmations/${res.data?.id}`)
        // reset form (optional)
        Object.keys(form).forEach((key) => (form[key] = ""));
        form.cardsCount = 1;

    } catch (err) {
        console.error(err);
    } finally {
        loading.value = false;
    }
};
/* ---------- Static Data ---------- */
const whyChoose = [

    { icon: Hotel, text: "Instant Activation" },
    { icon: ShieldCheck, text: "Easy Communication" },
    { icon: CloudSnow, text: "Fast Connection & reliable 4G/5G coverage" },
    { icon: Clock3, text: "Instant Activation" },
];

const howToBook = [
    "Request your SIM online",
    "Choose delivery location",
    "Receive it at the airport or hotel",
    "Start using the internet instantly",
]
</script>