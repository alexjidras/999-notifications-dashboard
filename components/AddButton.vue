<template>
    <button class="add-button">
        <i class="far fa-layer-plus add-icon"></i>
        Adaugă
    </button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.add-button {
    margin-right: auto;
    color: #fff;
    background: #3F8AFB;
    border-color: #3F8AFB;
    font-size: 16px;
    padding-left: 20px;
    padding-right: 20px;
    height: 45px;
    &:hover, &:focus {
        background: #fff;
        color: #3F8AFB;
        border-color: #3F8AFB;
    }
}
.add-icon {
    font-size: 18px;
}
</style>
