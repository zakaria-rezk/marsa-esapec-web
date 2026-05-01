<template>
    <div class="max-w-xl mx-auto animate-pulse">

        <!-- Success header skeleton -->
        <div class="flex flex-col items-center mb-8">
            <div class="w-20 h-20 rounded-full bg-gray-200 mb-6" />

            <div class="h-6 w-64 bg-gray-200 rounded mb-2" />
            <div class="h-4 w-80 bg-gray-200 rounded" />
        </div>

        <!-- Card skeleton -->
        <div class="border border-border rounded-lg p-6 mb-8 space-y-4">

            <!-- Title -->
            <div class="h-5 w-40 bg-gray-200 rounded" />
            <div class="h-4 w-24 bg-gray-200 rounded" />

            <!-- Items -->
            <div class="space-y-3 mt-4">
                <div v-for="i in 5" :key="i" class="flex items-center gap-3">
                    <div class="w-4 h-4 bg-gray-200 rounded-full" />
                    <div class="h-4 w-full bg-gray-200 rounded" />
                </div>
            </div>

            <!-- Booking info -->
            <div class="mt-6 space-y-3">
                <div v-for="i in 4" :key="i" class="flex justify-between">
                    <div class="h-4 w-24 bg-gray-200 rounded" />
                    <div class="h-4 w-32 bg-gray-200 rounded" />
                </div>
            </div>

            <!-- Total -->
            <div class="flex justify-between pt-4 border-t border-border">
                <div class="h-5 w-24 bg-gray-200 rounded" />
                <div class="h-5 w-20 bg-gray-200 rounded" />
            </div>

        </div>

        <!-- Button skeleton -->
        <div class="flex justify-center">
            <div class="h-10 w-48 bg-gray-200 rounded-full" />
        </div>

    </div>
</template>