<template>
    <div id="button-section">
        <h2># Buttons</h2>
        <h3>Primary button</h3>
        <p>
            Use this button for the primary action on a page, try to have just
            one primary button visible to the user at all times.
        </p>
        <MButton @on-click="clickMethod()" :buttonText="'Primary'" />
    </div>
</template>

<script setup>
import MButton from '../components/MButton.vue';

const clickMethod = () => {
    console.log('button clicked');
};
</script>
