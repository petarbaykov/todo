<template>

    <button class="btn" :class="typeof face !== 'undefined' ? `btn-${face}` : ''">
        <slot></slot>
    </button>

</template>

<script>
export default {
    props:['face'],
    created(){
        console.log(this.face)
    }
}
</script>
