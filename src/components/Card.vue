<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" v-if="!!$slots.header">
                <slot name="header"></slot>
            </h5>
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
