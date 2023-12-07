<script setup lang="ts">
const cards = [
    {
        type: 'Видеохостинг',
        title: 'Видеохостинг с многоуровневой защитой контента и настройками приватности',
        list: [
            {text: 'Управляйте доступом к видео с защитой от пиратства'},
            {text: 'Настраивайте опции и внешний вид плеера'},
            {text: 'Открытое REST API для интеграции'}
        ],
        text: '',
        img: '/img/cards/card_1.png',
    },
    {
        type: 'Трансляции',
        title: 'Транслируйте видео для тысяч зрителей со всего мира',
        list: [
            {text: 'Проводите открытые или закрытые трансляции'},
            {text: 'Монетизируйте контент с помощью платного доступа'},
            {text: 'Вещайте по расписанию автовебинары или поток с ip камеры'}
        ],
        text: '',
        img: '/img/cards/card_2.png',
    },
    {
        type: 'Видеохостинг',
        title: 'Система продажи видео-контента',
        list: [],
        text: 'Прием оплаты в плеере. Для монетизации видеоуроков, вебинаров, трансляций и любого  авторского видеоконтента.',
        img: '/img/cards/card_3.png',
    },
];
</script>

<template>
    <section class="cards">

        <div class="wrapper">
            <div class="cards__list">
                <div class="cards__control">
                    <span class="cards__control-bullet"></span>
                    <span class="cards__control-bullet"></span>
                    <span class="cards__control-bullet"></span>
                </div>

                <div class="cards__item" v-for="(card, index) of cards" :key="index">
                    <div class="cards__inner">
                        <div class="cards__content">
                            <div class="cards__type">
                                <span>0{{ index + 1 }}</span>
                                {{ card.type }}
                            </div>

                            <div class="cards__title">
                                <h2>{{ card.title }}</h2>
                            </div>

                            <div class="cards__list" v-if="card.list.length > 0">
                                <ul>
                                    <li v-for="(list, index) of card.list" :key="index">{{ list.text }}</li>
                                </ul>
                            </div>

                            <div class="cards__text" v-if="card.text">
                                <span>{{ card.text }}</span>
                            </div>
                        </div>

                        <div class="cards__object">
                            <div class="cards__img">
                                <NuxtImg class="--cover" :src="card.img" :width="1450" :height="1294" :alt="card.title" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
</template>
