<template>

    <button class="btn" :class="getClass">
        <slot></slot>
    </button>

</template>

<script>
export default {
    props:{
        fill: String,
        extend: Boolean
    },
    computed: {
        getClass() {
            let cl = "";
            if(typeof this.fill !== 'undefined') {
                cl += `btn-${this.fill} `
            }
            if(typeof this.extend !== 'undefined' && this.extend) {
                cl += 'btn-block '
            }
            
            return cl
        }
    },
    created(){

    }
}
</script>
