<script setup>
import gsap from 'gsap';

let ctx;
const menu = ref();
const items = {
    primary: [
        {url: '#', title: 'Продукты'},
        {url: '#', title: 'Решения'},
        {url: '#', title: 'Тарифы'},
    ],
    secondary: [
        {url: '#', title: 'О нас'},
        {url: '#', title: 'Документы'}
    ]
}

onMounted(() => {
    ctx = gsap.context((self) => {
        const links = self.selector('.menu__item');

        gsap.from(links, {
            duration: 0.8,
            autoAlpha: 0,
            y: '-30',
            delay: 0.1,
            stagger: 0.05,
            ease: 'power2.out',
        })
    }, menu.value);
});

onUnmounted(() => {
    ctx.revert();
});
</script>

<template>
    <nav class="menu" ref="menu">
        <div class="menu__list">
            <div class="menu__item" v-for="(item, index) of items.primary" :key="index">
                <NuxtLink :href="item.url">{{ item.title }}</NuxtLink>
            </div>
        </div>

        <div class="menu__list">
            <div class="menu__item" v-for="(item, index) of items.secondary" :key="index">
                <NuxtLink :href="item.url">{{ item.title }}</NuxtLink>
            </div>
        </div>
    </nav>
</template>
