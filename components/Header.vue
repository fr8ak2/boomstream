<script setup>
import gsap from 'gsap';

let ctx;
const header = ref();
const logo = ref();

onMounted(() => {
    ctx = gsap.context(() => {
        gsap.set(header.value, { autoAlpha: 1 });

        gsap.from(logo.value, {
            autoAlpha: 0,
            y: '-30',
            ease: 'ease-in',
            duration: .65
        });
    });
});

onUnmounted(() => {
    ctx.revert();
});
</script>

<template>
    <header class="header" ref="header">
        <div class="wrapper">

            <div class="header__inner">
                <div class="header__logo" ref="logo">
                    <Logo ref="logo" />
                </div>

                <div class="header__menu">
                    <Nav />
                </div>

                <div class="header__tools">
                    <div class="header__auth">
                        <Auth ref="auth"/>
                    </div>

                    <div class="header__lang">
                        <Lang ref="lang"/>
                    </div>
                </div>
            </div>

        </div>
    </header>
</template>
