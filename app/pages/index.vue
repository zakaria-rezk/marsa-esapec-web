<template>
  
    <div class="bg-gray-50 py-10">
        <section id="table">
            <UiTableBaseTable :cols="cols" :rows="rows">

            </UiTableBaseTable>



        </section>
    </div>
</template>

<script setup lang="ts">
const cols = ref([{
    key: 'name',
    value: 'name'
},
{
    key: 'role',
    value: 'role'
}, {
    key: 'dream',
    value: 'dream'
}
])
const rows = ref([{
    name: { value: 'elia', class: "" },

}, { name: { value: 'rezk' } }])
</script>