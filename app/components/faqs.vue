<template>
    <section class="py-16 md:py-24 px-4">
        <div class="max-w-3xl mx-auto">
            <h2 class="text-2xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
                Frequently Asked Question
            </h2>

            <div class="space-y-4">
                <div v-for="(q, i) in faqs" :key="i"
                    class="border border-border rounded-xl px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors">
                    <span class="text-foreground text-sm md:text-base">{{ q }}</span>
                    <ChevronDown class="w-5 h-5 text-muted-foreground" />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const faqs = [
    "Where are the best places for snorkeling in marsa alam?",
    "Where are the best places for snorkeling in marsa alam?",
    "Where are the best places for snorkeling in marsa alam?",
    "Where are the best places for snorkeling in marsa alam?",
    "Where are the best places for snorkeling in marsa alam?",
];</script>