<template>
    <section>
        <div class="flex justify-end p-4">
            <button @click="openModal = true; modalType = 'add'" class=" flex items-center gap-2 bg-primary font-medium hover:bg-primary/90 text-gray-500 px-5 py-2.5
                rounded-xl shadow-sm hover:shadow-md transition duration-200">
                اضافة حجز جديد
            </button>
        </div>
        <section id="render_hidden_details">
            <UiBaseOverlay :open-modal="openModal">
                <UiBaseFormModal @close="openModal = false" title="حجوزات الرحلات">
                    <template #form v-if="modalType == 'add'">
                        <template v-for="input in FormInupts" :key="input.id">
                            <UiFormBaseInput v-if="input.type != 'select'" :id="input.id" :required="input.required"
                                :placeholder="input.palceholder" :disabled="false" v-model="formData[input.model]"
                                :type="input.type" :label="input.label" :error="errors[input.error]" />
                            <UiFormBaseSelectInput v-else v-model="formData[input.model]"
                                :select-options="selectedOptions" :label="input.label" :required="input.required"
                                :placeholder="input.palceholder" :disabled="false" id="78a"
                                :error="errors[input.error]" />
                        </template>
                        <UiBaseButton :loading="buttonLoading" @save="submit" />
                    </template> <template #view v-else>
                        <CommonTripsReservationView :details="detailsComponetPorps" @change-status="changeStatus" />
                    </template>
                </UiBaseFormModal>
            </UiBaseOverlay>
        </section>
        <div class="bg-gray-50 py-10">
            <section id="table">
                <UiTableBaseTable :cols="cols" :rows="rows" :loading="pending"><template #details="{ row }"><button
                            class="btn mx-3" @click="openOverly(row.id.value, 'view')">
                            <font-awesome-icon :icon="faEye" />
                        </button></template><template #actions="{ row }"><button class="btn mx-3"
                            @click="removeTripType(row.id.value)">
                            <font-awesome-icon :icon="faTrash" />
                        </button></template>
                </UiTableBaseTable>
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import { edtiReservationStatus, deleteResarvation, getTrips, addResvartion } from "@/services/trips";
import { useValidation } from '@/composables/useValidation';
import {
    faPen, faTrash, faEye
} from '@fortawesome/free-solid-svg-icons'
import { useToast } from "@/composables/useToast";
const { addToast } = useToast();
const selectedOptions = ref<Record<string, string | number>[]>([{}])
const { data, pending, refresh } = useAsyncData('reservations', async () => {
    const { $api } = useNuxtApp()
    return await $api.get('/reservations')
});
const formData = ref<Record<string, string | null>>({
    name: null,
    phone: null,
    date: null,
    hotel: null,
    roomNumber: null,
    specialRequest: null,
    tripId: null,

})
const errors = ref<Record<string, string | null>>({
    name: null,
    phone: null,
    date: null,
    hotel: null,
    roomNumber: null,
    specialRequest: null,
    tripId: null,
})
const modalType = ref<"add" | "view">("add")
const selectedId = ref<number | null>(null)
const { validateRequiredInput, resetValues } = useValidation(formData.value, errors.value, ['name', 'phone', 'date', 'tripId'])
const buttonLoading = ref<boolean>(false)
const getTripsTypes = async () => {
    try {
        const res = await getTrips()
        console.log(res.data)
        selectedOptions.value = res.data.map((t: any) => ({
            id: t.id,
            value: t.name
        }))
    } catch (err) {

    }
}
getTripsTypes()
const FormInupts = ref([{
    id: 'trip',
    type: "select",
    model: 'tripId',
    selectOptions: selectedOptions.value,
    disabled: false,
    palceholder: "اختر الرحلة",
    label: "اختر الرحلة",
    required: true,
    error: 'name'
}, {
    id: 'name',
    type: "name",
    model: 'name',
    disabled: false,
    palceholder: "ادخل  اسم العميل",
    label: "اسم العميل",
    required: true,
    error: 'name'
}, {
    id: 'phone',
    type: "string",
    model: 'phone',
    disabled: false,
    palceholder: "ادخل  رقم هاتف العميل",
    label: "رقم  هاتف العميل",
    required: true,
    error: 'phone'
}, {
    id: 'peopleCount',
    type: "number",
    model: 'peopleCount',
    disabled: false,
    palceholder: "ادخل عدد الاشخاص",
    label: "عدد الاشخاص",
    required: true,
    error: 'peopleCount'
}, {
    id: 'date',
    type: "date",
    model: 'date',
    disabled: false,
    palceholder: "",
    label: " التاريخ",
    required: true,
    error: 'date'
}, {
    id: 'hotel',
    type: "string",
    model: 'hotel',
    disabled: false,
    palceholder: "ادخل  اسم الفندق",
    label: "اسم الفندق",
    required: true,
    error: 'hotel'
}, {
    id: 'roomNumber',
    type: "number",
    model: 'roomNumber',
    disabled: false,
    palceholder: "ادخل  رقم الغرفة",
    label: "رقم الغرفة",
    required: true,
    error: 'roomNumber'
}, {
    id: 'specialRequest',
    type: "textarea",
    model: 'specialRequest',
    disabled: false,
    palceholder: "اكتب هنا   ",
    label: "ملاحظات اضافية ",
    required: true,
    error: 'specialRequest'
},])
const openModal = ref(false)
const cols = ref([{
    key: 'cutomerName',
    value: ' اسم العميل',
}, {
    key: 'tripName',
    value: 'الرحلة',
}, {
    key: 'tripType',
    value: 'نوع الرحلة',
}, {
    key: 'date',
    value: ' تاريخ الرحلة',
}, {
    key: 'details',
    value: 'التفاصيل',
    slot: "details"
}, {
    key: 'actions',
    value: 'الاجراءات',
    slot: "actions"
}
])
const rows = computed(() => {
    if (!data.value) return []; console.log("computed after return")
    return data.value.data.map((T: any) => ({
        id: { value: T.id, class: '' },
        cutomerName: { value: T.name, class: '' },
        tripName: { value: T.trip.name, class: '' },
        tripType: { value: T.trip.tripType.type, class: '' },
        hotel: { value: T.hotel.name, class: '' },
        roomNumber: { value: T.roomNumber, class: '' },
        date: { value: T.date, class: '' },
        specialRequest: { value: T.specialRequest, class: '' },
        status: { value: T.status, class: '' },
        peopoleCount: { value: T.peopoleCount, class: '' },
        phone: { value: T.phone, class: '' },
    }))
})
const submit = async () => {
    const valid = validateRequiredInput()
    buttonLoading.value = true
    if (!valid) return; buttonLoading.value = true
    try {
        const res = await addResvartion(formData.value)
        addToast("تم انشاء الحجز بنجاح ", "success")
        resetValues()
        refresh()
        openModal.value = false
    } catch (error) {
        addToast("حدث خطأ اثناء انشاء الحجز  ", "error")
        console.log(error)
    } finally {
        buttonLoading.value = false
    }
}

