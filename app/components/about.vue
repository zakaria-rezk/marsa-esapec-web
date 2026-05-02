<template>
  <section id="about-us" class="mt-10 overflow-hidden">
    <div class="bg-background">
      <!-- ABOUT SECTION -->
      <section class="py-16 md:py-24 px-4 md:px-8">
        <div class="max-w-7xl bg-gray-50/80 backdrop-blur-sm mx-auto rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-md">
          
          <!-- LEFT TEXT (Content) -->
          <div class="flex-1 text-[#666666]">
            <div class="space-y-6">
              <!-- Label -->
              <span class="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider animate-fade-in">
                Explore Our Story
              </span>

              <h2 class="text-3xl md:text-5xl font-extrabold text-[#082852] leading-tight">
                About Us
              </h2>

              <p class="text-sm md:text-lg leading-relaxed mb-4 max-w-xl text-slate-600">
                We are a local travel company based in <strong>Marsa Alam</strong>, helping international tourists
                discover the beauty of Egypt through carefully planned tours and packages.
              </p>

              <p class="text-muted-foreground text-sm md:text-base mb-8 max-w-xl">
                From transportation and tour guides to SIM cards and local support, we take care
                of every detail to make your trip smooth, comfortable, and unforgettable.
              </p>

              <!-- Animated List -->
              <ul class="space-y-4">
                <li v-for="(item, index) in features" :key="index"
                  class="flex items-center gap-4 text-foreground text-sm md:text-base font-medium group transition-all duration-300 hover:translate-x-2"
                  :style="{ transitionDelay: `${index * 100}ms` }">
                  <div class="bg-primary/20 p-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <CheckCircle class="w-5 h-5 text-primary group-hover:text-white flex-shrink-0" />
                  </div>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <!-- RIGHT IMAGE CONTAINER -->
          <div class="flex-1 relative flex justify-center lg:justify-end group">
            <!-- Decorative circle background -->
            <div class="absolute inset-0 bg-primary/5 rounded-full scale-110 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div class="relative overflow-hidden rounded-[2rem] shadow-2xl transition-transform duration-700 hover:scale-105">
              <img 
                :src="see" 
                alt="Exploring sea life" 
                class="w-full max-w-[500px] h-auto object-cover transition-transform duration-1000 group-hover:rotate-1"
              />
              
              <!-- Floating Experience Badge -->
              <div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl animate-float">
                <div class="flex items-center gap-3">
                  <span class="text-3xl font-bold text-primary">10+</span>
                  <div class="text-[10px] uppercase font-bold text-slate-500 leading-tight">
                    Years of <br /> Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import see from "@/assets/images/see-fish.png";

// Example features if not already passed as props
const features = [
  "Local Expert Guides",
  "24/7 Premium Support",
  "Tailor-made Itineraries",
  "Safe & Private Transport"
];
</script>

<style scoped>
/* Floating animation for the experience badge */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

/* Subtle fade in for the label */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

/* Smooth list item movement */
li:hover .bg-primary\/20 {
  transform: scale(1.1);
}
</style>