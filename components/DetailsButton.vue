<template>
    <button class="details-button">Detalii</button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.details-button {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    // text-transform: uppercase;
    text-align: center;
    line-height: 38px;
    white-space: nowrap;
    min-width: 195px;
    height: 40px;
    font-weight: 500;
    font-size: 20px;
    flex-shrink: 0;
    color: rgb(255, 255, 255);
    background-color: #0070F3;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    padding: 0px 25px;
    border-radius: 5px;
    transition: all 0.2s ease 0s;
    overflow: hidden;
    outline: none;
    //box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px;
    margin: 20px 0px;
    // &:hover {
    //     box-shadow: rgba(0, 0, 0, 0.16) 0px 7px 20px;
    //     transform: translate3d(0px, -1px, 0px);
    // }
}
</style>
