<template>
    <div class="searchbar-container">
        <i class="far fa-search absolute-icon"></i>
        <input
        class="searchbar"
        placeholder="Caută..."
        />
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.searchbar-container {
    position: relative;
    margin-bottom: 30px;
}
.searchbar {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
    border: 1px solid #E8E8E8;
    width: 100%;
    padding: 13px 10px 13px 50px;
    font-size: 16px;
    border-radius: 4px;
    &:focus {
        outline:none;
    }
}
.absolute-icon {
    color: #8198AF;
    font-size: 18px;
    position: absolute;
    top: 14px;
    left: 18px;
}
</style>
