<template>
    <section>
        <div class="flex justify-end p-4">
            <button
                class="flex items-center gap-2 bg-primary font-medium hover:bg-primary/90 text-gray-500 px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition duration-200">
                اضافة رحلة
            </button>
        </div>
        <section id="render_hidden_details">
            <UiBaseOverlay :open-modal="openModal">
                <UiBaseFormModal @close="openModal = false" title="الرحلات">
                    <template #form>
                        <component :is="component" v-bind="componentProps" @deleteImage="handleRemove"
                            @addImage="handleAddImages">
                        </component>
                    </template>
                </UiBaseFormModal>
            </UiBaseOverlay>
        </section>
        <div class="bg-gray-50 py-10">
            <section id="table">
                <UiTableBaseTable :cols="cols" :rows="rows" :loading="pending">
                    <template #reviews="{ row }"><button class="btn" @click="openOverlay(row.id.value, 'reviews')">
                            <font-awesome-icon :icon="faEye" />
                        </button></template> <template #days="{ row }"><button class="btn"
                            @click="openOverlay(row.id.value, 'program')">
                            <font-awesome-icon :icon="faEye" />
                        </button></template>
                    <template #package="{ row }"><button class="btn" @click="openOverlay(row.id.value, 'package')">
                            <font-awesome-icon :icon="faEye" />
                        </button></template> <template #images="{ row }"><button class="btn"
                            @click="openOverlay(row.id.value, 'images')">
                            <font-awesome-icon :icon="faEye" />
                        </button></template>
                </UiTableBaseTable>
            </section>
        </div>
    </section>
</template>
<script lang="ts" setup>
import {
    faEye
} from '@fortawesome/free-solid-svg-icons'
import { deleteImage, addImage } from '~/services/trips';
import { useToast } from '@/composables/useToast';
const { addToast } = useToast()
const openModal = ref(false);
const selectedTripId = ref<number>()//fetch trips data
const { data, pending, refresh } = useAsyncData('trips', async () => {
    const { $api } = useNuxtApp()
    return await $api.get('/trip')
});
const cols = ref([{
    key: 'name',
    value: 'الاسم',
}, {
    key: 'type',
    value: 'نوع الرحلة',
}, {
    key: 'price',
    value: 'السعر',
}, {
    key: 'reviews',
    value: 'التقيمات',
    slot: "reviews"
}, {
    key: 'days',
    value: 'البرنامج',
    slot: "days"
}, {
    key: 'package',
    value: 'نظرة عامة',
    slot: "package"
}, {
    key: 'images',
    value: 'الصور',
    slot: "images"
},
])
const rows = computed(() => {
    console.log("computed before")
    if (!data.value) return []; console.log("computed after return")
    return data.value.data.map((T: any) => ({
        id: { value: T.id, class: '' },
        name: { value: T.name, class: '' },
        type: { value: T.tripType.type, class: 'bg-blue-100 text-blue-600 px-2 py-1 rounded' },
        price: { value: T.price, class: '' },
        reviews: { value: T.reviews, class: '' },
        days: { value: T.days, class: '' },
        included: { value: T.included, class: '' },
        excluded: { value: T.excluded, class: '' },
        images: { value: T.images, class: '' },
        places: { value: T.places, class: '' },
        overview: { value: T.overview, class: '' }

    }))
})
type component = 'reviews' | 'package' | 'images' | 'program' | 'places'
const modalType = ref<component>('program')
const component = computed(() => {
    switch (modalType.value) {
        case 'reviews': { return resolveComponent('CommonTripsReviews') }
        case 'program': { return resolveComponent('CommonTripsProgram') }
        case 'package': { return resolveComponent('CommonTripsPackage') }
        case 'images': { return resolveComponent('CommonTripsImages') }
    }
}
)
const componentProps = computed(() => {

    const rowData = rows.value.find((r: any) => {
        return r.id.value === selectedTripId.value
    })
    switch (modalType.value) {
        case 'reviews':
            return { reviews: rowData?.reviews.value }
        case 'program':
            return { program: rowData?.days.value }
        case 'package':
            return {
                included: rowData?.included.value,
                excluded: rowData?.excluded.value,
                places: rowData?.places.value,
                overview: rowData?.overview.value,
            }
        case 'images':
            return {
                id: rowData.id.value,
                images: rowData?.images.value,

            }
    }
})
const openOverlay = (id: number, type: component) => {
    modalType.value = type
    selectedTripId.value = id
    openModal.value = true
}
const handleRemove = async (id: number) => {
    if (!data.value) return
    const tripIndex = data.value.data.findIndex(
        (trip: any) => trip.id === selectedTripId.value
    )
    const backupImages = [...data.value.data[tripIndex].images]
    if (tripIndex === -1) return
    data.value.data[tripIndex].images =
        data.value.data[tripIndex].images.filter(
            (img: any) => img.id !== id
        )
    data.value = { ...data.value, ...data.value?.data }
    try {
        const res = await deleteImage(id)
        addToast('تم حذف الصورة بنجاح', 'success')
    } catch (err) {
        addToast(' حدث خطاء اثناء حذف الصورة', 'error')
        if (data.value) {
            data.value.data[tripIndex].images = backupImages
            data.value = {
                ...data.value, ...data.value?.data
            }
        }
    }
}
const handleAddImages = async (FormData: Event) => {
    try {
        const res = await addImage(selectedTripId.value as number, FormData)
        addToast('نم اضافة الصورة بنجاح', 'success')
        refresh()
    } catch (err) {

    }
}
</script>