<template>
    <div>
        <div class="bg-card border border-border rounded-xl overflow-hidden">
            <table class="w-full text-sm text-right">
                <thead class="bg-primary text-gray-800">
                    <tr>
                        <th v-for="head in cols" :key="head.key" class="px-6 py-3 font-semibold">
                            {{ head.value }}
                        </th>
                        <slot name="thead"></slot>
                    </tr>
                </thead>
                <tbody v-if="loading" class="divide-y divide-border">
                    <tr v-for="i in 5" :key="i" class="animate-pulse">
                        <td v-for="col in cols" :key="col.key" class="px-6 py-4">
                            <div class="h-4 bg-gray-200 rounded-md w-full"></div>
                        </td>
                    </tr>
                </tbody>
                <tbody class="divide-y divide-border" v-else>
                    <tr v-for="(row, index) in rows" :key="index" class="hover:bg-background transition">
                        <td v-for="col in cols" :key="col.key" class="px-6 py-4">
                            <span :class="row[col.key]?.class">
                                {{ row[col.key]?.value }}
                            </span>
                        </td>
                        <slot name="tdata"></slot>
                    </tr>
                </tbody>
            </table>
            <section v-if="loading" class="w-full text-center py-4 flex justify-center gap-2">
                <div v-for="i in 3" :key="i" class="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
            </section>
            <section class="w-full text-center" dir="ltr" v-else>
                <button class="px-3 py-1 border border-border rounded disabled:opacity-40">
                    السابق
                </button>
                <!-- <button v-if="pagination.current_page < middle" class="px-3 py-1  rounded disabled:opacity-40">
                    ...
                </button> -->
                <button class="px-3 py-1 rounded border border-border" v-for="(page, index) in pagination.total_pages"
                    :class="{ 'bg-primary': page === pagination.current_page }">{{ formatArabicNumber(page) }}</button>
                <!-- <button v-if="pagination.current_page > middle" class="px-3 py-1  rounded disabled:opacity-40">
                    ...
                </button> -->
                <button class="px-3 py-1 border border-border rounded disabled:opacity-40">التالي</button>
            </section>
        </div>
        <p v-if="!rows.length" class="text-center py-2 text-gray-600 text-sm">لا يوجد بيانات</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    cols: any[]
    rows: any[]
    loading: boolean
}
const props = defineProps<Props>()
const emits = defineEmits<{
    (e: 'pageChage', pageNumber: number): void
}>()
const pagination = {
    total_pages: 10,
    current_page: 2
}
const middle = computed(() => {
    return pagination.total_pages / 2
})
const chagePage = (page: number) => {
    emits('pageChage', page)
}
const formatArabicNumber = (num: number) => {
    return new Intl.NumberFormat('ar-EG').format(num)
}
</script>
<style scoped>
@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }

    100% {
        background-position: 200% 0;
    }
}

.shimmer-effect {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
}
</style>