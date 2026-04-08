<template>
    <section>
        <div class="bg-gray-50 py-10">
            <section id="table">
                <UiTableBaseTable :cols="cols" :rows="rows" :loading="pending" />
            </section>
        </div>
    </section>
</template>
<script lang="ts" setup>
const cols = ref([{
    key: 'name',
    value: 'name'
},
]);
const { data, pending } = useAsyncData('users', async () => {
    const { $api } = useNuxtApp()
    return await $api.get('/users')
},{
    default: () => ({ data: [] }),
    server: false // 👈 VERY important for hydration mismatch
});
const rows = computed(() => {
    if (!data.value) return []
    return data.value.data.map((user: any) => ({
        name: { value: user.name, class: '' }
    }))
})
</script>