<script setup>
import ButtonSection from './sections/ButtonSection.vue';
</script>

<template>
    <div class="vitrine">
        <ButtonSection />
    </div>
</template>

<style>
body {
    background-color: white;
}

#app {
    display: flex;
    justify-content: center;
    align-items: center;
}

.vitrine {
    width: 60%;
    min-width: 375px;
    max-width: 975px;
    height: 100vh;
    background-color: #e0e0e0;
    padding: 2rem;
}
</style>
