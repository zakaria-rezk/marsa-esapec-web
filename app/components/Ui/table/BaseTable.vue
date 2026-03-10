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
                <tbody class="divide-y divide-border">
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
            <section class="w-full text-center" dir="ltr">
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