const openOverly = (id: number, type: string) => {
    modalType.value = type as "add" | "view"
    openModal.value = true;
    selectedId.value = id
    formData.value.type = data.value?.data.find((T: any) => T.id === id).type
}
const detailsComponetPorps = computed(() => {
    if (!data.value) return {};
    const reservation = data.value.data.find((T: any) => T.id === selectedId.value)
    console.log("reservation", reservation)
    return {
        customerName: reservation.name,
        tripName: reservation.trip.name,
        tripType: reservation.trip.tripType.type,
        hotel: reservation.hotel,
        roomNumber: reservation.roomNumber,
        date: reservation.date,
        specialRequest: reservation.specialRequest,
        status: reservation.status,
        peopleCount: reservation.peopleCount,
        phone: reservation.phone,

    }
})
const changeStatus = async (status: string) => {
    console.log("changeStatus", selectedId.value, status)
    const payload = {

        status: status
    }
    try {
        await edtiReservationStatus(selectedId.value as number, payload)
        addToast("تعير حالة الحجز بنجاح", "success")
        refresh()
    } catch (error) {
        addToast("حدث خطأ اثناء تعير حالة الحجز ", "error")
        console.log(error)
    }
}
const removeTripType = async (id: number) => {

    try {
        await deleteResarvation(id)
        addToast("تم حذف الحجز بنجاح", "success")
        refresh()
    } catch (error) {
        addToast("حدث خطأ اثناء حذف الحجز ", "error")
        console.log(error)
    }
}
</script>