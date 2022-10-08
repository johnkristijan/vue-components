<template>
    <button type="button" @click="$emit('on-click')">
        {{ props.buttonText || 'default text' }}
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    buttonText: String,
});
</script>

<style lang="scss">
button {
    background-color: #0955ae;
    color: White;
    height: 36px;
    font-size: 14px;
    text-transform: uppercase;
    padding-left: 1rem;
    padding-right: 1rem;
    border: none;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    &:hover {
        cursor: pointer;
    }
}
</style>
