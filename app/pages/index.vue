<template>
    <UiBaseOverlay :open-modal="openModal">
        <UiBaseFormModal @close="openModal = false" title="الرحلات"> <template #form>
                <UiFormBaseInput v-for="input in FormInupts" :key="input.id" :id="input.id" :required="input.required"
                    :placeholder="input.palceholder" :disabled="false" v-model="formData[input.model]"
                    :type="input.type" :label="input.label" :error="input.error" />
                <UiBaseButton :loading="buttonLoading" @save="submit" />
            </template></UiBaseFormModal>
    </UiBaseOverlay>
    <div class="bg-gray-50 py-10">
        <section id="table">
            <UiTableBaseTable :cols="cols" :rows="rows">
            </UiTableBaseTable>
        </section>
    </div>
</template>

<script setup lang="ts">

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