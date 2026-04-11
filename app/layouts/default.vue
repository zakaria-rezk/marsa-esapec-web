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

            <NuxtLink to="/build-package" class="text-foreground hover:text-secondary transition-colors"
                active-class="text-secondary font-semibold border-b-2 border-secondary pb-1">
                Build Package
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
                class="md:hidden fixed z-50 bg-white top-14 mt-3 w-full bg-surface rounded-lg shadow-lg p-4">
                <div class="flex flex-col gap-3">
                    <a href="#" class="text-secondary font-semibold border-b-2 border-transparent pb-1">Home</a>
                    <a href="#" class="text-foreground hover:text-secondary transition-colors">Trips</a>
                    <a href="#" class="text-foreground hover:text-secondary transition-colors">Packages</a>
                    <a href="#" class="text-foreground hover:text-secondary transition-colors">Build Package</a>
                    <button
                        class="flex items-center gap-1 text-foreground hover:text-secondary transition-colors justify-between">
                        <span>Services</span>
                        <ChevronDown class="w-4 h-4" />
                    </button>

                    <div class="flex items-center gap-3 pt-2 border-t border-muted-foreground/20">
                        <button class="flex items-center gap-1 text-foreground">
                            <Globe class="w-4 h-4" />
                            EN
                            <ChevronDown class="w-3 h-3" />
                        </button>

                        <button
                            class="ml-auto border border-foreground rounded-full px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors">
                            Get Started
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
                    <li v-for="l in quickLinks" :key="l">
                        <a href="#" class="text-primary-foreground text-sm hover:text-foreground transition">
                            {{ l }}
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Services -->
            <div>
                <h4 class="font-semibold text-foreground text-sm mb-4">Services</h4>
                <ul class="space-y-2">
                    <li v-for="l in services" :key="l">
                        <a href="#" class="text-primary-foreground text-sm hover:text-foreground transition">
                            {{ l }}
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Support -->
            <div>
                <h4 class="font-semibold text-primary-foreground text-sm mb-4">Support</h4>
                <ul class="space-y-2">
                    <li v-for="l in support" :key="l">
                        <a href="#" class="text-primary-foreground text-sm hover:text-foreground transition">
                            {{ l }}
                        </a>
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
                        <Phone class="w-4 h-4" /> 01055330883
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
import { ref } from 'vue'
const open = ref(false);
const quickLinks = ["Home", "Trips", "Services", "Package", "Plan Your Trip", "Contact Us"];
const services = ["Taxi Transfer", "Sim Card"];
const support = ["FAQ", "Reviews", "Contact Us"];
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
