<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { getImageUrl } from '@/utils/image'
const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const diff = touchStartX.value - touchEndX.value

  // sensitivity threshold
  if (Math.abs(diff) < 50) return

  if (diff > 0) {
    // swipe left → next
    goNext()
  } else {
    // swipe right → prev
    goPrev()
  }
}
/* ---------- Types ---------- */
interface ImageItem {
  id: number
  url: string
}

interface Props {
  title: string
  images: ImageItem[]
}

/* ---------- Props ---------- */
const props = defineProps<Props>()

/* ---------- Normalize Images ---------- */
const normalizedImages = computed(() =>
  (props.images || []).map(img => ({
    id: img.id,
    url: getImageUrl(img.url)
  }))
)

/* ---------- State ---------- */
const activeIndex = ref(0)
const isPreviewOpen = ref(false)
const previewIndex = ref(0)

/* ---------- Helpers ---------- */
const total = computed(() => normalizedImages.value.length)

/* ---------- Slider ---------- */
const goPrev = () => {
  if (!total.value) return
  activeIndex.value =
    activeIndex.value === 0 ? total.value - 1 : activeIndex.value - 1
}

const goNext = () => {
  if (!total.value) return
  activeIndex.value =
    activeIndex.value === total.value - 1 ? 0 : activeIndex.value + 1
}

/* ---------- Preview ---------- */
const openPreview = (index: number) => {
  previewIndex.value = index
  isPreviewOpen.value = true
}

const closePreview = () => {
  isPreviewOpen.value = false
}

const nextPreview = () => {
  if (!total.value) return
  previewIndex.value =
    previewIndex.value === total.value - 1 ? 0 : previewIndex.value + 1
}

const prevPreview = () => {
  if (!total.value) return
  previewIndex.value =
    previewIndex.value === 0 ? total.value - 1 : previewIndex.value - 1
}
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-8">
    <!-- Title -->
    <h1 class="text-2xl text-primary-foreground py-2 md:text-3xl font-bold mb-2">
      {{ title }}
    </h1>

    <!-- 📱 Mobile -->
    <div class="md:hidden">
      <div class="relative rounded-xl overflow-hidden h-[300px]" @touchstart="handleTouchStart"
        @touchend="handleTouchEnd">
        <img :src="normalizedImages[activeIndex]?.url" class="w-full h-full object-cover cursor-pointer"
          @click="openPreview(activeIndex)" />

        <!-- Buttons -->
        <button @click="goPrev"
          class="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow">
          <ChevronLeft class="w-5 h-5" />
        </button>

        <button @click="goNext"
          class="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow">
          <ChevronRight class="w-5 h-5" />
        </button>

        <!-- Counter -->
        <div class="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          {{ activeIndex + 1 }} / {{ total }}
        </div>
      </div>

      <!-- Thumbnails -->
      <div class="flex gap-2 mt-3 overflow-x-auto">
        <button v-for="(img, i) in normalizedImages" :key="img.id" @click="activeIndex = i"
          class="w-20 h-16 rounded-lg overflow-hidden border-2"
          :class="i === activeIndex ? 'border-primary' : 'border-transparent'">
          <img :src="img.url" class="w-full h-full object-cover cursor-pointer" @click.stop="openPreview(i)" />
        </button>
      </div>
    </div>

    <!-- 💻 Desktop -->
    <div class="hidden md:block" v-if="total">
      <div class="grid gap-3 h-[500px]" :class="{
        'grid-cols-1': total === 1,
        'grid-cols-2': total === 2,
        'grid-cols-3': total === 3,
        'grid-cols-4 grid-rows-2': total >= 4
      }">

        <!-- 1 image -->
        <div v-if="total === 1" class="rounded-xl overflow-hidden">
          <img :src="normalizedImages[0]?.url" class="w-full h-full object-cover cursor-pointer"
            @click="openPreview(0)" />
        </div>

        <!-- 2 images -->
        <template v-else-if="total === 2">
          <div v-for="(img, i) in normalizedImages" :key="img.id" class="rounded-xl overflow-hidden">
            <img :src="img.url" class="w-full h-full object-cover cursor-pointer" @click="openPreview(i)" />
          </div>
        </template>

        <!-- 3 images -->
        <template v-else-if="total === 3">
          <div class="col-span-2 row-span-2 rounded-xl overflow-hidden">
            <img :src="normalizedImages[0]?.url" class="w-full h-full object-cover cursor-pointer"
              @click="openPreview(0)" />
          </div>

          <div v-for="(img, i) in normalizedImages.slice(1)" :key="img.id" class="rounded-xl overflow-hidden">
            <img :src="img.url" class="w-full h-full object-cover cursor-pointer" @click="openPreview(i + 1)" />
          </div>
        </template>

        <!-- 4+ images (dynamic professional layout) -->
        <template v-else>
          <!-- Main big image -->
          <div class="col-span-2 row-span-2 rounded-xl overflow-hidden">
            <img :src="normalizedImages[0]?.url" class="w-full h-full object-cover cursor-pointer"
              @click="openPreview(0)" />
          </div>

          <!-- Next 4 images -->
          <div v-for="(img, i) in normalizedImages.slice(1, 5)" :key="img.id" class="rounded-xl overflow-hidden">
            <img :src="img.url" class="w-full h-full object-cover cursor-pointer" @click="openPreview(i + 1)" />
          </div>
        </template>
      </div>

      <!-- Extra images row (ONLY if more than 5) -->
      <div v-if="total > 5" class="grid grid-cols-4 gap-3 mt-3 h-[150px]">
        <div v-for="(img, i) in normalizedImages.slice(5, 8)" :key="img.id" class="rounded-xl overflow-hidden">
          <img :src="img.url" class="w-full h-full object-cover cursor-pointer" @click="openPreview(i + 5)" />
        </div>

        <!-- +More -->
        <div v-if="total > 8" class="relative rounded-xl overflow-hidden cursor-pointer" @click="openPreview(8)">
          <img :src="normalizedImages[8]?.url" class="w-full h-full object-cover" />

          <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span class="text-white font-bold text-lg">
              +{{ total - 8 }} Photos
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 🔍 Preview Modal -->
  <Transition name="fade">
    <div v-if="isPreviewOpen" @touchstart="handleTouchStart" @touchend="handleTouchEnd"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" @click.self="closePreview">
      <!-- Close Button -->
      <button @click="closePreview" class="absolute top-5 right-5 text-white text-2xl z-50">
        ✕
      </button>

      <!-- Prev -->
      <button @click="prevPreview" class="absolute left-5 text-white z-50">
        <ChevronLeft class="w-10 h-10" />
      </button>

      <!-- Next -->
      <button @click="nextPreview" class="absolute right-5 text-white z-50">
        <ChevronRight class="w-10 h-10" />
      </button>

      <!-- Image with zoom animation -->
      <Transition name="zoom" mode="out-in">
        <img :key="previewIndex" :src="normalizedImages[previewIndex]?.url"
          class="max-w-[90%] max-h-[80%] object-contain" />
      </Transition>
    </div>
  </Transition>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.zoom-enter-active {
  transition: all 0.25s ease;
}

.zoom-enter-from {
  opacity: 0;
  transform: scale(0.85);
}

.zoom-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>