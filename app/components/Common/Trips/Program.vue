<template>
    <section class="p-4 space-y-6">

        <!-- Empty State -->
        <div v-if="!program?.length" class="text-center text-gray-500 py-10">
            لا يوجد برنامج
        </div>

        <!-- Days -->
        <div v-for="day in program" :key="day.id" class="bg-white border border-border rounded-xl p-5 shadow-sm">

            <!-- Day Title -->
            <h2 class="font-bold text-lg text-gray-800 mb-4">
                اليوم {{ day.dayNumber }}
            </h2>

            <!-- Timeline -->
            <div class="space-y-4">

                <!-- Morning -->
                <div>
                    <h3 class="font-medium text-sm text-primary mb-2">🌅 Morning</h3>
                    <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li v-for="(item, i) in day.morning" :key="i">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <!-- Afternoon -->
                <div>
                    <h3 class="font-medium text-sm text-orange-500 mb-2">☀️ Afternoon</h3>
                    <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li v-for="(item, i) in day.afternoon" :key="i">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <!-- Evening -->
                <div>
                    <h3 class="font-medium text-sm text-indigo-500 mb-2">🌙 Evening</h3>
                    <ul class="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li v-for="(item, i) in day.evening" :key="i">
                            {{ item }}
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
interface DayProgram {
    id: number
    dayNumber: number
    morning: string[]
    afternoon: string[]
    evening: string[]
}

const props = defineProps<{
    program: DayProgram[]
}>()

const { program } = toRefs(props)
</script>