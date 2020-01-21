<template>

    <div class="form-group">
        <label> {{ label }} </label>
        <textarea class="form-control" :class="invalid ? 'is-invalid' : ''" ref="input" @input="update" :value="value"></textarea>
    </div>

</template>

<script>
export default {
    props:{
        label: String,
        type: String,
        invalid: Boolean,
        value: String
    },
    methods: {
        update() {
            this.$emit('input', this.$refs.input.value)
        }
    }
}
</script>