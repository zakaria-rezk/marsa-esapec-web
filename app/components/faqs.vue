<template>
  <section class="py-16 md:py-24 px-4">
    <div class="max-w-3xl mx-auto">
      
      <h2 class="text-2xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
        Frequently Asked Question
      </h2>

      <div class="space-y-4">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="border border-border rounded-xl transition-all duration-300"
        >
          <!-- Question -->
          <div
            @click="toggle(i)"
            class="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-muted/50"
          >
            <span class="text-foreground text-sm md:text-base font-medium">
              {{ faq.question }}
            </span>

            <ChevronDown
              class="w-5 h-5 text-muted-foreground transition-transform duration-300"
              :class="{ 'rotate-180': activeIndex === i }"
            />
          </div>

          <!-- Answer -->
          <div
            v-show="activeIndex === i"
            class="px-6 pb-4 text-muted-foreground text-sm leading-relaxed"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
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