<template>

    <div class="form-group">
        <label> {{ label }} </label>
        <textarea class="form-control" :class="invalid ? 'is-invalid' : ''" ></textarea>
    </div>

</template>

<script>
export default {
    props:{
        label: String,
        type: String,
        invalid: Boolean
    }
}
</script>