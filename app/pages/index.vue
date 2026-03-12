<template>
    <UiBaseOverlay :open-modal="openModal">

        <UiBaseFormModal @close="openModal = false" title="الرحلات"> <template #form>
                <UiFormBaseInput v-for="input in FormInupts" :key="input.id" :id="input.id" :required="input.required"
                    :placeholder="input.palceholder" :disabled="false" v-model="formData[input.model]"
                    :type="input.type" :label="input.label" :error="input.error" />
                <UiFormBaseSelectInput v-model="id" :select-options="selectedOptions" label="اههرت الخىلح" id="78a"
                    selected-value="" placeholder="السم رحتلك البخري" />
                <UiBaseButton :loading="buttonLoading" @save="submit" />
                <p class="bg-red-500 w-full">{{ id }}</p>
            </template>

        </UiBaseFormModal>
    </UiBaseOverlay>
    <div class="bg-gray-50 py-10">
        <section id="table">
            <UiTableBaseTable :cols="cols" :rows="rows">
            </UiTableBaseTable>
        </section>
    </div>
</template>

<script setup lang="ts">
const id = ref()
const selectedOptions = ref<Record<string, string | number>[]>([{
    id: 1,
    value: 'elia'
}, {
    id: 5,
    value: 'zeko'
}, {
    id: 2,
    value: 'rezk'
},])
const buttonLoading = ref<boolean>(false)
const formData = ref<Record<string, string | null>>({
    tripName: null,
    tirpProgram: null,
    tripPrice: null
})
const errors = ref({
    tripName: null,
    tirpProgram: null,
    tripPrice: null
})
const FormInupts = ref([{
    id: 'trip_name',
    type: "string",
    model: 'tripName',
    disabled: false,
    palceholder: "ادخل اسم الرحلة",
    label: "اسم الرحلة",
    required: true,
    error: errors.value.tripName
},
{
    id: 'trip_program',
    type: "string",
    model: 'tirpProgram',
    disabled: false,
    palceholder: "ادخل برنامج الرحلة",
    label: "برنامج الرحلة",
    required: true,
    error: errors.value.tirpProgram
}])
const openModal = ref(true)
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
const submit = () => {
    console.log(formData.value)
    console.log(FormInupts.value)
}
</script>