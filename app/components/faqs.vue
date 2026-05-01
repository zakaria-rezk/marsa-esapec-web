<template>
  <section class="py-16 md:py-24 px-4" id="faqs">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
        Frequently Asked Question
      </h2>
      <div class="space-y-4">
        <div v-for="(faq, i) in data" :key="i" class="border border-[#999999] rounded-xl transition-all duration-300">
          <!-- Question -->
          <div @click="toggle(i)" class="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-muted/50">
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
</template>

<script setup>
import { ref } from "vue";
import { ChevronDown } from "lucide-vue-next";
import { getItems } from "~/services/trips";
const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const data = ref()
onMounted(() => {
  getTrips()
})

const getTrips = async () => {
  try {
    const res = await getItems('faqs')

    data.value = res.data
    console.log("data.value")


  } catch (err) { }
}
</script>