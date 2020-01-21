<template>
    <ValidationProvider v-slot="{ errors }" rules="required|email">
    <div class="form-group">
        <label> {{ label }} </label>
        <input :type="type" class="form-control" :class="invalid ? 'is-invalid' : ''" ref="input" @input="update" :value="value">
        <span>{{ errors[0] }}</span>
    </div>
    </ValidationProvider>

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
