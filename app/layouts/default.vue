<template>
    <nav class="flex items-center justify-between px-4 sm:px-8 lg:px-24 py-4">
        <!-- Logo -->
        <NuxtLink to="/"
            class="w-32 h-10 bg-muted rounded flex items-center justify-center text-muted-foreground text-sm">
            <Logo />
        </NuxtLink>

        <!-- Mobile: Hamburger -->
        <button @click="open = !open"
            class="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
            aria-label="Toggle menu" :aria-expanded="open">
            <svg v-if="!open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-8">
            <NuxtLink to="/" class="text-foreground hover:text-secondary transition-colors"
                exact-active-class="text-secondary font-semibold border-b-2 border-secondary pb-1">
                Home
            </NuxtLink>

            <NuxtLink to="/trips" class="text-foreground hover:text-secondary transition-colors"
                active-class="text-secondary font-semibold border-b-2 border-secondary pb-1">
                Trips
            </NuxtLink>

            <NuxtLink to="/packages" class="text-foreground hover:text-secondary transition-colors"
                active-class="text-secondary font-semibold border-b-2 border-secondary pb-1">
                Packages
            </NuxtLink>

            <NuxtLink to="/buildpackage" class="text-foreground hover:text-secondary transition-colors"
                active-class="text-secondary font-semibold border-b-2 border-secondary pb-1">
                Build Package
            </NuxtLink>
            <NuxtLink to="/taxitransfer" class="text-foreground hover:text-secondary transition-colors"
                active-class="text-secondary font-semibold border-b-2 border-secondary pb-1">
                Taxi Transfers
            </NuxtLink>
            <NuxtLink to="/simservices" class="text-foreground hover:text-secondary transition-colors"
                active-class="text-secondary font-semibold border-b-2 border-secondary pb-1">
                Tourist Internet SIM
            </NuxtLink>
        </div>

        <!-- Desktop Right -->
        <div class="hidden md:flex items-center gap-4">
            <button class="flex items-center gap-1 text-foreground">
                <Globe class="w-4 h-4" />
                EN
                <ChevronDown class="w-3 h-3" />
            </button>

            <button
                class="border border-foreground rounded-full px-5 py-2 text-sm font-semibold text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors">
                Get Started
            </button>
        </div>

        <!-- Mobile Menu (slide down) -->
  <transition name="slide-fade">
    <div v-show="open"
      class="md:hidden fixed z-50 bg-white top-14 mt-3 w-[calc(100%-2rem)] left-4 bg-surface rounded-xl shadow-xl p-5 border border-slate-100"
    >
      <div class="flex flex-col gap-4">
        <!-- Navigation Links with NuxtLink Logic -->
        <NuxtLink 
          to="/" 
          class="text-foreground transition-colors py-1"
          exact-active-class="text-secondary font-bold border-b-2 border-secondary self-start"
          @click="open = false"
        >
          Home
        </NuxtLink>

        <NuxtLink 
          to="/trips" 
          class="text-foreground transition-colors py-1"
          active-class="text-secondary font-bold border-b-2 border-secondary self-start"
          @click="open = false"
        >
          Trips
        </NuxtLink>

        <NuxtLink 
          to="/packages" 
          class="text-foreground transition-colors py-1"
          active-class="text-secondary font-bold border-b-2 border-secondary self-start"
          @click="open = false"
        >
          Packages
        </NuxtLink>

        <NuxtLink 
          to="/buildpackage" 
          class="text-foreground transition-colors py-1"
          active-class="text-secondary font-bold border-b-2 border-secondary self-start"
          @click="open = false"
        >
          Build Package
        </NuxtLink>

        <!-- Services section flattened to match desktop logic -->
        <NuxtLink 
          to="/taxitransfer" 
          class="text-foreground transition-colors py-1"
          active-class="text-secondary font-bold border-b-2 border-secondary self-start"
          @click="open = false"
        >
          Taxi Transfers
        </NuxtLink>

        <NuxtLink 
          to="/simservices" 
          class="text-foreground transition-colors py-1"
          active-class="text-secondary font-bold border-b-2 border-secondary self-start"
          @click="open = false"
        >
          Tourist Internet SIM
        </NuxtLink>

        <!-- Bottom Actions -->
        <div class="flex items-center gap-3 pt-4 mt-2 border-t border-slate-100">
          <button class="flex items-center gap-1 text-foreground font-medium">
            <Globe class="w-4 h-4" />
            EN
            <ChevronDown class="w-3 h-3 text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  </transition>
    </nav>
    <slot></slot>
    <!-- Footer -->
    <footer class="bg-background border-t border-border py-12 mt-10 px-4">
        <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">

            <!-- Brand -->
            <div class="col-span-2 md:col-span-1 text-primary-foreground">
                <div
                    class="w-32 h-10 bg-muted rounded flex items-center justify-center text-muted-foreground text-sm mb-4">
                    <Logo />
                </div>

                <p class=" text-xs leading-relaxed mb-4">
                    Your trusted travel partner for unforgettable experiences in Marsa Alam and beyond.
                    Explore, customize, and send your booking request easily — we'll handle the rest.
                </p>

                <div class="flex gap-3">
                    <!-- Facebook -->
                    <a href="https://www.facebook.com/share/1BtV7JnRvn/" target="_blank"
                        class="w-8 h-8 rounded-full border border-border flex items-center justify-center cursor-pointer hover:bg-muted">
                        <Facebook class="w-4 h-4" />
                    </a>

                    <!-- Instagram -->
                    <a href="https://www.instagram.com/marsaescapetours?igsh=MTJlcmczMmhpdGNoaA==" target="_blank"
                        class="w-8 h-8 rounded-full border border-border flex items-center justify-center cursor-pointer hover:bg-muted">
                        <Instagram class="w-4 h-4" />
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="font-semibold text-primary-foreground text-sm mb-4">Quick Links</h4>
                <ul class="space-y-2">
                    <li v-for="l in quickLinks" :key="l.name">
                        <NuxtLink :to="l.path" class="text-primary-foreground text-sm hover:text-foreground transition">
                            {{ l.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-foreground text-sm mb-4">Services</h4>
                <ul class="space-y-2">
                    <li v-for="l in services" :key="l.name">
                        <NuxtLink :to="l.path" class="text-primary-foreground text-sm hover:text-foreground transition">
                            {{ l.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>


            <a href="https://wa.me/201055330883" target="_blank"
                class="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition">
                <whatsapp class="w-6 h-6 text-white" />
            </a>

            <!-- Support -->
            <div>
                <h4 class="font-semibold text-primary-foreground text-sm mb-4">Support</h4>
                <ul class="space-y-2">
                    <li v-for="l in support" :key="l.name">
                        <NuxtLink :to="l.path" class="text-primary-foreground text-sm hover:text-foreground transition">
                            {{ l.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <!-- Contact -->
            <div>
                <h4 class="font-semibold text-primary-foreground text-sm mb-4">Contact</h4>
                <ul class="space-y-3">
                    <li class="flex items-center gap-2 text-primary-foreground text-sm">
                        <MapPin class="w-4 h-4" /> Marsa Alam, Egypt
                    </li>
                    <li class="flex items-center gap-2 text-primary-foreground text-sm">
                        <Phone class="w-4 h-4" /> <a href="https://wa.me/201055330883" target="_blank">+20 105 533
                            0883</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="max-w-6xl mx-auto mt-10 pt-6 border-t border-border text-center">
            <p class="text-primary-foreground text-sm">© 2026 Marsa Escape Tours</p>
        </div>
    </footer>
</template>

<script setup>
import Logo from "@/assets/svgs/marsaescapelogo.svg";
import Facebook from "@/assets/svgs/facebook.svg"
import Instagram from "@/assets/svgs/instagram.svg"
import whatsapp from "@/assets/svgs/whatsapp.svg"
import { ref } from 'vue'
const open = ref(false);
const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Trips", path: "/trips" },
    { name: "Services", path: "/#services" },
    { name: "Package", path: "/packages" },
    { name: "Plan Your Trip", path: "/buildpackage" },

];

const services = [
    { name: "Taxi Transfer", path: "/taxitransfer" },
    { name: "Sim Card", path: "/simservices" },
];
const support = [
    { name: "FAQ", path: "/#faqs" },
    { name: "Reviews", path: "/#reviews" },

];

</script>

<style>
/* Optional simple transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 200ms ease;
}

.slide-fade-enter-from {
    opacity: 0;
    transform: translateY(-6px);
}

.slide-fade-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.slide-fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}
</style>
