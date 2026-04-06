<template>
    <section id="layout" class="flex felx-row gap-4 my-4">
        <aside class=" w-10 sm:w-72  bg-primary relative right-0 top-0 py-6 h-screen rounded-3xl">
            <div class="flex justify-center">
                <Logo class="w-32 m-auto" />
            </div>
            <section id="sidebarditem" class=" my-2 mx-1" v-for="i in items">
                <NuxtLink :to="i.to"
                    class="flex flex-row justify-center sm:justify-between bg-white rounded-full sm:p-2 text-gray-500 ">
                    <p class="hidden sm:inline ">{{ i.text }}</p>
                    <div> <font-awesome-icon :icon="faUser" class="text-blue-500" /></div>
                </NuxtLink>
            </section>
        </aside>
        <div class="w-full">
            <header class="w-full h-fit h-12 py-4  h-fit bg-primary/80 rounded-3xl">
                <Logo class="w-64 m-auto py-1 h-full " />
            </header>
            <slot></slot>
        </div>
    </section>
</template>
<script setup lang="ts">
import Logo from "@/assets/svgs/marsaescapelogo.svg";
import { faUser } from '@fortawesome/free-solid-svg-icons'
const items = [{
    to: '/users',
    text: "المستخدمين",
    icon: faUser
}, {
    to: '/trips',
    text: "الرحلات",
    icon: faUser
}, {
    to: '/triptype',
    text: "انواع الرحلات",
    icon: faUser
}, {
    to: '/trips/reservations',
    text: "حجوزات الرحلات",
    icon: faUser
}]
</script>