<template>
    <div class="card">
        <div class="card-header" v-if="!!$slots.header">
            <h5 class="card-title m-0"><slot name="header"></slot></h5>
        </div>
        <div class="card-body">
            <slot name="main" v-if="!!$slots.main"></slot>
        </div>
        <div class="card-footer" v-if="!!$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
}
</script>
