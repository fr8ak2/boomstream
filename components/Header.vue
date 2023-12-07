<script setup>
import gsap from 'gsap';

let ctx;
const header = ref();
const logo = ref();
const auth = ref();
const lang = ref();

onMounted(() => {
    ctx = gsap.context(() => {
        gsap.set(header.value, { autoAlpha: 1 });

        gsap.from(logo.value, {
            autoAlpha: 0,
            y: '-30',
            ease: 'power2.out',
            duration: .5
        });

        gsap.from(auth.value, {
            autoAlpha: 0,
            y: '-30',
            ease: 'power2.out',
            duration: .5,
            delay: .5,
        });

        gsap.from(lang.value, {
            autoAlpha: 0,
            y: '-30',
            ease: 'power2.out',
            duration: .5,
            delay: .65,
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
                    <div class="header__auth" ref="auth">
                        <Auth ref="auth"/>
                    </div>

                    <div class="header__lang" ref="lang">
                        <Lang ref="lang"/>
                    </div>
                </div>
            </div>

        </div>
    </header>
</template>
