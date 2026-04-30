<template>
    <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm animate-pulse" v-for="i in 3" >
            <!-- IMAGE AREA SKELETON -->
            <div class="relative h-56 bg-gray-200 flex items-center justify-center">
                <!-- Badge Skeleton (Top Left) -->
                <div class="absolute top-3 left-3 bg-gray-300 h-6 w-16 rounded-full"></div>

                <!-- Icon/Placeholder Text -->
                <div class="text-gray-300 font-bold text-xl uppercase tracking-widest">Loading</div>

                <!-- Rating Badge Skeleton (Bottom Right) -->
                <div class="absolute bottom-3 right-3 bg-gray-300 h-6 w-12 rounded-full"></div>
            </div>

            <!-- CONTENT AREA SKELETON -->
            <div class="p-5">
                <!-- Title -->
                <div class="h-5 bg-gray-300 rounded-md w-3/4 mb-4"></div>

                <!-- Location & Date Lines -->
                <div class="space-y-3 mb-6">
                    <div class="flex items-center gap-2">
                        <div class="w-4 h-4 bg-gray-200 rounded"></div>
                        <div class="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-4 h-4 bg-gray-200 rounded"></div>
                        <div class="h-3 bg-gray-200 rounded w-1/3"></div>
                    </div>
                </div>

                <!-- Footer Area -->
                <div class="flex items-center gap-2 mb-4">
                    <div class="h-7 bg-gray-300 rounded w-20"></div> <!-- Price -->
                    <div class="h-4 bg-gray-200 rounded w-12"></div> <!-- /Person -->
                </div>

                <!-- Button Skeleton -->
                <div class="h-9 bg-gray-200 rounded-lg w-32"></div>
            </div>
        </div>
    </div>
</template>